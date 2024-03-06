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
const { data: blogPosts } = await useAsyncData(() =>
  queryContent('/blog').sort({ date: -1 }).where({ _partial: false }).find()
);
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
