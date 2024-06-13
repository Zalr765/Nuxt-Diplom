<template>
    <div class="man">
        <div @click.prevent.self="togglePopup" v-if="popup" class="man-popup">
            <from class="man-popup__content">
                <span>Доставить</span>
                <p>К оплате: {{ totalPrice }}</p>
                <input placeholder="Имя" type="text">
                <input placeholder="Фамилися" type="text">
                <input placeholder="Адрес" type="text">
                <button @click="togglePopup">Отправить</button>
            </from>
        </div>
        <div class="man-top container">
            <div class="man-pay">
                <p>К оплате: <span>{{ totalPrice }}</span></p>
                <button @click="togglePopup">Заказать</button>
            </div>
            <div class="man-top__title">Корзина</div>
            <div class="man-top__filter">
                <ui-dropdown
                    title="Категория"
                    :options="categoryOptions"
                    v-model="selectedCategory"
                />
                <ui-dropdown
                    title="Брэнд"
                    :options="brandOptions"
                    v-model="selectedBrand"
                />
                <ui-dropdown
                    title="Цена"
                    :options="priceOptions"
                    v-model="selectedPrice"
                />
            </div>
        </div>
        <div class="man-content">
            <div class="man-content__empty" v-if="items.length === 0">Ваша <span>корзина</span> пока пуста</div>
            <ui-card
                v-for="item in items"
                :key="item.id"
                :img="item.img"
                :title="item.title"
                :subtitle="item.subtitle"
                :price="item.price"
                :route="'/man/' + item.id"
                :delete="true"
                :count="item.count"
                @update-item-count="updateItemCount"
                :id="item.id"
            >
                Количество: {{ item.count }}
            </ui-card>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import axios from 'axios';

definePageMeta({
    middleware: 'auth'
});

// Filter options
const categoryOptions = ref([
    { value: 'sneakers', label: 'Кроссовки' },
    { value: 'jacket', label: 'Куртка' },
    { value: 'pants', label: 'Штаны' },
    { value: '*', label: 'Любой' },
]);

const items = ref([]);

const brandOptions = ref([
    { value: 'nike', label: 'Nike' },
    { value: 'yeezy', label: 'YEEZY' },
    { value: 'adidas', label: 'Adidas' },
    { value: 'Louis vuitton', label: 'Louis vuitton' },
    { value: 'okai', label: 'OKAI' },
    { value: '*', label: 'Любой' },
]);

const priceOptions = ref([
    { value: '-price', label: 'Сначала дорогие' },
    { value: 'price', label: 'Сначала дешевые' },
]);

const selectedCategory = ref(null);
const selectedBrand = ref(null);
const selectedPrice = ref(null);
const popup = ref();
const togglePopup = () => popup.value = !popup.value;

const user = ref(null);

const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + item.price * item.count, 0);
});

onMounted(async () => {
    user.value = localStorage.getItem('user');
    await getCartItems();
});

// Axios request function
const requestItems = async (params) => {
    try {
        const response = await axios.get('https://c2ca606bd5038de3.mokky.dev/items', { params });
        items.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

// Get cart items
const getCartItems = async () => {
    if (!user.value) return;

    try {
        const response = await axios.get(`https://c2ca606bd5038de3.mokky.dev/users?id=${user.value}`);
        const cart = response.data[0]?.cart || [];

        const itemCounts = {};
        cart.forEach(itemId => {
            if (itemCounts[itemId]) {
                itemCounts[itemId]++;
            } else {
                itemCounts[itemId] = 1;
            }
        });

        if (Object.keys(itemCounts).length > 0) {
            const params = Object.keys(itemCounts).map(id => ['id', id]);
            const queryString = new URLSearchParams(params).toString();
            const itemResponse = await axios.get(`https://c2ca606bd5038de3.mokky.dev/items?${queryString}`);

            items.value = itemResponse.data.map(item => ({
                ...item,
                count: itemCounts[item.id] || 0
            }));
        } else {
            items.value = [];
        }
    } catch (error) {
        console.error(error);
    }
};

// Update item count
const updateItemCount = async (itemId, newCount) => {
    // Update the local state first
    if (newCount < 1) {
        items.value = items.value.filter(item => item.id !== itemId);
    } else {
        const itemIndex = items.value.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            items.value[itemIndex].count = newCount;
        }
    }

    // Update the server-side state
    await toggleToCart(user.value, itemId, newCount);
};

// Toggle cart
const toggleToCart = async (userId, itemId, newCount) => {
    try {
        const response = await axios.get(`https://c2ca606bd5038de3.mokky.dev/users?id=${userId}`);
        const currentUser = response.data[0];

        if (currentUser) {
            let updatedCart = [...currentUser.cart];

            // Remove all instances of itemId
            updatedCart = updatedCart.filter(id => id !== itemId);

            // Add itemId the required number of times
            for (let i = 0; i < newCount; i++) {
                updatedCart.push(itemId);
            }

            await axios.patch(`https://c2ca606bd5038de3.mokky.dev/users/${userId}`, { cart: updatedCart });
        } else {
            console.error('User not found');
        }
    } catch (error) {
        console.error('Error toggling cart item:', error);
    }
};


// Watchers
watch([selectedCategory, selectedBrand, selectedPrice], async ([newCategory, newBrand, newPrice]) => {
    const params = {};
    if (newCategory) params.category = newCategory;
    if (newBrand) params.brand = newBrand;
    if (newPrice) params.sortBy = newPrice;
    await requestItems(params);
}, { immediate: true });
</script>

<style lang='scss'>
.man-top__title {
    font-family: $inter;
    text-transform: uppercase;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
}

.man-top__filter {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
}

.man-content {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .man-content__empty {
        color: rgb(158, 158, 158);
        font-size: 38px;
        text-align: center;
        margin: 100px auto;
        span { color: $grape }
    }
}

.man-pay {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    p {
        font-family: $inter;
        font-size: 16px;
    }
    button {
        border: none;
        border-radius: 25px;
        padding: 10px 20px;
        background-color: $grape;
        color: white;
    }
}

.man-popup
{
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 99999;
	background-color: rgba(0, 0, 0, 0.6)
}
.man-popup__content
{
    background-color: white;
    width: 100%;
    height: 400px;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    justify-content: space-around;
    align-items: center;
    span { font-size: 28px; }
    button
    {
        border: none;
        background-color: $grape;
        padding: 15px 40px;
        color: white;
        
    }
}
</style>
