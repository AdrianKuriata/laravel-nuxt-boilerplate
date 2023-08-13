export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    devtools: {
      enabled: true,

      timeline: {
        enabled: true
      }
    },
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
        'nuxt-lodash',
        [
            '@vee-validate/nuxt',
            {
                autoImports: true,
                componentNames: {
                    Form: 'VForm',
                    Field: 'VField',
                    FieldArray: 'VFieldArray',
                    ErrorMessage: 'VErrorMessage',
                },
            }
        ]
    ],
    auth: {
        globalMiddleware: true,
        redirect: {
            home: '/',
            login: '/auth/login',
            logout: '/'
        },
        strategies: {
            laravelSanctum: {
                provider: 'laravel/sanctum',
                url: process.env.APP_URL
            },
        }
    },
    router: {
        middleware: ['auth']
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