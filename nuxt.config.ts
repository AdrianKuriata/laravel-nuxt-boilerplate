export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    devtools: {enabled: true},
    srcDir: 'client/',
    plugins: [
        '~/plugins/fontawesome.js'
    ],
    modules: [
        [
            '@nuxtjs/eslint-module',
            {
                'lintOnStart': false
            }
        ],
        '@nuxt-alt/auth',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        [
            '@nuxtjs/i18n',
            {
                strategy: 'no_prefix',
                defaultLocale: 'pl',
                legacy: false,
                locale: 'en',
                langDir: './locales',
                lazy: true,
                locales: [
                    {
                        code: 'pl',
                        name: 'Polski',
                        file: 'pl.json'
                    },
                    {
                        code: 'en',
                        name: 'English',
                        file: 'en.json'
                    },
                ]
            }
        ],
        'nuxt-lodash'
    ],
    auth: {
        middleware: 'auth',
        strategies: {
            laravelSanctum: {
                provider: 'laravel/sanctum',
                url: process.env.APP_URL
            },
        }
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    lodash: {
        prefix: '_',
        upperAfterPrefix: false
    }
})
