// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["assets/css/tailwind.css"],
    modules: ['@nuxtjs/tailwindcss'],
    meta: {
        title: 'Nuxt.js 3 Course',
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        }
      }
})
// function defineNuxtConfig(arg0: { css: string[]; modules: string[]; build: { postcss: { postcssOptions: { plugins: { tailwindcss: {}; autoprefixer: {}; }; }; }; }; }) {
//     throw new Error("Function not implemented.");
// }

