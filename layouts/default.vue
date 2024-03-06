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
        <select id="locale-select" v-model="$i18n.locale">
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

<style>
.link {
  margin-right: 1rem;
}
img {
  width: 100px;
}
.header{
  display: flex;
}
</style>
