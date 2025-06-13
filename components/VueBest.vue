<template>
	<div class="best">
		<h2 class="best-title">Лучшее предложение</h2>
		<div class="best-content">
			<ui-imgCard
				:img="'/img/best1.png'"
				:title="'AIR FORCE 1'"
				:subtitle="'LOW FONTANKA “university blue”'"
				:price="4999"
			/>
			<ui-imgCard
				:img="'/img/best2.png'"
				:title="'MAISON MARGIELA TABI'"
				:subtitle="'HIGH TOP'"
				:price="16000"
			/>
			<ui-imgCard
				:img="'/img/best3.png'"
				:title="'Adidas x Gucci'"
				:subtitle="' Gazelle ”Green Suede”'"
				:price="20000"
			/>
			<ui-imgCard
				:img="'/img/best4.png'"
				:title="'Adidas by Raf Simons'"
				:subtitle="'Ozweego ”Royal white”'"
				:price="90000"
			/>
			<ui-imgCard
				:img="'/img/best5.png'"
				:title="'MAISON MARGIELA evolution'"
				:subtitle="'LOW BLACK'"
				:price="40999"
			/>
		</div>
	</div>
</template>

<script setup>

</script>

<style lang='scss'>
.best { margin-bottom: 100px }

.best-title
{
	font-family: $inter;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
	text-transform: uppercase;
	@include mq(0, $desktop) { font-size: 24px }
	margin-left: 60px;
}
.best-content
{
	display: grid;
	grid-template-columns: 50vw repeat(2, 25vw);
	grid-template-rows: repeat(2, 350px);
	overflow: hidden;
	@include mq ($desktop, $fullhd) { grid-template-rows: repeat(2, 300px) }
	@include mq ($tablet, $desktop) { grid-template-rows: repeat(2, 200px) }
	@include mq (0, $tablet) { grid-template-rows: repeat(2, 100px) }
}
</style>