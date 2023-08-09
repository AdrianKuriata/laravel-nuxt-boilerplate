<template>
    <div class="bg-slate-50 h-screen">
        <nav class="bg-slate-100 border-b-1 shadow top-0 sticky">
            <div class="container mx-auto py-5 flex justify-between align-middle">
                <div>
                    <NuxtLink to="/">Logo</NuxtLink>
                </div>
                <div class="flex justify-between align-middle">
                    <div v-if="auth.loggedIn">
                        Profile
                    </div>
                    <div v-else>
                        <NuxtLink to="/auth/login" class="mr-2">{{ $t('Login') }}</NuxtLink>
                        <NuxtLink to="/auth/register">{{ $t('Register') }}</NuxtLink>
                    </div>
                    <button type="button" v-for="locale in availableLocales" :key="locale.code" @click="setLocale(locale.code)" class="ml-2">
                        {{ locale.name }}
                    </button>
                </div>
            </div>
        </nav>
        <main class="container mx-auto py-5">
            <NuxtPage></NuxtPage>
        </main>
    </div>
</template>

<script>
export default {
    setup() {
        const auth = useAuth()

        const { locale, locales, setLocale } = useI18n()

        const availableLocales = computed(() => {
            return (locales.value).filter((i) => i.code !== locale.value)
        })

        return {
            auth,
            setLocale,
            availableLocales
        }
    }
}
</script>
