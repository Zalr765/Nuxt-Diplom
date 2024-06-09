<template>
	<div>
		<h1>404 - Страница не найдена</h1>
		<p>Извините, но такой страницы не существует.</p>
		<NuxtLink to="/">Вернуться на главную</NuxtLink>
	</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
div
{
	height: 60vh;
}
h1
{
	font-family: $inter;
	font-size: 32px;
	text-align: center;
	margin-top: 30px;
	margin-bottom: 50px;
}
p
{
	font-size: 24px;
	font-family: $inter;
	text-align: center;
	margin-bottom: 80px;
}

a
{
	font-size: 18px;
	font-family: $inter;
	text-align: center;
	transition: color .3s;
	&:hover { color: $grape }
}
</style>
