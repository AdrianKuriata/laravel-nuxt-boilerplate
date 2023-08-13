<template>
    <card :title="$t('Login')" :footer="false" size="md">
        <v-form v-slot="{ handleSubmit, isSubmitting }">
            <field-wrapper :label="$t('Login')" name="email" v-slot="{ invalid }">
                <field-input v-model="form.email" :placeholder="$t('Insert login')" :state="invalid" />
            </field-wrapper>

            <field-wrapper :label="$t('Password')" name="password" v-slot="{ invalid }">
                <field-password v-model="form.password" :placeholder="$t('Insert password')" :state="invalid" />
            </field-wrapper>

            <field-wrapper name="remember" v-slot="{ invalid }">
                <field-checkbox v-model="form.remember" :label="$t('Remember me')" :state="invalid" />
            </field-wrapper>

            <btn @click="handleSubmit($event, login)" :disabled="isSubmitting" :loader="isSubmitting">{{ $t('Login') }}</btn>
        </v-form>
    </card>
</template>
<script setup>
definePageMeta({
    auth: 'guest'
})
const auth = useAuth()
const form = reactive({
    email: null,
    password: null,
    remember: false
})
const login = (values, actions) => {
    auth.loginWith('laravelSanctum', {
        body: {
            email: form.email,
            password: form.password,
            remember: form.remember
        }
    }).catch((error) => {
        actions.setErrors(error.response._data.errors)
    })
}
</script>
