<template>
    <input
        :value="modelValue"
        class="form-input"
        :class="{ 'form-input-invalid': state }"
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
