<template>
    <div class="flex justify-start items-start">
        <input
            :checked="modelValue"
            :value="true"
            :id="randomId"
            type="checkbox"
            :class="{ 'form-input-invalid': state }"
            class="mt-[0.08rem]"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.checked)"
        />
        <label v-if="label" :for="randomId" v-text="label" class="text-xs ml-2"></label>
    </div>
</template>
<script setup>

import strRandom from '@/utils/helpers'

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

const randomId = computed(() => props.id !== null? props.id : strRandom())
</script>
