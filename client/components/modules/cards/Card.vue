<template>
    <div class="border border-neutral-dark rounded shadow-md bg-white" :class="{ [getSize]: true, 'mx-auto': centered }">
        <div v-if="header" class="border-b border-neutral-dark p-2 uppercase text-xl rounded-t">
            <slot name="header">{{title}}</slot>
        </div>

        <div :class="{ [bodyClass]: true }">
            <slot />
        </div>

        <div v-if="footer" class="border-t border-neutral-dark p-2">
            <slot name="footer" />
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        default: () => null
    },
    size: {
        type: String,
        default: () => 'fluid'
    },
    centered: {
        type: Boolean,
        default: () => true
    },
    header: {
        type: Boolean,
        default: () => true
    },
    footer: {
        type: Boolean,
        default: () => true
    },
    bodyClass: {
        type: String,
        default: () => 'p-3'
    }
})
const getSize = computed(() => {
    switch (props.size) {
        case 'fluid':
            return 'w-full'
        case 'xs':
            return 'w-2/12'
        case 'sm':
            return 'w-4/12'
        case 'md':
            return 'w-6/12'
        case 'lg':
            return 'w-8/4'
        case 'xl':
            return 'w-10/12'
    }
})
</script>
