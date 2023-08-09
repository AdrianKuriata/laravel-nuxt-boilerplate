<template>
    <div class="mb-3">
        <label class="mb-1.5 block">{{ label }}</label>
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: () => null
        }
    }
}
</script>
