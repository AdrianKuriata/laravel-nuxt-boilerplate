<template>
    <NuxtLink v-if="to !== null" :to="to" class="py-2 px-3 block w-full text-left hover:bg-slate-100 transition-all rounded"><slot /></NuxtLink>
    <button v-else type="button" class="py-2 px-3 block w-full text-left hover:bg-slate-100 transition-all rounded" @click="$emit('click')">
        <slot />
    </button>
</template>
<script setup>
defineProps({
    to: {
        type: String,
        default: () => null
    }
})
defineEmits(['click'])
</script>
