<template>
    <div class="border border-neutral rounded shadow-md bg-white" :class="{ [getSize]: true, 'mx-auto': centered }">
        <div v-if="header" class="border-b border-neutral p-3 uppercase text-2xl rounded-t">
            <slot name="header">{{title}}</slot>
        </div>

        <div class="p-3">
            <slot/>
        </div>

        <div v-if="footer" class="border-t border-neutral p-3">
            <slot name="footer"/>
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
    }
})
const getSize = computed(() => {
    switch (props.size) {
        case 'fluid':
            return 'w-full'
        case 'sm':
            return 'w-1/4'
        case 'md':
            return 'w-2/4'
        case 'lg':
            return 'w-3/4'
        case 'xl':
            return 'w-5/6'
    }
})
</script>
