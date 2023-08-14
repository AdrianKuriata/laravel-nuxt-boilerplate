<template>
    <card :title="$t('Create a new account')" :footer="false" size="md">
        <v-form v-slot="{ handleSubmit, isSubmitting }">
            <field-wrapper :label="$t('Login')" name="name" v-slot="{ invalid }">
                <field-input v-model="form.name" :placeholder="$t('Insert login')" :state="invalid" />
            </field-wrapper>

            <field-wrapper :label="$t('E-mail address')" name="email" v-slot="{ invalid }">
                <field-input v-model="form.email" :placeholder="$t('Insert e-mail address')" :state="invalid" />
            </field-wrapper>

            <field-wrapper :label="$t('Password')" name="password" v-slot="{ invalid }">
                <field-password v-model="form.password" :placeholder="$t('Insert password')" :state="invalid" />
            </field-wrapper>

            <field-wrapper :label="$t('Password confirmation')" name="password_confirmation" v-slot="{ invalid }">
                <field-password v-model="form.password_confirmation" :placeholder="$t('Insert confirmation password')" :state="invalid" />
            </field-wrapper>

            <btn @click="handleSubmit($event, register)" :disabled="isSubmitting" :loader="isSubmitting">{{ $t('Register') }}</btn>
        </v-form>
    </card>
</template>
<script setup>
definePageMeta({
    middleware: ['guest']
})
const auth = useAuth()
const form = reactive({
    name: null,
    email: null,
    password: null,
    password_confirmation: null
})

const register = (values, actions) => {
    $fetchApi(useZiggy('register'), {
        body: form,
        method: 'POST'
    }).then(() => {
        auth.fetchUser()
        navigateTo('/')
    }).catch((error) => {
        actions.setErrors(error.response._data.errors)
    })
}
</script>
