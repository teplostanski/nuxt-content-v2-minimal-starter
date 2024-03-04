<template>
  <div>
    <!-- Проверка наличия слага -->
    <div v-if="!$route.params.slug">
      <!-- Список всех статей для /blog -->
      <BlogPosts />
    </div>
    <div v-else>
      <!-- Контент конкретной статьи для /blog/slug -->
      <ContentDoc :path="'/blog/' + $route.params.slug.join('/')">
        <template #not-found>
          <h2>Blog post not found</h2>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup>
// Импорт компонента списка статей, если он не глобальный
import BlogPosts from '@/components/BlogPosts.vue'
</script>
