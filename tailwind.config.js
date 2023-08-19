/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
module.exports = {
    content: [
        './client/components/**/*.{js,vue,ts}',
        './client/layouts/**/*.vue',
        './client/pages/**/*.vue',
        './client/plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './client/app.vue',
    ],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif']
        },
        extend: {
            colors: {
                primary: {
                    light: colors.blue["500"],
                    DEFAULT: colors.blue["600"],
                    dark: colors.blue["700"]
                },
                secondary: {
                    light: colors.zinc["500"],
                    DEFAULT: colors.zinc["600"],
                    dark: colors.zinc["700"]
                },
                neutral: {
                    light: colors.slate["50"],
                    DEFAULT: colors.slate["100"],
                    dark: colors.slate["300"]
                },
                success: {
                    light: colors.green["500"],
                    DEFAULT: colors.green["600"],
                    dark: colors.green["700"]
                },
                error: {
                    light: colors.red["500"],
                    DEFAULT: colors.red["600"],
                    dark: colors.red["700"]
                },
                warning: {
                    light: colors.yellow["300"],
                    DEFAULT: colors.yellow["400"],
                    dark: colors.yellow["50"]
                },
            }
        },
    },
    plugins: [],
}

