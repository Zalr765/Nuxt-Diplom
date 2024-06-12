<template>
    <div class="preloder">
        <div class="loder">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.preloder
{
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111;
    z-index: 2;
}

body:has(div.preloder)
{
    overflow: hidden;
}


.loder
{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #D1DFFF;
    border-top: 8px solid $grape;
    animation: spinner 1s linear infinite;
}

@keyframes spinner
{
    0%{
    transform: rotate(0deg);
    }
    50%{
    border-top-width: 5px;
    }
    100%{
    transform: rotate(360deg);
    }
}

@media screen and (max-width: 668px){
    .loder
    {
        height: 60px;
        width: 60px;
        border-top: 6px solid #3775FF;
    }
}
</style>