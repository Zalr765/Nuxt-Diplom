<template>
    <div :class="{'hover': isHover }"  class="ui-card">
        <img :src="props.img" alt="" class="ui-card-pic">
        <div class="ui-card-text">
            <span class="ui-card-text__title">{{ props.title }}</span>
            <span class="ui-card-text__subtitle">{{ props.subtitle }}</span>
            <span class="ui-card-text__price">{{ props.price }}  RUB.</span>
        </div>
    </div>
</template>

<script setup>
//Imports
import { defineProps } from 'vue';

//Props
const props = defineProps({
    title: { type: String },
    subtitle: { type: String },
    price: { type: Number },
    img: { type: String },
    isHover:
    {
        type: String,
        default: false
    },
});
</script>

<style lang='scss'>
.ui-card
{
    width: 100%;
    max-width: calc(25vw + 1px);
    border: 1px solid rgba(30, 30, 30, 1);
    margin: 0 -1px;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 0;
    @include mq($desktop, $widescreen)
    {
        height: 500px;
    }
    @include mq($tablet, $desktop)
    {
        height: 450px;
    }
    @include mq($mobile, $tablet)
    {
        max-width: 50vw;
        height: 500px;
    }
    @include mq(0, $mobile)
    {
        max-width: 100vw;
        height: 500px;
    }
    &:first-child
    {
        margin: 0;
        margin-right: -1px;
    }
    &:nth-child(4n)
    {
        margin-right: -1px;
    }
    transition: all .5s;
    &.hover:hover
    {
        @media (min-width: calc($tablet + 1px))
        {
            transform: translateY(100px);
            color: $grape;
        }
    }
}
.ui-card-pic
{
    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 350px;
    @include mq(0, $desktop)
    {
        max-width: 250px;
        max-height: 250px;
    }
}
.ui-card-text
{
    display: flex;
    flex-direction: column;
}
.ui-card-text__title
{
    font-family: $inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
}
.ui-card-text__subtitle,.ui-card-text__price
{
    font-family: $inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 24.2px;
}
.ui-card-text__price { margin-top: 20px; }
</style>