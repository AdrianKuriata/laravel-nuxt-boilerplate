/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './client/components/**/*.{js,vue,ts}',
        './client/layouts/**/*.vue',
        './client/pages/**/*.vue',
        './client/plugins/**/*.{js,ts}',
        './client/app.config.{js,ts}',
        './nuxt.config.{js,ts}',
        './tailwind.config.{js,ts}',
        './client/app.vue'
    ],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif']
        }
    },
    plugins: [],
}

