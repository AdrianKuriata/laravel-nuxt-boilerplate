<template>
    <div ref="dropdownElement" :id="dropdownId" class="dropdown-container relative">
        <button type="button" class="hover:text-primary" @click="open">
            {{ label }}
        </button>
        <div v-if="isOpen" class="top-full right-0 absolute bg-white border border-neutral min-w-[300px] rounded shadow-md">
            <slot />
        </div>
    </div>
</template>
<script setup>
import strRandom from '@/utils/helpers'

defineProps({
    label: {
        type: String,
        default: () => null
    }
})
onMounted(() => {
    document.addEventListener('click', close)
})

const dropdownElement = ref(null)
const isOpen = ref(false)
const dropdownId = ref(strRandom())

const close = (e) => {
    const clickedElement = e.srcElement.classList.contains('dropdown-container') ? e.srcElement : e.srcElement.closest('.dropdown-container')
    if (!clickedElement || (clickedElement && clickedElement.id !== dropdownElement.value.id)) {
        isOpen.value = false
    }
}

const open = () => {
    isOpen.value = true
}
</script>
