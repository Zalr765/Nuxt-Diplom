<template>
    <div>
        <input
            :type="isPassword ? 'password' : 'text'"
            :class="{ 'error': hasError }"
            class="auth-input"
            v-model="inputValue"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="updateValue($event.target.value)"
        >
        <span :class="{'error': hasError, 'focused': isFocused || inputValue }">{{ placeholder }}</span>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
    placeholder: { type: String },
    isPassword: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    value: {
        type: String,
        required: true
    },
    error: {
        type: Boolean,
        default: false
    }
});

const inputValue = ref(props.value);
const isFocused = ref(false);
const hasError = ref(props.error);

const emit = defineEmits(['update:value']);

const handleFocus = () => {
    isFocused.value = true;
    hasError.value = false;  // Сброс ошибки при фокусе
};

const handleBlur = () => {
    isFocused.value = false;
    if (props.required && !inputValue.value) {
        hasError.value = true;  // Установка ошибки, если поле пустое
    }
};

const updateValue = (val) => {
    inputValue.value = val;
    emit('update:value', val);
};

// Синхронизация ошибки с пропсами
watch(() => props.error, (newError) => {
    hasError.value = newError;
});

watch(() => props.value, (newValue) => {
    inputValue.value = newValue;
});
</script>

<style lang='scss' scoped>
.auth-input {
    color: $grape;
    background-color: black;
    width: 480px;
    height: 80px;
    padding: 0 20px;
    border-radius: 100px;
    border: 2px solid $grape;
    &.error {
        animation: shake .4s ease-in-out;
    }
}

div {
    position: relative;
}

span {
    color: $grape;
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 18px;
    transition: all .3s;
    pointer-events: none;
    &.error {
        color: red;
        animation: shake .4s ease-in-out;
    }
}

@keyframes shake {
    0% {
        transform: translateX(-5px);
    }
    25% {
        transform: translateX(5px);
    }
    50% {
        transform: translateX(-3px);
    }
    75% {
        transform: translateX(3px);
    }
    100% {
        transform: translateX(0);
    }
}

span.focused {
    font-size: 12px;
    transform: translateY(-20px);
}
</style>
