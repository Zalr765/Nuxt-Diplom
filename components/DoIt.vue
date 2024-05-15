<template>
    <div class="do-it container">
        <div @click="isActive" class="do-it-btn"></div>
        <div :class="{ 'active' : active === true }" class="do-it-icon__wraper"><icons-grape class="do-it-icon rev" /></div>
        <span>Делаем так, чтобы вызвать улыбку на лицах людей Делаем так, чтобы вам хотели подражать</span>
        <div :class="{ 'active' : active === true }" class="do-it-icon__wraper"><icons-grape class="do-it-icon" /></div>
    </div>
</template>

<script setup>
//Imports
import { ref } from 'vue';

const active = ref(false)
const isActive = () =>
{
    active.value == false? active.value = true : active.value = false
}
</script>

<style lang='scss'>
.do-it
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 200px;
    overflow: hidden;
    padding: 0 200px;
    margin-bottom: 100px;
    @include mq($tablet, $desktop) { height: 150px };
    @include mq($mobile, $tablet)
    {
        padding: 0 110px;
        height: 100px;
    }
    @include mq(0, $mobile)
    {
        padding: 0 80px;
        height: 100px;
    }
    span
    {
        font-family: $inter;
        font-size: 40px;
        font-weight: 500;
        text-align: center;
        @include mq($tablet, $desktop) { font-size: 23px; }
        @include mq($mobile, $tablet) { font-size: 15px; }
        @include mq(0, $mobile) { font-size: 10px; }
    }
}

.do-it-btn
{
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30;
    cursor: pointer;
    margin: 0 auto;
    @include mq($tablet, $desktop)
    {
        width: 150px;
        height: 150px;
    }
    @include mq(0, $tablet)
    {
        width: 100px;
        height: 100px;
    }
}

.do-it-icon__wraper
{
    width: 50%;
    height: 200px;
    position: absolute;
    top:0;
    right: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: white;
    transition: all .5s;
    @include mq($tablet, $desktop) { height: 150px };
    @include mq(0, $tablet) { height: 100px };
    &:last-child
    {
        right: unset;
        left: 0;
        justify-content: end;
    }
    &.active
    {
        right: -39%;
        @include mq($tablet, $desktop) { right: -33% }
        @include mq(0, $tablet) { right: -35% }
    }
    &.active:last-child
    {
        left: -39%;
        @include mq($tablet, $desktop) { left: -33% }
        @include mq(0, $tablet) { left: -35% }
    }
}

.do-it-icon
{
    width: 200px;
    height: 200px;
    right: -50.5px;
    position: relative;
    @include mq($tablet, $desktop)
    {
        width: 150px;
        height: 150px;
        right: -38px;
    }
    @include mq(0, $tablet)
    {
        width: 100px;
        height: 100px;
        right: -26px;
    }
    &.rev
    {
        transform: scaleX(-1);
        right: 0;
        left: -50.5px;
        @include mq($tablet, $desktop) { left: -38px }
        @include mq(0, $tablet) { left: -26px }
    }
}
</style>