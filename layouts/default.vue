<template>
  <div>
    <div class="header">
      <nav>
        <NuxtLink to="/" class="link">Home</NuxtLink>
        <NuxtLink to="/about" class="link">About</NuxtLink>
        <NuxtLink to="/blog" class="link">Blog</NuxtLink>
      </nav>
      <form>
        <label for="locale-select">{{ $t('language') }}: </label>
        <select
          id="locale-select"
          v-model="localeStore.locale"
          @change="changeLocale"
        >
          <option value="en">en</option>
          <option value="fr">fr</option>
          <option value="ru">ru</option>
        </select>
      </form>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useLocaleStore } from '~/store/locale';

import { useI18n } from 'vue-i18n'

const localeStore = useLocaleStore()
const { locale } = useI18n()

const changeLocale = () => {
  locale.value = localeStore.locale // Обновление локали i18n
  localeStore.setLocale(localeStore.locale) // Сохранение выбранной локали в куки
}

onMounted(() => {
  localeStore.initLocale();
});
</script>

<style>
.link {
  margin-right: 1rem;
}
img {
  width: 100px;
}
.header {
  display: flex;
}
</style>
