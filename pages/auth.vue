<template>
	<div class="auth container">
		<p class="auth-title">GRAPE<span>&</span>POIZON</p>
		<form class="auth-form" @submit.prevent="submitForm">
			<h3 class="auth-form__title">Вход</h3>
			<div class="auth-form__inputs">
				<ui-auth-input
					v-model:value="form.username"
					:placeholder="'Логин'"
					:required="true"
					:error="v$.username.$dirty && v$.username.$invalid"
				/>
				<ui-auth-input
					v-model:value="form.password"
					:placeholder="'Пароль'"
					:isPassword="true"
					:required="true"
					:error="v$.password.$dirty && v$.password.$invalid"
				/>
			</div>
            <div v-if="loginMessage" class="error-message">{{ loginMessage }}</div>
			<NuxtLink class="auth-form__link" to="/register">Регистрация</NuxtLink>
			<button class="auth-form__btn">ОТПРАВИТЬ</button>
		</form>
	</div>
</template>

<script setup>
// Imports
import { reactive, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, maxLength } from '@vuelidate/validators';
import axios from 'axios';
import { useRouter } from 'vue-router';


// Variables
const router = useRouter();

const form = reactive({
    username: '',
    password: '',
});

const rules = {
    username: {
        required,
        minLength: minLength(4),
    },
    password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(16),
    },
};

const v$ = useVuelidate(rules, form);

const emit = defineEmits(['submitForm'])

const loginMessage = ref('');

// Functions
const submitForm = async () => {
    v$.value.$touch();
    // Проверка валидности формы
    if (!v$.value.$invalid) {
        try {
        const response = await axios.get(`https://c2ca606bd5038de3.mokky.dev/users?login=${form.username}&pass=${form.password}`);
            if (response.data.length === 0){
                loginMessage.value = 'Неверный логин или пароль'
            }
			else
            {
                localStorage.setItem('user', response.data[0].id)
				router.push('/cart');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    // Обновление состояния ошибок в input компонентах
    v$.value.$touch();

    emit('submitForm');
};
definePageMeta({ layout: false });
</script>

<style lang='scss'>
.auth
{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.auth-title
{
    font-size: 48px;
    font-weight: 700;
    font-family: $inter;
    margin-top: 30px;
    span { color: $grape }
    @include mq(0, $desktop) { font-size: 38px }
}

.auth-form
{
    height: 100%;
    width: 80%;
    padding: 20px 0;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.auth-form__title
{
    font-size: 32px;
    font-weight: 700;
    font-family: $inter;
    color: $grape;
    text-transform: uppercase;
}

.auth-form__btn
{
    padding: 20px 40px;
    border-radius: 40px;
    background-color: black;
    color: $grape;
    font-size: 16px;
    font-weight: 700;
    margin-top: 80px;
    transition: all .3s;
    border: none;
    cursor: pointer;
    &:hover
	{
        background-color: $grape;
        color: black;
    }
}

.auth-form__inputs
{
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	gap: 40px;
}

.auth-form__link {
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 600;
	color: black;
	margin-top: 10px;
	margin-left: 340px;
	transition: color .3s;
	&:hover { color: $grape }
}
</style>
