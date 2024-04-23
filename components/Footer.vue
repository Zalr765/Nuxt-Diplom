<template>
    <footer class="footer">
        <div class="footer-wraper container">
            <icons-logo class="footer-wraper__icon" />
            <div class="footer-wraper__content">
                <div class="footer-wraper__content-nav">
                    <NuxtLink class="footer-wraper__content-nav-link" to="">Мужчинам</NuxtLink>
                    <NuxtLink class="footer-wraper__content-nav-link" to="">девушкам</NuxtLink>
                    <NuxtLink class="footer-wraper__content-nav-link" to="">Grape</NuxtLink>
                    <NuxtLink class="footer-wraper__content-nav-link" to="">Poizon</NuxtLink>
                    <NuxtLink class="footer-wraper__content-nav-link" to="">Оплата и доставка</NuxtLink>
                </div>
                <div class="footer-wraper__content-menu">
                    <NuxtLink class="footer-wraper__content-menu-link" to=""><icons-news /></NuxtLink>
                    <NuxtLink class="footer-wraper__content-menu-link" to=""><icons-like /></NuxtLink>
                    <NuxtLink class="footer-wraper__content-menu-link" to=""><icons-cart /></NuxtLink>
                </div>
                <NuxtLink class="footer-wraper__content-privacy" to="">Политика конфиденциальности</NuxtLink>
            </div>
        </div>
    </footer>
</template>

<style lang='scss'>
.footer
{
    background-color: #1E1E1E;
    width: 100%;
    padding: 50px 0;
}

.footer-wraper
{
    display: flex;
    justify-content: space-between;
}

.footer-wraper__icon
{
    margin-right: 10px;
    @include mq (0, $tablet)
    {
        width: 140px;
    }
    path
    {
        fill: white;
    }
}

.footer-wraper__content
{
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: end;
    @include mq (0, $tablet)
    {
        flex-direction: row;
        gap: 10px;
    }
}

.footer-wraper__content-nav
{
    display: flex;
    gap: 40px;
    text-transform: uppercase;
    font-family: $inter;
    font-weight: 600;
    font-size: 18px;
    @include mq ($tablet, $desktop)
    {
        font-size: 14px;
        gap: 20px;
    }
    @include mq (0, $tablet)
    {
        font-size: 10px;
        gap: 5px;
        flex-direction: column;
    }
}

.footer-wraper__content-nav-link
{
    color: white;
    transition: all .3s;
    &:hover{ color: $grape; }
}

.footer-wraper__content-menu
{
    display: flex;
    gap: 15px;
}

.footer-wraper__content-menu-link
{
    transition: all .3s;
    svg
    {
        path { fill: white; }
        transition: all .3s;
    }
    svg:hover
    {
        transition: all .3s;
        path { fill: $grape; }
    }
}

.footer-wraper__content-privacy
{
    color: white;
    transition: all .3s;
    &:hover{ color: $grape; }
    font-family: $inter;
    font-weight: 600;
    font-size: 15px;
    @include mq (0, $tablet) { display: none; }
}

.footer-wraper__content-menu-privacy
{
    display: none;
    color: white;
    font-size: 8px;
    @include mq (0, $tablet) { display: inline; }
}
</style>