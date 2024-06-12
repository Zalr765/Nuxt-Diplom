<template>
    <div :class="{'hover': isHover }" class="ui-card">
        <NuxtLink :to="route">
            <img :src="props.img" alt="" class="ui-card-pic">
        </NuxtLink>
        <div class="ui-card-text">
            <span class="ui-card-text__title">{{ props.title }}</span>
            <span class="ui-card-text__subtitle">{{ props.subtitle }}</span>
            <span class="ui-card-text__price">{{ props.price }}  RUB.</span>
            <div v-if="props.delete" class="ui-card-text__count">
                <button  @click="updateCount(-1)">-</button>
                <span>{{ props.count }}</span>
                <button @click="updateCount(1)">+</button>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    isHover: { type: Boolean, default: false },
    route: { type: String, default: '/' },
    delete: { type: Boolean, default: false },
    count: { type: Number},
    updateItemCount: { type: Function},
    id: { type: Number }
});

const emit = defineEmits(['update-item-count']);

const updateCount = (delta) => {
    emit('update-item-count', props.id, props.count + delta);
};

const removeItem = () => {
    emit('update-item-count', props.id, 0);
};
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
    position: relative;
    margin-left: 0;
    &:hover{ color: $grape }
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

.ui-card-delete
{
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 9999999;
    cursor: pointer;
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

.ui-card-text__count button {
    border: none;
    width: 30px;
    height: 30px;
    background-color: #A552E7;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ui-card-text
{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.ui-card-text__title
{
    font-family: $inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    text-transform: uppercase;
}

.ui-card-text__subtitle,.ui-card-text__price
{
    font-family: $inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 24.2px;
}

.ui-card-text__count
{
    margin-top: 5px;
    font-size: 16px;

}

.ui-card-text__price { margin-top: 20px; }

.ui-card-text__count
{
    display: flex;
    justify-content: space-between;
    button
    {
        border: none;
        width: 30px;
        height: 30px;
        background-color: $grape;
        color: white;
    }
}
</style>
