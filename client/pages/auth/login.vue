<template>
    <UCard>
        <template #header>
            {{ $t('Login') }}
        </template>
        <UForm ref="formElement" :state="form">
            <UFormGroup :label="$t('E-mail address')" name="email" required>
                <UInput v-model="form.email" :placeholder="$t('Insert e-mail address')" />
            </UFormGroup>

            <UFormGroup :label="$t('Password')" name="password" required>
                <UInput v-model="form.password" type="password" :placeholder="$t('Insert password')" />
            </UFormGroup>

            <UCheckbox  v-model="form.remember" :label="$t('Remember me')" class="mt-3" />

            <NuxtLink to="/auth/reset-password/forgot-password" class="text-primary block mt-3">{{ $t('Forgot password?') }}</NuxtLink>

            <UButton :label="$t('Login')" class="mt-3" @click="login"></UButton>
        </UForm>
    </UCard>
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
const formElement = ref()

// Methods
const login = () => {
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
        formElement.value.setErrors(error.response._data.errors)
    })
}
</script>
