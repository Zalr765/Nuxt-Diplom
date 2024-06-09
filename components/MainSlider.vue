<template>
    <div class="main-slider container">
        <div class="main-slider-text">
            <h1 class="main-slider-text__title">GRAPE<br><span>&</span>POIZON</h1>
            <div class="main-slider-text__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div class="main-slider-сontent">
            <Swiper
                class="main-slider-сontent__swiper"
                :slides-per-view="1"
                :space-between="50"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :modules="modules"
                :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                }"
            >
                <swiper-slide
                    v-for="i in 4"
                    :key="i"
                    class="main-slider-сontent__swiper-slide"
                >
                    <img src="/img/item.png" alt="" srcset="">
                    <h2>Louis vuitton</h2>
                    <span>trainer</span>
                    <span>4999 rub.</span>
                </swiper-slide>
            </Swiper>
            <div class="main-slider-content__navigation">
                <div
                    ref="prev"
                    @click="prevSlide"
                    >
                    <icons-arrow />
                </div>
                <p class="main-slider-content__navigation-pag"><span>{{ getSlide }}</span> OF <span> {{ slideLength }} </span></p>
                <div
                        ref="next"
                        @click="nextSlide"
                        class="reverse"
                    >
                    <icons-arrow/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { ref } from 'vue';

const prev = ref();
const next = ref();
let getSlide = ref(1);
let slideLength = ref(0);
const swiperInstance = ref(null);

const prevSlide = () => {
	if (swiperInstance.value) {
		swiperInstance.value.slidePrev();
	}
};

const nextSlide = () => {
	if (swiperInstance.value) {
		swiperInstance.value.slideNext();
	}
};

const onSwiper = (swiper) => {
	swiperInstance.value = swiper;
	slideLength.value = swiper.slides.length;
};


const onSlideChange = (slide) => {
    getSlide.value = slide.activeIndex + 1;
};


const modules = [Navigation, Autoplay];
</script>

<style lang="scss">
.main-slider
{
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 200px;
    @include mq (0, $desktop) { gap: 20px; };
    @include mq (0, $tablet) { margin-bottom: 100px; }
}

.main-slider-text
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include mq (0, $tablet)
    {
        flex-direction: row;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    };
}

.main-slider-text__title
{
    color:#1E1E1E;
    font-size: 100px;
    font-weight: 900;
    @include mq ($tablet, $desktop) { font-size: 70px; }
    @include mq (0, $tablet) { font-size: 60px; }
    span{ color: $grape }
}

.main-slider-text__subtitle
{
    max-width: 600px;
    @include mq ($tablet, $desktop)
    {
        max-width: 350px;
        font-size: 18px;
    }
    @include mq (0, $tablet) { font-size: 15px }
    font-family: $inter;
    font-size: 20px;
    font-weight: 400;
}

.main-slider-сontent
{
    width: 100%;
    max-width: 700px;
    height: 620px;
    border: 1px solid black;
    @include mq ($tablet, $desktop)
    {
        max-width: 400px;
        height: 400px;
    }
    @include mq (0, $tablet){ display: none }
}

.main-slider-сontent__swiper
{
    height: 100%;
    height: 95%;
    max-width: 500px;
    width: 100%;
    @include mq ($tablet, $desktop)
    {
        max-width: 500px;
        max-height: 500px;
    }
}
.main-slider-сontent__swiper-slide
{
    height: 95%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $grape;
    font-family: $inter;
    text-transform: uppercase;
    @include mq ($tablet, $desktop)
    {
        max-width: 500px;
        max-height: 500px;
    }
    img
    {
        width: 100%;
        height: 100%;
        max-width: 400px;
        max-height: 400px;
    }
    h2
    {
        font-size: 20px;
        font-weight: 600;
        font-family: $inter;
        margin-bottom: 5px;
    }
    span
    {
        margin-bottom: 8px;
        font-family: $inter;
        font-size: 18px;
        font-weight: 400;
    }
}

.main-slider-content__navigation
{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    div{  cursor: pointer }
}

.reverse { transform: scaleX(-1) }
</style>