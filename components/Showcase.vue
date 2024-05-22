<template>
    <div class="show-case">
        <h3 class="show-case-title">{{ props.title }}</h3>
        <div class="show-case-content">
            <ui-card
                    :img="'/img/item.png'"
                    :title="'AIR JORDAN 12'"
                    :subtitle="'RETRO “ROYALTY”'"
                    :price="4999"
                    :is-hover="true"
            />
            <ui-card
                    :img="'/img/item.png'"
                    :title="'AIR JORDAN 12'"
                    :subtitle="'RETRO “ROYALTY”'"
                    :price="4999"
                    :is-hover="true"
            />
            <ui-card
                    :img="'/img/item.png'"
                    :title="'AIR JORDAN 12'"
                    :subtitle="'RETRO “ROYALTY”'"
                    :price="4999"
                    :is-hover="true"
            />
            <ui-card
                    :img="'/img/item.png'"
                    :title="'AIR JORDAN 12'"
                    :subtitle="'RETRO “ROYALTY”'"
                    :price="4999"
                    :is-hover="true"
            />
        </div>
    </div>
</template>

<script setup>
//Imports
import { defineProps } from 'vue';

//Props
const props = defineProps({
    title: { type: String }
});
</script>

<style lang='scss'>
.show-case { margin-bottom: 200px }

.show-case-title
{
    font-family: $inter;
    font-size: 40px;
    font-weight: 700;
    line-height: 48.41px;
    text-transform: uppercase;
    padding-left: 20px;
    margin-bottom: 30px;
    @include mq(0, $desktop) { font-size: 24px }
}


.show-case-content
{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}
</style>