/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
module.exports = {
    content: [
        './client/*.{js,vue,ts}',
        './nuxt.config.{js,ts}'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: colors.indigo["500"],
                    DEFAULT: colors.indigo["600"],
                    dark: colors.indigo["700"]
                },
                secondary: {
                    light: colors.fuchsia["500"],
                    DEFAULT: colors.fuchsia["600"],
                    dark: colors.fuchsia["700"]
                },
                neutral: {
                    light: colors.cyan["500"],
                    DEFAULT: colors.cyan["600"],
                    dark: colors.cyan["700"]
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
                    light: colors.amber["500"],
                    DEFAULT: colors.amber["600"],
                    dark: colors.amber["700"]
                },
            }
        },
    },
    plugins: [],
}

