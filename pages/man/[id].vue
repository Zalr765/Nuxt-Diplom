<template>
	<div v-if="item">
		<h1>Элемент {{ id }}</h1>
		<p>{{ item.description }}</p>
	</div>
	<div v-else>
		<p>Item not found.</p>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const item = ref(null);

const fetchItem = async (id) => {
try {
    const response = await axios.get(`https://c2ca606bd5038de3.mokky.dev/items/${id}`);
    if (response.data) {
    item.value = response.data;
    } else {
    throw new Error('Item not found');
    }
} catch (error) {
    router.push('/404'); // Redirect to 404 if item not found
}
};

onMounted(() => {
fetchItem(id);
});
</script>
