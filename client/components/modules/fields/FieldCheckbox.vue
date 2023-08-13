<template>
    <div>
        <input
            :checked="modelValue"
            :value="true"
            :id="randomId"
            type="checkbox"
            :class="{ 'border border-error-dark': state }"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.checked)"
        />
        <label v-if="label" :for="randomId" v-text="label" class="ml-2"></label>
    </div>
</template>
<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: () => null
    },
    state: {
        type: Boolean,
        default: () => false
    },
    placeholder: {
        type: String,
        default: () => null
    },
    label: {
        type: String,
        default: () => null
    },
    id: {
        type: String,
        default: () => null
    }
})
defineEmits(['update:modelValue'])

const randomId = computed(() => props.id !== null? props.id : Math.random().toString(36).slice(2))
</script>
