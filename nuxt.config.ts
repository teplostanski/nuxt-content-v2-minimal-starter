import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  routeRules: {
    "/ssg": { prerender: true },
  },
  modules: ['@nuxt/content', 'nuxt-content-assets', '@nuxtjs/i18n', '@pinia/nuxt'],
  hooks: {
    close: () => {
      // @see https://github.com/nuxt/cli/issues/169#issuecomment-1729300497
      // Workaround for https://github.com/nuxt/cli/issues/169
      process.exit(0);
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    //locales: ['fr', 'ru', 'en'],
    //debug: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'curentLocale',
      redirectOn: 'root',
    },
  },
});
