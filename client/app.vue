<template>
    <nav class="border-b-1 shadow-md top-0 sticky py-5">
        <UContainer class="flex justify-between items-center">
            <div>
                <NuxtLink to="/"><img src="@@/public/nuxt-logo.svg" class="max-w-[50px]" :alt="config.appName"></NuxtLink>
            </div>
            <div class="flex justify-between items-center">
                <div v-if="auth.loggedIn">
                    <UDropdown :items="loggedInItems" :popper="{ placement: 'bottom-end' }" class="mr-2">
                        <UButton color="white" variant="soft" :label="auth.user.name" trailing-icon="i-heroicons-chevron-down-20-solid" />
                    </UDropdown>
                </div>
                <div v-else>
                    <NuxtLink to="/auth/login" class="mr-2 text-sm">{{$t('Login')}}</NuxtLink>
                    <NuxtLink to="/auth/register" class="text-sm">{{$t('Register')}}</NuxtLink>
                </div>
                <UDropdown :items="availableLocales" :popper="{ placement: 'bottom-end' }">
                    <UButton color="white" variant="soft" :label="$t('Lang')" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
            </div>
        </UContainer>
    </nav>
    <UContainer class="py-5">
        <NuxtPage></NuxtPage>
    </UContainer>
    <toast />
</template>

<script setup>
const auth = useAuth()
const config = useRuntimeConfig().public

const { t, locale, locales, setLocale } = useI18n()
const loggedInItems = [
    [{
        label: t('Logout'),
        click: () => logout()
    }]
]

const availableLocales = computed(() => {
    return (locales.value).filter((i) => i.code !== locale.value).map((locale) => {
        return [{
            label: locale.name,
            click: () => {
                setLocale(locale.code)
            }
        }]
    })
})

const logout = () => {
    auth.logout()
}
</script>
