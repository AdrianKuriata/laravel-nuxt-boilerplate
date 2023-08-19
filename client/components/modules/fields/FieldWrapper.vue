<template>
    <v-field as="div" :name="name" class="mb-3" v-slot="{ errorMessage, meta }">
        <label :for="idForField" class="form-input-label">{{label}}</label>
        <slot :id="idForField" :invalid="!meta.valid"/>
        <div v-if="errorMessage" class="form-input-invalid-feedback" v-text="errorMessage"></div>
    </v-field>
</template>
<script setup>
import strRandom from '@/utils/helpers'

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

const idForField = strRandom()
</script>
