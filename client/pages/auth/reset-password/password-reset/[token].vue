<template>
    <card :title="$t('Reset password')" :footer="false" size="md">
        <v-form v-slot="{ handleSubmit, isSubmitting }">
            <field-wrapper :label="$t('E-mail address')" name="email" v-slot="{ invalid }">
                <field-input v-model="form.email" :placeholder="$t('Insert e-mail address')" :state="invalid"/>
            </field-wrapper>

            <field-wrapper :label="$t('Password')" name="password" v-slot="{ invalid }">
                <field-password v-model="form.password" :placeholder="$t('Insert password')" :state="invalid"/>
            </field-wrapper>

            <field-wrapper :label="$t('Password confirmation')" name="password_confirmation" v-slot="{ invalid }">
                <field-password v-model="form.password_confirmation" :placeholder="$t('Insert confirmation password')"
                                :state="invalid"/>
            </field-wrapper>

            <btn @click="handleSubmit($event, resetPassword)" :disabled="isSubmitting" :loader="isSubmitting">
                {{ $t('Reset password') }}
            </btn>
        </v-form>
    </card>
</template>
<script setup>
// Configuration
definePageMeta({
    middleware: ['guest']
})

// Imports
const { t } = useI18n()
const route = useRoute()
import { useToastStore } from '~/stores/main/toast'
const store = useToastStore()

// Data
const form = reactive({
    token: route.params.token,
    email: route.query.email,
    password: null,
    password_confirmation: null
})

// Methods
const resetPassword = (values, actions) => {
    $fetchApi(useZiggy('password.store'), {
        body: form,
        method: 'POST'
    }).then(() => {
        navigateTo({
            name: 'auth-login'
        })
        store.alert(t('Your password has been changed. Now you can log in with new password.'))
    }).catch((error) => actions.setErrors(error.response._data.errors))
}
</script>
