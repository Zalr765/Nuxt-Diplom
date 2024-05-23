<template>
	<div class="vitrina container">
		<div class="vitrina-contnet">
			<div class="vitrina-logo">Grape<span>&</span>poizon</div>
			<div class="vitrina-contnet__bot">
				<div class="vitrina-contnet__bot-block">
					<h2>01</h2>
					<span>Grape - это проект призванный помочь каждому найти то, что ему нужно.Мы не просто ресейлим одежду и кроссовки,мы пропагандируем стиль</span>
				</div>
				<div class="vitrina-contnet__bot-block">
					<h2>02</h2>
					<span>Каждый день погружаясь все глубже и глубже в fashion индустрию, мы тщательно подбираем для вас самые вкусные релизы и доставляем их в Россию по приятной цене </span>
				</div>
				<div class="vitrina-contnet__bot-block">
					<h2>03</h2>
					<span>Этот проект прошел путь от маленькой мечты до реализации, через большое количество информации,сложностей и приобретаемого опыта</span>
				</div>
			</div>
		</div>
		<div class="vitrina-img"></div>
	</div>
</template>

<style lang='scss'>
.vitrina
{
	display: flex;
	justify-content: space-between;
	gap: 20px;
	margin-bottom: 150px;
	@include mq (0, $desktop)
	{
		flex-direction: column;
		align-items: center;
		gap: 40px;
	}
}
.vitrina-logo
{
	text-transform: uppercase;
	font-family: $inter;
	font-size: 40px;
	font-weight: 700;
	line-height: 48.41px;
	text-align: left;
	span { color: $grape }
	@include mq (0, $desktop) { margin-bottom: 30px; }
}

.vitrina-contnet
{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.vitrina-contnet__bot
{
	display: flex;
	justify-content: space-between;
	gap: 30px;
}

.vitrina-contnet__bot-block
{
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 180px;
	font-family: $inter;
	h2
	{
		color: $grape;
		font-size: 32px;
		font-weight: 700;
	}
	span
	{
		font-size: 14px;
		font-weight: 400;
	}
	@include mq (0, $widescreen)
	{
		max-width: 125px;
		h2 { font-size: 28px }
		span { font-size: 8px }
	}
}


.vitrina-img
{
	width: 100%;
	height: 100%;
	max-width: 500px;
	height: 400px;
	border: 1px solid black;
	z-index: 2;
	background-image: url('/img/item.png');
	background-size: cover;
	background-position: center;
	@include mq (0, $widescreen)
	{
		height: 350px;
		max-width: 450px;
	}
}
</style>