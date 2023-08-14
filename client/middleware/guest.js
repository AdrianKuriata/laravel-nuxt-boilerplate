export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuth()
    if (auth.loggedIn === true) {
        return navigateTo('/')
    }
})
