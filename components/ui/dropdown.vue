<!-- components/DropdownSelect.vue -->
<template>
	<div class="dropdown" @click.stop="toggleDropdown">
		<button class="dropdown-toggle">
			{{ selectedOption ? selectedOption.label : title }}
			<icons-droparrow :class="{'show' : isOpen}"  class="dropdown-toggle__icon" />
		</button>
		<div class="dropdown-menu" v-if="isOpen">
			<div v-for="option in options" :key="option.value" @click="selectOption(option)">
				{{ option.label }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
title: {
	type: String,
	required: true
},
options: {
	type: Array,
	required: true
}
});

const emits = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedOption = ref(null);

const toggleDropdown = () => {
isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
	selectedOption.value = option;
	emits('update:modelValue', option.value);
};;

const closeDropdown = (event) => {
if (!event.target.closest('.dropdown')) {
	isOpen.value = false;
}
};

onMounted(() => {
	document.addEventListener('click', closeDropdown);
});

onBeforeUnmount(() => {
	document.removeEventListener('click', closeDropdown);
});
</script>

<style lang="scss" scoped>
.dropdown
{
	position: relative;
	display: inline-block;
	cursor: pointer;
}

.dropdown-toggle
{
	padding: 10px 20px;
	padding-left: 0;
	border: none;
	cursor: pointer;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
}

.dropdown-toggle__icon
{
	transition: all .3s ease;
    transform: scaleY(1);
    &.show
    {
        transform: scaleY(-1);
    }
}

.dropdown-menu
{
	display: block;
	position: absolute;
	left: -2px;
	background-color: white;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	z-index: 1;
	width: 100%;
	div { padding: 10px }
}

.dropdown-menu div
{
	padding: 10px 20px;
	cursor: pointer;
}

.dropdown-menu div:hover { background-color: #f1f1f1 }
</style>
