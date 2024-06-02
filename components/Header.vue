<template>
    <header class="header container">
        <ui-burger />
        <NuxtLink class="header-logo" to="/"> <icons-logo /> </NuxtLink>
        <nav class="header-nav">
            <div class="header-nav__link">
                <icons-grape class="header-nav__link-icon" />
                <NuxtLink to="">Мужчинам</NuxtLink>
                <icons-grape class="header-nav__link-icon" />
            </div>
            <div class="header-nav__link">
                <icons-grape class="header-nav__link-icon" />
                <NuxtLink to="">Девушкам</NuxtLink>
                <icons-grape class="header-nav__link-icon" />
            </div>
            <div class="header-nav__link">
                <icons-grape class="header-nav__link-icon" />
                <NuxtLink to="">Grape&Poizon</NuxtLink>
                <icons-grape class="header-nav__link-icon" />
            </div>
            <div class="header-nav__link">
                <icons-grape class="header-nav__link-icon" />
                <NuxtLink to="">Оплата и доставка</NuxtLink>
                <icons-grape class="header-nav__link-icon" />
            </div>
            <div class="header-nav__link">
                <icons-grape class="header-nav__link-icon" />
                <NuxtLink to="">Новости</NuxtLink>
                <icons-grape class="header-nav__link-icon" />
            </div>
        </nav>
        <div class="header-menu">
            <NuxtLink class="header-menu__link" to="/auth">
                <icons-news class="header-menu__link-icon" />
            </NuxtLink>
            <NuxtLink class="header-menu__link" to="">
                <icons-like class="header-menu__link-icon" />
            </NuxtLink>
            <NuxtLink class="header-menu__link" to="">
                <icons-cart class="header-menu__link-icon" />
            </NuxtLink>
        </div>
    </header>
</template>

<style lang='scss'>
.header
{
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    margin-bottom: 70px;
    @include mq(0, $tablet){ align-items: center; }
}

.header-logo
{
    height: 60px;
    align-items: center;
    svg
    {
        @include mq (0, $tablet) { width: 140px }
    }
    &:hover
    {
        svg
        {
            path
            {
                transition: .3s fill;
                fill: $grape;
            }
        }
    }
}

.header-nav
{
    display: flex;
    flex-direction: column;
    gap: 10px;
    @include mq(0, $tablet) { display: none; }
}

.header-nav__link
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    color: #1E1E1E;
    transition: all .3s;
    font-family: $inter;
    &:hover
    {
        transition: all .5s;
        a {
            color: $grape;
        }
        .header-nav__link-icon
        {
            opacity: 1;
            right: 0;
            scale: 1;
        }
        .header-nav__link-icon:last-child { left: 0; }
    }
}

.header-nav__link-icon
{
    position: relative;
    transition: all .3s;
    opacity: 0;
    scale: 0.5;
    right: -102px;
    &:last-child
    {
        transform: scaleX(-1);
        left: -102px;
    }
}

.header-menu
{
    display: flex;
    gap: 15px;
    height: 30px;
}

.header-menu__link
{
    cursor: pointer;
    .header-menu__link-icon:hover
    {
        transition: all .3s;
        path
        {
            transition: all .3s;
            fill: $grape;
        }
    }
}
</style>