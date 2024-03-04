// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //ssr: false,
  //app: {
  //  baseURL: '/nuxt-content-app-V2/',
  //},
  devtools: { enabled: true },
  modules: ['@nuxt/content', 'nuxt-content-assets'],
  hooks: {
    close: () => {
      // @see https://github.com/nuxt/cli/issues/169#issuecomment-1729300497
      // Workaround for https://github.com/nuxt/cli/issues/169
      process.exit(0);
    },
  },
});