<!--pages/index.vue-->

<template>
  <div>
    <h1>Welcome to My App</h1>
    <button @click="auth.authenticateWithGitHub">Authenticate with GitHub</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useGitHubAuth from '~/compositions/useGitHubAuth';

const auth = useGitHubAuth();

onMounted(() => {
  auth.handleGitHubCallback();
});
</script>

