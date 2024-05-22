<template>
<div class="color container">
	<h2 class="color-title">Выбери свой стиль</h2>
	<div class="color-content">
		<Swiper
			class="color-content__item"
			:slides-per-view="1"
			:space-between="50"
			:allowTouchMove="false"
			@swiper="onSwiper"
		>
			<swiper-slide>
				<img src="/img/color_1.png">
			</swiper-slide>
			<swiper-slide>
				<img src="/img/color_2.jpg">
			</swiper-slide>
			<swiper-slide>
				<img src="/img/color_3.jpg">
			</swiper-slide>
		</Swiper>
		<div class="color-content__text">
			<div>
				<span>С тех пор, как в прошлом месяце были представлены</span>
				<p>Air Jordan 4 «Shimmer»</p>
				<span>новый женский эксклюзив от Jumpman сравнивают с популярными моделями от Hender Scheme и Off-White x Air Jordan 4 «Sail».В ознаменование этого действительно классного релиза GOAT выбрали лучшие женские Air Jordan 4, выпущенные за всю историю этого силуэта. Модельный ряд демонстрирует разнообразие, доказывая, что «четверки» учитывают различие  и разнообразие личностей сильных и вдохновляющих девушек-сникерхедов, которые их носят.</span>
			</div>
			<div class="color-content__text-btns">
					<button :class="{'active' :active === 0}" @click="indexSlideTo(0)" class="--beg"></button>
					<button :class="{'active' :active === 1}" @click="indexSlideTo(1)" class="--brown"></button>
					<button :class="{'active' :active === 2}" @click="indexSlideTo(2)" class="--black"></button>
			</div>
		</div>
		<Swiper
				class="color-content__model"
				:slides-per-view="1"
				:space-between="50"
				:allowTouchMove="false"
				@swiper="onSwiper2"
			>
			<swiper-slide>
				<img src="/img/model_1.png">
			</swiper-slide>
			<swiper-slide>
				<img src="/img/model_2.jpg">
			</swiper-slide>
			<swiper-slide>
				<img src="/img/model_3.jpg">
			</swiper-slide>
		</Swiper>
	</div>
</div>
</template>

<script setup>
//Imports
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';
import { ref } from 'vue';

//Variables
const slider = ref(0);
const slider2 = ref(0);

const active = ref(0);


//Functions
const onSwiper = (swiper) =>  slider.value = swiper;
const onSwiper2 = (swiper) => slider2.value = swiper;

const indexSlideTo = (index) =>{
	slider2.value.slideTo(index);
	slider.value.slideTo(index);
	active.value = index;
}

</script>

<style lang='scss'>
.color { margin-bottom: 150px }

.color-title
{
    font-family: $inter;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
	text-transform: uppercase;
	@include mq(0, $desktop) { font-size: 24px }
}

.color-content
{
	display: flex;
	justify-content: space-between;
	gap: 20px;
	@include mq (0, $tablet) { gap: 5px }
}

.color-content__item
{
	width: 100%;
	max-width: 950px;
	margin: 0;
	img
	{
		height: 100%;
		width: 100%;
	}
	@include mq (0, 1600px) { max-width: 600px }
	@include mq ($desktop, 1300px) { height: 400px}
	@include mq ($tablet, $desktop) { height: 300px }
	@include mq (0, $tablet) { height: 170px }

}

.color-content__text
{
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@include mq (0, 1300px) { max-width: 300px}
	@include mq ($tablet, $desktop) { max-width: 200px}
	@include mq (0, $tablet)
	{
		max-width: 40px;
		justify-content: center;
	}
	div
	{
		@include mq (0, $tablet) { display: none }
		span
		{
			font-family: $inter;
			font-size: 18px;
			font-weight: 400;
			line-height: 25.2px;
			@include mq ($desktop, 1300px)
			{
				font-size: 11.5px;
				line-height: 20px;
			}
			@include mq ($tablet, $desktop)
			{
				font-size: 7.5px;
				line-height: 1px;
			}
		}
		p
		{
			font-family: $inter;
			font-size: 20px;
			font-weight: 600;
			line-height: 24.2px;
			color: $grape;
			text-transform: uppercase;
			margin: 5px 0;
			@include mq ($desktop, 1300px){ font-size: 17px }
			@include mq ($tablet, $desktop)
			{
				font-size: 12px;
				margin: 3px 0;
				line-height: 15px;
			}
		}
	}
}

div.color-content__text-btns
{
	display: flex;
	box-sizing: border-box;
	gap: 20px;
	@include mq (0, $tablet)
	{
		height: 170px;
		width: 40px;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	button
	{
		width: 30px;
		height: 30px;
		border: none;
		border-radius: 100%;
		transition: .3s opacity;
		transition: .2s opacity;
		@include mq (0, $tablet)
		{
			width: 40px;
			height: 40px;
		}
	}
	button.active{ border: 3px solid $grape }
	button:hover { opacity: .8; }
	.--beg { background-color: #EBD8C7 }
	.--brown { background-color: rgb(130, 39, 23) }
	.--black { background-color: black }
}


.color-content__model
{
	width: 100%;
	max-width: 480px;
	margin: 0;
	img
	{
		height: 100%;
		width: 100%;
	}
	@include mq (1300px, 1600px) { max-width: 300px }
	@include mq ($desktop, 1300px)
	{
		height: 400px;
		max-width: 250px
	}
	@include mq ($tablet, $desktop)
	{
		height: 300px;
		max-width: 200px;
	}
	@include mq (0, $tablet)
	{
		max-width: 130px;
		height: 170px;
	}
}
</style>