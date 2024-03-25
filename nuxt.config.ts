import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  hooks: {
    close: () => {
      process.exit(0);
    },
  },
});
