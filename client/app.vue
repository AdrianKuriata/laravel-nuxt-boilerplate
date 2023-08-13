<template>
    <div class="bg-slate-50 h-screen">
        <nav class="bg-slate-100 border-b-1 shadow top-0 sticky">
            <div class="container mx-auto py-5 flex justify-between align-middle">
                <div>
                    <NuxtLink to="/">Logo</NuxtLink>
                </div>
                <div class="flex justify-between align-middle">
                    <div v-if="auth.loggedIn">
                        <dropdown :label="auth.user.name">
                            <dropdown-item @click="logout">
                                <fa-icon :icon="['fas', 'right-from-bracket']"/>
                                {{$t('Logout')}}
                            </dropdown-item>
                        </dropdown>
                    </div>
                    <div v-else>
                        <NuxtLink to="/auth/login" class="mr-2">{{$t('Login')}}</NuxtLink>
                        <NuxtLink to="/auth/register">{{$t('Register')}}</NuxtLink>
                    </div>
                    <dropdown :label="$t('Lang')" class="ml-2">
                        <dropdown-item v-for="availableLocale in availableLocales"
                                       :key="availableLocale.code"
                                       @click="setLocale(availableLocale.code)">
                            {{availableLocale.name}}
                        </dropdown-item>
                    </dropdown>

                </div>
            </div>
        </nav>
        <main class="container mx-auto py-5">
            <NuxtPage></NuxtPage>
        </main>
    </div>
</template>

<script setup>
const auth = useAuth()

const {locale, locales, setLocale} = useI18n()

const availableLocales = computed(() => {
    return (locales.value).filter((i) => i.code !== locale.value)
})

const logout = () => {
    auth.logout()
}
</script>
