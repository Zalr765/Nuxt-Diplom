// middleware/auth.global.js
import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
	if (process.client) {
		const user = localStorage.getItem("user");
		console.log('User:', user);

		if (!user && to.path === '/cart')
			return navigateTo('/auth');

		if (!user && to.path === '/register')
			return navigateTo('/');
	}
});