export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/content'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})
