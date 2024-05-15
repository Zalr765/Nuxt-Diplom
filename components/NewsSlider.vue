<template>
    <div class="news-slider">
        <h2 class="news-slider-title">НОВОСТИ</h2>
        <div class="news-slider-content">
            <div class="news-slider-content__block">
                <div class="news-slider-content__block-text">
                    <h2>CELINE ANNOUNCES SUMMER 2023 TENNIS CAPSULE</h2>
                    <span>12.04.2023</span>
                    <div>
                        <p>CELINE just announced its new Summer 2023 tennis capsule,<br> complemented by a campaign shot in sunny Saint-Tropez. </p><br>
                        <span>Comprising a range of spring-ready apparel, including tennis skirts, polo tops, vests and jackets, the collection also offers a range of seasonal sneakers in five core silhouettes. Arriving in low and high-top iterations, the footwear collection also sees the introduction of a wedge sneaker</span></div>
                </div>
                <div class="news-slider-content__block-nagination">
                        <icons-arrow
                            @click="prevSlide"
                            class="arrow"
                            />
                    <span>{{ getSlide }} OF {{ slideLength }}</span>
                        <icons-arrow
                            class="reverse arrow"
                            @click="nextSlide"
                        />
                </div>
            </div>
            <swiper
                    class="news-slider-content__swiper"
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
                    class="slide"
                    v-for="i in 4"
                    :key="i"
                    >
                    <img src="/img/news.jpg" alt="" class="">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
//Imports
import { Swiper, SwiperSlide} from 'swiper/vue';
import { Navigation } from 'swiper/modules'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css';
import { ref } from 'vue';
const swiperInstance = ref(null);

//Variables
let getSlide = ref(1);
let slideLength = ref(0);

const onSwiper = (swiper) => {
    console.log(swiper);
    swiperInstance.value = swiper;
    slideLength.value = swiper.slides.length;
};

const onSlideChange = (swiper) => {
    getSlide.value = swiper.activeIndex + 1;
};

const prevSlide = () => {
    if (swiperInstance.value)
        swiperInstance.value.slidePrev()
};

const nextSlide = () => {
    if (swiperInstance.value)
        swiperInstance.value.slideNext();
};

</script>

<style lang='scss'>
.news-slider
{
    margin-bottom: 100px;
    margin-left: 60px;
    @include mq (0, 1024px ) { display: none }
}

.news-slider-title
{
    font-family: $inter;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
}

.news-slider-content
{
    display: flex;
    justify-content: space-between;
}

.news-slider-content__block
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
}



.news-slider-content__block-text
{
    width: 100%;
    max-width: 840px;
    h2
    {
        font-family: $inter;
        color: $grape;
        font-size: 26px;
        font-weight: 600;
        line-height: 36.31px;
        margin-bottom: 10px;
        @include mq ($tablet, 1800px ) { font-size: 24px; }
    }
    span
    {
        font-family: $inter;
        font-size: 15px;
        font-weight: 600;
        line-height: 18.15px;
    }
    div
    {
        margin-top: 20px;
        p
        {
        font-family: $inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        text-transform: uppercase;
        @include mq (0, $fullhd ) { font-size: 12px; }
        }
        span
        {
            padding-top: 30px;
            font-family: $inter;
            font-size: 18px;
            font-weight: 400;
            text-transform: uppercase;
            line-height: 28px;
            @include mq (0, $fullhd )
            {
                font-size: 12px;
                padding-top: 15px;
            }
        }
    }
}

.news-slider-content__block-nagination
{
    display: flex;
    align-items: center;
    gap: 20px;
    span
    {
        font-family: $inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 21.78px;
    }
}


.news-slider-content__swiper
{
    width: 100%;
    max-width: 960px;
    margin: 0;
}

.arrow { cursor: pointer }

.reverse { transform: scaleX(-1) }



</style>