<template>
    <card :title="$t('Login')" :footer="false" size="sm">
        <v-form v-slot="{ handleSubmit, isSubmitting }">
            <field-wrapper :label="$t('E-mail address')" name="email" v-slot="{ id, invalid }">
                <field-input v-model="form.email" :id="id" :placeholder="$t('Insert e-mail address')" :state="invalid" />
            </field-wrapper>

            <field-wrapper :label="$t('Password')" name="password" v-slot="{ id, invalid }">
                <field-password v-model="form.password" :id="id" :placeholder="$t('Insert password')" :state="invalid" />
            </field-wrapper>

            <field-wrapper name="remember" v-slot="{ invalid }">
                <field-checkbox v-model="form.remember" :label="$t('Remember me')" :state="invalid" />
            </field-wrapper>

            <NuxtLink to="/auth/reset-password/forgot-password" class="text-primary block">{{ $t('Forgot password?') }}</NuxtLink>

            <btn @click="handleSubmit($event, login)" pill :disabled="isSubmitting" :loader="isSubmitting" class="mt-3">{{ $t('Login') }}</btn>
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
const toastStore = useToastStore()
const auth = useAuth()

// Data
const form = reactive({
    email: null,
    password: null,
    remember: false
})

// Methods
const login = (values, actions) => {
    auth.loginWith('laravelSanctum', {
        body: {
            email: form.email,
            password: form.password,
            remember: form.remember
        }
    }).then(() => {
        navigateTo('/')
        toastStore.alert(t('You are logged in now'))
    }).catch((error) => {
        actions.setErrors(error.response._data.errors)
    })
}
</script>
