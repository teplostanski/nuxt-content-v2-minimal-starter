<template>
  <h1>{{ $t('title') }}</h1>
  <h2>{{ $t('hello', { name: 'vue-i18n' }) }}</h2>
  <ul>
    <li
      class="card"
      v-for="{
        _path: slug,
        title,
        date,
        cover,
        description,
        lang,
      } in blogPosts"
      :key="slug"
    >
      <img
        class="cardImg"
        :src="cover"
        alt="f"
      />
      <div class="cardItem">
        <NuxtLink :to="slug">{{ title }}</NuxtLink>
        <div class="cardDesc">{{ description }}</div>
        <span>{{ date }}</span> <span class="lang">{{ lang }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useLocaleStore } from '~/store/locale'

import { useI18n } from 'vue-i18n'

const localeStore = useLocaleStore()
const { locale } = useI18n()
// Используйте useAsyncData для асинхронной загрузки отфильтрованных статей
const { data: blogPosts, refresh } = await useAsyncData(() =>
  queryContent('/blog')
    .where({ lang: locale.value })
    .sort({ date: -1 })
    .find()
)

watch(() => locale.value, () => {
  refresh();
});
</script>


<style scoped lang="scss">
.card {
  display: flex;
  padding: 10px;
  border-radius: 18px;
  background: #c6c6c6;
  width: 600px;
  height: fit-content;
  margin-bottom: 40px;
  &Item {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  &Img {
    border-radius: 16px;
    width: 200px;
    height: fit-content;
  }
  &Desc {
    max-height: 110px;
    margin: 15px 0;
    border: 1px solid red;
    overflow: hidden;
    
    &Wrapper {
      background: linear-gradient(blue, pink);
    }
  }
}

.lang{
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  font-weight: 900;
  padding: 10px;
}
</style>
<!--
<template>
  <h1>{{ $t('title') }}</h1>
  <h2>{{ $t('hello', { name: 'vue-i18n' }) }}</h2>
  <ul>
    <li class="card" v-for="{ post, isTranslated } in filteredBlogPosts" :key="post._path">
      <span>{{ post._path }}</span>
      <img class="cardImg" :src="post.cover" :alt="post.title" />
      <div class="cardItem">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        <div class="cardDesc">{{ post.description }}</div>
        <span>{{ post.date }}</span>
        <span class="lang">{{ post.lang }}</span>
        <span v-if="!isTranslated" class="translation-notice">
          Статья не переведена на выбранный язык
        </span>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useLocaleStore } from '~/store/locale';

interface BlogPost{
  _path?: string;
  title?: string;
  date?: string;
  cover?: string;
  description?: string;
  lang?: string;
}

interface BlogPostWithTranslationStatus {
  post: BlogPost;
  isTranslated: boolean;
}

const localeStore = useLocaleStore();
const defaultLocale = 'en';

// Предполагаем, что useAsyncData возвращает данные типа ParsedContent[] или null
const { data: allBlogPosts } = await useAsyncData('allBlogPosts', () =>
  queryContent('/blog').where({_partial: false}).sort({ date: -1 }).find()
);

const filteredBlogPosts = computed<BlogPostWithTranslationStatus[]>(() => {
  if (!allBlogPosts.value) return [];

  // Создаем Map для отслеживания уникальных путей статей
  const uniquePaths = new Map<string, BlogPostWithTranslationStatus>();

  allBlogPosts.value.forEach(post => {
    if (!post._path) return; // Пропускаем статьи без _path
    const articlePath = post._path.split('/')[2]; // Получаем уникальный идентификатор статьи

    if (post.lang === localeStore.locale) {
      uniquePaths.set(articlePath, { post, isTranslated: true });
    } else if (post.lang === defaultLocale && !uniquePaths.has(articlePath)) {
      uniquePaths.set(articlePath, { post, isTranslated: false });
    }
  });

  return Array.from(uniquePaths.values());
});


</script>-->

<!--<style scoped lang="scss">
.card {
  display: flex;
  padding: 10px;
  border-radius: 18px;
  background: #c6c6c6;
  width: 600px;
  height: fit-content;
  margin-bottom: 40px;
  &Item {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  &Img {
    border-radius: 16px;
    width: 200px;
    height: fit-content;
  }
  &Desc {
    max-height: 110px;
    margin: 15px 0;
    border: 1px solid red;
    overflow: hidden;

    &Wrapper {
      background: linear-gradient(blue, pink);
    }
  }
}

.lang {
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  font-weight: 900;
  padding: 10px;
}
</style>
{ ...post, isTranslated: true, date: '', cover: '', description: '', lang: '' }{
...post, isTranslated: false, date: '', cover: '', description: '', lang: '' }-->
