<template>
    <input
        :value="modelValue"
        class="border shadow rounded w-full p-2 focus:border-neutral outline-0 transition-all"
        :class="{ 'border border-error-dark': state }"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>
<script setup>
defineProps({
    modelValue: {
        type: String,
        default: () => null
    },
    state: {
        type: Boolean,
        default: () => false
    },
    placeholder: {
        type: String,
        default: () => null
    }
})
defineEmits(['update:modelValue'])
</script>
