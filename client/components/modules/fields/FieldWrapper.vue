<template>
    <v-field as="div" :name="name" class="mb-3" v-slot="{ errorMessage, meta }">
        <label class="mb-1.5 block">{{label}}</label>
        <slot :invalid="!meta.valid"/>
        <div v-if="errorMessage" class="text-red-700 mt-1" v-text="errorMessage"></div>
    </v-field>
</template>
<script setup>
defineProps({
    name: {
        type: String,
        default: () => null,
        required: true
    },
    label: {
        type: String,
        default: () => null
    }
})
</script>
