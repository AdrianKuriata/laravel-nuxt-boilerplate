<template>
    <div class="dropdown-container relative">
        <button type="button" @click="open">
            {{ label }}
        </button>
        <div v-if="isOpen" class="top-full right-0 absolute bg-white border border-neutral min-w-[300px] rounded shadow-md">
            <slot />
        </div>
    </div>
</template>
<script setup>
defineProps({
    label: {
        type: String,
        default: () => null
    }
})
onMounted(() => {
    document.addEventListener('click', close)
})

const isOpen = ref(false)

const close = (e) => {
    console.log(e)
    if (!e.srcElement.classList.contains('dropdown-container') && !e.srcElement.closest('.dropdown-container')) {
        isOpen.value = false
    }
}
const open = () => {
    isOpen.value = true
}
</script>
