<template>
	<div class="default-layout">
        <Header />
		<main>
			<slot />
		</main>
        <Footer />
	</div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>