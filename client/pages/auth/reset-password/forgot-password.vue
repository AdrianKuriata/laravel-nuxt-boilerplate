<template>
    <card :title="$t('Forgot password')" :footer="false" size="md">
        <alert v-if="showAlert" variant="success" @closed="showAlert = false">{{ $t('The e-mail message has been sent to you. Check your mailbox for reset password.') }}</alert>
        <v-form v-slot="{ handleSubmit, isSubmitting }" :class="{ 'mt-3': showAlert }">
            <field-wrapper :label="$t('E-mail address')" name="email" v-slot="{ invalid }">
                <field-input v-model="form.email" :placeholder="$t('Insert e-mail address')" :state="invalid" />
            </field-wrapper>

            <btn @click="handleSubmit($event, forgotPassword)" :disabled="isSubmitting" :loader="isSubmitting">{{ $t('Send link') }}</btn>
        </v-form>
    </card>
</template>
<script setup>
definePageMeta({
    middleware: ['guest']
})

const form = reactive({
    email: null
})
const showAlert = ref(false)

const forgotPassword = (values, actions) => {
    $fetchApi(useZiggy('password.email'), {
        body: form,
        method: 'POST'
    }).then(() => showAlert.value = true).catch((error) => actions.setErrors(error.response._data.errors))
}
</script>
