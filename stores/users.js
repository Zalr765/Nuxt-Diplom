// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		user: null,
	}),
	actions: {
	setUser(userData) {
		localStorage.setItem('user', JSON.stringify(userData))
	},
	clearUser() {
		this.user = null;
		localStorage.removeItem('user');
	},
	},
});
