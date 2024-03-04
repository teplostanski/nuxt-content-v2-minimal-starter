<template>
  <h1>Blog</h1>
  <ul>
    <li v-for="{ _path: slug, title, date, cover } in blogPosts" :key="slug">
      <NuxtLink :to="slug">{{ title }} {{ date }}</NuxtLink>
      <img :src="cover" alt="f" style="width: 100px; height: auto" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data: blogPosts } = await useAsyncData(() =>
  queryContent('/blog').sort({ date: -1 }).where({ _partial: false }).find()
);
</script>
