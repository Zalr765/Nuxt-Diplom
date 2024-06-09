<template>
    <div class="auth container">
        <p class="auth-title">GRAPE<span>&</span>POIZON</p>
        <form class="auth-form" @submit.prevent="submitForm">
            <h3 class="auth-form__title">Регистрация</h3>
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
                <ui-auth-input
                    v-model:value="form.confirmPassword"
                    :placeholder="'Повторите пароль'"
                    :isPassword="true"
                    :required="true"
                    :error="v$.confirmPassword.$dirty && v$.confirmPassword.$invalid"
                />
            </div>
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            <NuxtLink class="auth-form__link" to="/auth">Вход</NuxtLink>
            <button class="auth-form__btn">ОТПРАВИТЬ</button>
        </form>
    </div>
</template>


<script setup>
// Imports
import { reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, maxLength, helpers } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Custom validator for password match
const passwordMatch = computed(() => ({ $validator: (value) => value === form.password }));

// Variables
const router = useRouter()

const form = reactive({
    username: '',
    password: '',
    confirmPassword: ''
});

const rules = {
    username: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16),
    },
    password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(16),
    },
    confirmPassword: {
        required,
        passwordMatch
    }
};

const v$ = useVuelidate(rules, form);
const errorMessage = ref('');

const emit = defineEmits(['submitForm']);

// Functions
const submitForm = async () => {
    v$.value.$touch();

    // Проверка валидности формы
    if (!v$.value.$invalid) {
        try {
            const response = await axios.post('https://c2ca606bd5038de3.mokky.dev/register', {
                login: form.username,
                pass: form.password,
                cart : [],
                like : []
            }, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200 || 201)
                router.push('/auth')
        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                errorMessage.value = 'Этот логин уже занят. Пожалуйста, выберите другой.';
            } else {
                console.error('Error:', error);
                errorMessage.value = 'Произошла ошибка. Пожалуйста, попробуйте снова позже.';
            }
        }
    }
    emit('submitForm');
};

onMounted(() => {
    const user = localStorage.getItem('user');
    if (user)
        router.push('/');
});

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

.auth-form__link
{
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    color: black;
    margin-top: 10px;
    margin-left: 340px;
    transition: color .3s;
    &:hover { color: $grape }
}

.error-message
{
    color: red;
    margin-top: 10px;
}
</style>
