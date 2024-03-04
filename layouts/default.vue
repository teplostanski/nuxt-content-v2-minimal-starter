<template>
  <div>
    <nav>
      <NuxtLink to="/" class="link">Home</NuxtLink>
      <NuxtLink to="/blog" class="link">Blog</NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
.link {
  margin-right: 1rem;
}
img {
  width: 100px;
}
</style>
