import {fileURLToPath} from "url";

export default defineNuxtConfig({
    imports: {
        dirs: ['stores/main'],
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/_base.scss',
        '@/assets/_forms.scss'
    ],
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'
            }
        ],
    },
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },
    srcDir: 'client/',
    plugins: [
        '@/plugins/fontawesome.js'
    ],
    components: [
        {
            path: '@/components',
            pathPrefix: false
        }
    ],
    runtimeConfig: {
        public: {
            backendUrl: process.env.APP_URL,
            frontendUrl: process.env.FRONTEND_URL,
            appName: process.env.APP_NAME
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        [
            '@nuxtjs/eslint-module',
            {
                'lintOnStart': false
            }
        ],
        [
            '@nuxt-alt/auth',
            {
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
            }
        ],
        '@pinia/nuxt',
        [
            '@nuxtjs/tailwindcss',
            {
                configPath: '@@/tailwind.config.js'
            }
        ],
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
        [
            'nuxt-lodash',
            {
                prefix: '_',
                upperAfterPrefix: false
            }
        ],
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
})
