export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  nitro: {
    preset: 'github-pages',
  },
  shadcn: {
    prefix: 'SC',
    componentDir: './components/ui',
  },
  alias: {
    '~/types': '../types' },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  $production: {
    // prefix all routes with /fossil-logging for production builds only (e.g. /fossil-logging/about)
    app: {
      baseURL: '/fossil-logging',
    },
  },
})
