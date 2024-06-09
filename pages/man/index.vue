<template>
    <div class="man">
        <div class="man-top container">
            <div class="man-top__title"><NuxtLink to="/">Главная</NuxtLink> / Мужчинам</div>
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
            <div v-if="items.length === 0">Нет доступных <span>товаров</span></div>
            <ui-card
                    v-for="item in items"
                    :key="item.id"
                    :img="item.img"
                    :title="item.title"
                    :subtitle="item.subtitle"
                    :price="item.price"
                    :route="'/man/' + item.id"
            />
        </div>
    </div>
</template>

<script setup>
// Imports
import { ref, watch } from 'vue';
import axios from 'axios';

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

// Selected values
const selectedCategory = ref(null);
const selectedBrand = ref(null);
const selectedPrice = ref(null);

// Axios request function
const request = async (params) => {
    try {
        const response = await axios.get('https://c2ca606bd5038de3.mokky.dev/items', {
            params: {
                ...params,
                sex: ['male', 'unisex'],
            }
        });
        items.value = response.data;
    } catch (error) {
        console.log(error);
    }
};

// Watchers
watch([selectedCategory, selectedBrand, selectedPrice], ([newCategory, newBrand, newPrice]) => {
    const params = {};
    if (newCategory) params.category = newCategory;
    if (newBrand) params.brand = newBrand;
    if (newPrice) params.sortBy = newPrice;
    request(params);
}, { immediate: true }); // immediate: true вызовет наблюдатель сразу после его определения
</script>

<style lang='scss' scoped>
.man-top__title
{
    font-family: $inter;
    text-transform: uppercase;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
}

.man-top__filter
{
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
}

.man-content
{
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    div
    {
        color: rgb(158, 158, 158);
        font-size: 38px;
        text-align: center;
        margin: 0 auto;
        span { color: $grape }
    }
}
</style>