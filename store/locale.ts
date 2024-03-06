// stores/locale.ts
import { defineStore } from 'pinia'
import { useCookie } from '#app'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: 'en',
  }),
  actions: {
    setLocale(newLocale: string) {
      this.locale = newLocale
      // Установка куки для локали
      const cookie = useCookie('curentLocale')
      cookie.value = newLocale
    },
    initLocale() {
      // Чтение куки и установка локали
      const cookie = useCookie('curentLocale')
      if (cookie.value) {
        this.locale = cookie.value
      }
    },
  },
})
