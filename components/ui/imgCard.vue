<template>
	<div
			class="img-card"
			:style="{ backgroundImage: 'url(' + props.img + ')' }"
		>
		<div class="img-card-info">
			<span class="img-card-info__title">{{ props.title }}</span>
			<span class="img-card-info__subtitle">{{ props.subtitle }}</span>
			<span class="img-card-info__price">{{ props.price }} RUB.</span>
		</div>
	</div>
</template>

<script setup>
//Imports
import { defineProps } from 'vue';

//Props
const props = defineProps({
    title: { type: String },
    subtitle: { type: String },
    price: { type: Number },
    img: { type: String },
});
</script>

<style lang='scss'>
.img-card
{
    position: relative;
    width: 100%;
    height: 350px;
    max-width: calc(25vw);
    border: 1px solid rgba(30, 30, 30, 1);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;

	@include mq ($desktop, $fullhd) { height: 300px }
	@include mq ($tablet, $desktop) { height: 200px }
	@include mq (0, $tablet) { height: 100px }

	&:hover { .img-card-info { opacity: 1 } }

    &:first-child
    {
        max-width: calc(50vw);
        height: 700px;
        grid-area: 1 / 1 / 3 / 2;
        margin-left: 1px;

		.img-card-info
		{
			max-width: 600px;
			max-height: 600px;
			.img-card-info__title { font-size: 40px  }
			.img-card-info__subtitle,.img-card-info__price
			{
				font-size: 36px;
				max-width: 350px;
			}
		}

		@include mq ($desktop, $fullhd)
		{
			height: 600px;
			.img-card-info
			{
				max-width: 420px;
				max-height: 420px;
				.img-card-info__title { font-size: 32px  }
				.img-card-info__subtitle,.img-card-info__price
				{
					font-size: 28px;
					max-width: 300px;
				}
			}
		}

		@include mq ($tablet, $desktop)
		{
			height: 400px;
			.img-card-info
			{
				max-width: 320px;
				max-height: 320px;
				.img-card-info__title { font-size: 28px  }
				.img-card-info__subtitle,.img-card-info__price
				{
					font-size: 21px;
					max-width: 200px;
				}
			}
		}

		@include mq (0, $tablet)
		{
			height: 200px;
			.img-card-info
			{
				max-width: 150px;
				max-height: 150px;
				.img-card-info__title { font-size: 14px  }
				.img-card-info__subtitle,.img-card-info__price
				{
					font-size: 10px;
					max-width: 120px;
				}
			}
		}

    }
}

.img-card-info
{
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: $grape;
	width: 100%;
	height: 100%;
	max-width: 300px;
	max-height: 300px;
	border-radius: 100%;
	z-index: 1;
	margin: auto;;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	color: white;
	text-align: center;
	text-transform: uppercase;
	opacity: 0;
	transition: all .4s;

	@include mq ($desktop, $fullhd)
	{
		max-width: 200px;
		max-height: 200px;
	}
	@include mq ($tablet, $desktop)
	{
		max-width: 150px;
		max-height: 150px;
	}
	@include mq (0, $tablet)
	{
		max-width: 80px;
		max-height: 80px;
	}
}

.img-card-info__title
{
	font-family: $inter;
	font-size: 20px;
	font-weight: 600;
	@include mq ($desktop, $fullhd) { font-size: 18px }
	@include mq ($tablet, $desktop) { font-size: 12px }
	@include mq (0, $tablet) { font-size: 8px }
}
.img-card-info__subtitle,.img-card-info__price
{
	font-family: $inter;
	font-size: 18px;
	font-weight: 400;
	max-width: 260px;
	@include mq ($desktop, $fullhd) { font-size: 15px }
	@include mq ($tablet, $desktop)
	{
		font-size: 9px;
		max-width: 100px;
	}
	@include mq (0, $tablet)
	{
		font-size: 6px;
		max-width: 80px;
	}
}
.img-card-info__price { margin-top: 10px }
</style>