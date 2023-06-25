import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  lodash: {
    prefix: '_',
    upperAfterPrefix: false,
  },

  modules: ['nuxt-lodash', '@nuxtjs/tailwindcss'],

  ssr: false,

  vite: {
    plugins: [Components({ resolvers: [IconsResolver()] }), Icons({})],
  },
})
