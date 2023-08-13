<template>
    <button :type="type"
            class="border transition-all"
            :class="{ [getVariant]: true, [getSize]: true, 'rounded': rounded }"
    >
        <slot v-if="!loader" />
        <fa-icon v-else :icon="['fa', 'fa-circle-notch']" spin />
    </button>
</template>
<script setup>
const props = defineProps({
    type: {
        type: String,
        default: () => 'button'
    },
    variant: {
        type: String,
        default: () => 'default'
    },
    size: {
        type: String,
        default: () => 'md'
    },
    rounded: {
        type: Boolean,
        default: () => true
    },
    loader: {
        type: Boolean,
        default: () => false
    },
    disabled: {
        type: Boolean,
        default: () => false
    }
})
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

const getSize = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'px-2 py-1'
        case 'md':
            return 'px-3 py-2'
        case 'lg':
            return 'px-4 py-3'
        case 'xl':
            return 'px-5 py-4'
    }
})
</script>
