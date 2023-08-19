<template>
    <div class="bg-neutral-light h-screen">
        <nav class="bg-neutral border-b-1 shadow-md top-0 sticky">
            <div class="container mx-auto py-5 flex justify-between items-center">
                <div>
                    <NuxtLink to="/"><img src="@@/public/nuxt-logo.svg" class="max-w-[50px]" :alt="config.appName"></NuxtLink>
                </div>
                <div class="flex justify-between items-center">
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
    <toast />
</template>

<script setup>
const auth = useAuth()
const config = useRuntimeConfig().public

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
    return (locales.value).filter((i) => i.code !== locale.value)
})

const logout = () => {
    auth.logout()
}
</script>
