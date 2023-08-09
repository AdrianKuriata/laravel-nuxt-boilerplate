<template>
    <div class="border mx-auto w-1/2 shadow p-5">
        <h1 class="text-2xl">Login</h1>

        <field-wrapper label="Login">
            <input class="border shadow rounded w-full p-2" :class="{ 'border border-red-700': true }" placeholder="Wprowadź login" />
        </field-wrapper>

        <button type="button" @click="login">Zaloguj</button>
    </div>
</template>
<script>
export default {
    setup() {
        const auth = useAuth()
        // Zainstalować vee-validate dla nuxt
        const login = () => {
            auth.loginWith('laravelSanctum', {
                body: {
                    email: '',
                    password: ''
                }
            })
        }

        return {
            login
        }
    }
}
</script>
