<template>
    <div :class="{ [getVariant]: true, 'rounded': rounded }" class="p-3">
        <div class="flex justify-between items-start">
            <div>
                <slot />
            </div>
            <fa-icon :icon="['fa', 'fa-times']" class="cursor-pointer hover:text-slate-300" @click="$emit('closed')" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    variant: {
        type: String,
        default: () => 'default'
    },
    rounded: {
        type: Boolean,
        default: () => true
    }
})
defineEmits(['closed'])
const getVariant = computed(() => {
    switch (props.variant) {
        case 'primary':
            return 'border-primary-dark bg-primary hover:bg-primary-dark text-white'
        case 'secondary':
            return 'border-secondary-dark bg-secondary hover:bg-secondary-dark text-white'
        case 'success':
            return 'border-success-dark bg-success hover:bg-success-dark text-white'
        case 'error':
            return 'border-error-dark bg-error hover:bg-error-dark text-white'
        case 'warning':
            return 'border-warning-dark bg-warning hover:bg-warning-dark text-white'
        case 'default':
            return 'border-neutral-dark bg-neutral hover:bg-neutral-dark text-white'
    }
})
</script>
