export default defineNuxtRouteMiddleware((to, from) => {
	const user = useUserStore().user;

    if (!user)
		return navigateTo('/auth');
});