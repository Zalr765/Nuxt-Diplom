<template>
<div class="detail">
	<div class="detail-title container"><NuxtLink to="/">Главная</NuxtLink> / <NuxtLink to="/man">Мужчинам</NuxtLink> /  {{ item? item.title : '' }}</div>
	<div class="detail-content container">
		<swiper
				class="detail-content__swiper"
				:loop="true"
				:direction="'vertical'"
				:autoplay="{
					delay: 4000,
				}"
				:modules="modules"
			>
			<swiper-slide class="detail-content__swiper-slide" v-if="item && item.detail">
				<img :src="item.detail.default" alt="" srcset="">
			</swiper-slide>
			<swiper-slide class="detail-content__swiper-slide" v-if="item && item.detail">
				<img :src="item.detail.front" alt="" srcset="">
			</swiper-slide>
			<swiper-slide class="detail-content__swiper-slide" v-if="item && item.detail">
				<img :src="item.detail.topdwon" alt="" srcset="">
			</swiper-slide>
		</swiper>
		<div v-if="popup" @click.prevent.self="togglePopup" class="table">
			<div class="table-item">
				<div class="ps-container tc-c1 ps ps--active-x"><table class="tc-a7 tc-b9"><tbody><tr><th title="Длина стопы, см"><div class="tc-b">Длина стопы, см</div><div class="tc-a9"></div></th><td class="">22.1</td><td class="">22.5</td><td class="">22.9</td><td class="">23.3</td><td class="">23.8</td><td class="">24.2</td><td class="">24.6</td><td class="">25</td><td class="">25.5</td><td class="">25.9</td><td class="">26.3</td><td class="">26.7</td><td class="">27.1</td><td class="">27.6</td><td class="">28</td><td class="">28.4</td><td class="">28.8</td><td class="">29.3</td><td class="">29.7</td><td class="">30.1</td><td class="">30.5</td><td class="">31</td><td class="">31.4</td><td class="">31.8</td><td class="">32.6</td><td class="">33.5</td><td class="">34.3</td><td class="">35.2</td></tr><tr><th title="Европейский размер, EU"><div class="tc-b">Европейский размер, EU</div><div class="tc-a9"></div></th><td class="">36</td><td class="">36 2/3</td><td class="">37 1/3</td><td class="">38</td><td class="">38 2/3</td><td class="">39 1/3</td><td class="">40</td><td class="">40 2/3</td><td class="">41 1/3</td><td class="">42</td><td class="">42 2/3</td><td class="">43 1/3</td><td class="">44</td><td class="">44 2/3</td><td class="">45 1/3</td><td class="">46</td><td class="">46 2/3</td><td class="">47 1/3</td><td class="">48</td><td class="">48 2/3</td><td class="">49 1/3</td><td class="">50</td><td class="">50 2/3</td><td class="">51 1/3</td><td class="">52 2/3</td><td class="">53 1/3</td><td class="">54 2/3</td><td class="">55 2/3</td></tr><tr><th title="Английский размер, UK"><div class="tc-b">Английский размер, UK</div><div class="tc-a9"></div></th><td class="">3.5</td><td class="">4</td><td class="">4.5</td><td class="">5</td><td class="">5.5</td><td class="">6</td><td class="">6.5</td><td class="">7</td><td class="">7.5</td><td class="">8</td><td class="">8.5</td><td class="">9</td><td class="">9.5</td><td class="">10</td><td class="">10.5</td><td class="">11</td><td class="">11.5</td><td class="">12</td><td class="">12.5</td><td class="">13</td><td class="">13.5</td><td class="">14</td><td class="">14.5</td><td class="">15</td><td class="">16</td><td class="">17</td><td class="">18</td><td class="">19</td></tr><tr><th title="Американский размер, US"><div class="tc-b">Американский размер, US</div><div class="tc-a9"></div></th><td class="">4</td><td class="">4.5</td><td class="">5</td><td class="">5.5</td><td class="">6</td><td class="">6.5</td><td class="">7</td><td class="">7.5</td><td class="">8</td><td class="">8.5</td><td class="">9</td><td class="">9.5</td><td class="">10</td><td class="">10.5</td><td class="">11</td><td class="">11.5</td><td class="">12</td><td class="">12.5</td><td class="">13</td><td class="">13.5</td><td class="">14</td><td class="">14.5</td><td class="">15</td><td class="">16</td><td class="">17</td><td class="">18</td><td class="">19</td><td class="">20</td></tr></tbody></table><div class="ps__rail-x" style="width: 868px; left: 26px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 9px; width: 319px;"></div></div><div class="ps__rail-y" style="top: 0px; right: -26px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
			</div>
		</div>
		<div class="detail-content__info">
			<h3>{{ item? item.title : '' }}</h3>
			<div class="detail-content__info-price">
				<span>{{ item? item.price : '' }} RUB.</span>
				<p>{{ item? item.price + 2000 : '' }} RUB.</p>
			</div>
			<div class="detail-content__info-text">{{ item? item.text : '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }} </div>
			<div @click="togglePopup" class="detail-content__info-table">Показать таблицу размеров</div>
			<div class="detail-content__info-btns">
				<button @click="toggleToCart(user, id, false)">
					<span>Добавить</span>
				</button>
				<span v-if="cartItem > 0">{{ cartItem }}</span>
				<div class="detail-content__info-btns__like">
					<icons-like/>
				</div>
			</div>
		</div>
	</div>

	<showcase
		:title="'вам так же могут понравиться'"
	/>
</div>
</template>

<script setup>
// Imports
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

// Vars
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const item = ref(null);
const popup = ref(false);
const isCart = ref(false);
const user = ref();
const cart = ref();
const cartItem = ref()

//Funct

const getUser = () => user.value = localStorage.getItem('user');

const togglePopup = () => popup.value = !popup.value;

const updateItem = () =>
{
	const itemLen = cart.value.filter((el) => el == id)
	cartItem.value = itemLen.length
}

const getCart = async (userID) =>
{
	try
	{
		const response = await axios.get(`https://c2ca606bd5038de3.mokky.dev/users/${userID}`);
		cart.value = response.data.cart;
		updateItem()
	} catch (error){
		console.log(error);
	}
}

const fetchItem = async (id) => {
    try {
        const response = await axios.get(`https://c2ca606bd5038de3.mokky.dev/items/${id}`);
        if (response.data) {
            item.value = response.data;
        } else {
            throw new Error('Item not found');
        }
    } catch (error) {
        router.push('/404');
    }
};


const toggleToCart = async (userId, itemId, action) => {
    try {
        console.log(`Toggling cart for user ${userId}, action: ${action}, itemId: ${itemId}`);

        const response = await axios.get(`https://c2ca606bd5038de3.mokky.dev/users?id=${userId}`);
        const currentUser = userId

        if (currentUser) {
            console.log('Current cart:', response.data);
            let updatedCart = [...cart.value];

            if (action === false)
			{
                    updatedCart.push(itemId);

					cart.value = updatedCart; // Обновляем состояние корзины
					updateItem();

            }

            console.log('Updated cart:', updatedCart);
            await axios.patch(`https://c2ca606bd5038de3.mokky.dev/users/${userId}`, { cart: updatedCart });
        } else {
            console.error('User not found');
        }
    } catch (error) {
        console.error('Error toggling cart item:', error);
    }
};


onMounted(() => {

    fetchItem(id);

	getUser(id)
	getCart(user.value)
});

//Swiper Modules
const modules = [Autoplay];
</script>

<style lang="scss">
.detail
{
	.show-case
	{
		margin-bottom: 130px;
		margin-top: 100px;
	}
}

.detail-title
{
	margin-bottom: 50px;
	text-transform: uppercase;
	cursor : default;
}

.detail-content
{
	display: flex;
	justify-content: space-between;
	gap: 10px;
	margin-bottom: 50px;
}

.swiper.detail-content__swiper
{
	width: 100%;
	max-width: 500px;
	height: 450px;
	border: 1px solid black;
	margin: 0;
}

.detail-content__swiper-slide
{
	img
	{
		width: 100%;
		max-width: 500px;
		height: 500px;
	}
}

.detail-content__info
{
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 40vw;
	h3
	{
		font-family: $inter;
		font-weight: 700;
		font-size: 40px;
		text-transform: uppercase;
		margin-bottom: 40px;
	}
}

.detail-content__info-price
{
	display: flex;
	justify-content: center;
	gap: 20px;
	width: 100%;
	span
	{
		font-family: $inter;
		color: $grape;
		font-size: 30px;
		font-weight: 600;
	}
	p
	{
		font-family: $inter;
		color: #D0D0D0;
		text-decoration: line-through;
		font-size: 30px;
		font-weight: 400;
		line-height: 36.31px;
	}
}

.detail-content__info-text
{
	margin-top: 60px;
	font-family: $inter;
	font-size: 18px;
	font-weight: 400;
	line-height: 25.2px;
	text-align: center;
	max-width: 70%;
}

.detail-content__info-btns
{
	display: flex;
	align-items: center;
	gap: 10px;
	margin-top: auto;
	width: 100%;
	button
	{
		width: 100%;
		border: none;
		border-radius: 25px;
		height: 40px;
		background-color: $grape;
		color: white;
	}
}

.detail-content__info-btns__like
{
	svg
	{
		cursor: pointer;
	}
	path
	{
		transition: all .3s;
	}
	svg:hover
	{
		path
		{
			fill: $grape;
		}
	}
}

.table
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

.table-item
{
	padding: 50px;
	background-color: white;
	width: 100%;
	max-width: 768px;
	overflow: auto;
	&::before
	{
		content: "";
		display: block;
		width: 50px;
		height: 300px;
		left: 256px;
		z-index: 999;
		background-color: white;
		position: fixed;
	}
}

.tc-a7
{
    border-collapse: collapse;
    color: #001a34;
    font-size: 14px;
    letter-spacing: .2px;
    line-height: 18px;
}
.tc-a7 tbody {
    border: 1px solid #f2f5f9;
    border-left: none;
}
.tc-a7 th {
    background-color: #f2f5f9;
    color: #707f8d;
    font-weight: 500;
    height: 68px;
    left: 0;
    max-height: 68px;
    max-width: 300px;
    overflow: hidden;
    padding: 6px 12px;
    position: sticky;
    text-align: left;
    vertical-align: middle;
    white-space: pre-wrap;
}

.tc-a7 td {
    word-wrap: break-word;
    max-width: 150px;
    min-width: 80px;
    padding: 6px 16px;
}

.tc-a7 td, .tc-a7 th {
    box-sizing: border-box;
}
td, tfoot, th, thead {
    font-size: 1em;
    text-transform: none;
}
.tc-a7 tr+tr {
    border-top: 1px solid #f2f5f9;
}

tbody{ position: relative }


.detail-content__info-table
{
	width: 300px;
	height: 40px;
	margin-top: 50px;
	text-align: center;
	padding-top: 7px;
	color: $grape;
	border: 3px solid $grape ;
	cursor: pointer;
	transition: .3s all;
	&:hover
	{
		color: white;
		background-color: $grape;
	}
}
</style>