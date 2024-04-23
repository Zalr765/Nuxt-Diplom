<template>
	<div class="burger-menu">
		<div v-if="!isMenuOpen" @click="toggleMenu" class="burger-menu__icon">
			<icons-burger/>
		</div>
		<transition name="left-to-right" >
			<nav
				v-if="isMenuOpen"
				class="burger-menu__nav container"
				>
				<div @click="toggleMenu" class="burger-menu__nav-close">
					<icons-close />
				</div>
				<div class="burger-menu__nav-list">
                    <icons-logo class="burger-menu__nav-logo" />
                    <NuxtLink to="">Мужчинам</NuxtLink>
                    <NuxtLink to="">Девушкам</NuxtLink>
                    <NuxtLink to="">Grape&Poizon</NuxtLink>
                    <NuxtLink to="">Оплата и доставка</NuxtLink>
                    <NuxtLink to="">Новости</NuxtLink>
				</div>
			</nav>
		</transition>
	</div>
</template>

<script setup>
// import usable functional
import { ref } from 'vue';

// variables
let isMenuOpen = ref(false)

// functions
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;

</script>

<style lang="scss" scoped>
	.burger-menu
	{
		align-items: center;
		justify-content: center;
		display: none;
		z-index: 9999;
        height: 30px;
		@include mq(0, $tablet)
        {
            display: flex;
        }
	}

	.burger-menu__nav-list
	{
		text-align: center;
		display: flex;
		flex-direction: column;
        align-items: center;
		gap: 20px;
	}

	.burger-menu__nav-close
	{
		margin-top: 40px;

		svg
		{
			width: 25px;
			height: 25px;
		}
	}

	.burger-menu__nav
	{
		background: $grape;
        color: black;
        font-family: $inter;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		transition: 1s all;
		z-index: 1000;
		&.show
		{
			overflow: hidden;
			opacity: 1;
			transition: 1s all;
		}
	}

    .burger-menu__nav-logo { margin-bottom: 60px }
.left-to-right-leave-active
{
	transition: all 0.3s ease-out;
}
.left-to-right-leave-to
{
	transform: translateY(-100%);
}

.left-to-right-enter-active
{
	transition: all 0.3s ease-out;
}
.left-to-right-enter-from
{
	transform: translateY(-100%);
}

</style>