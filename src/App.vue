<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@font-face {
  font-family: 'Inter Regular';
  src: url('@/assets/fonts/inter/Inter_18pt-Medium.ttf');
}

@font-face {
  font-family: 'Inter Bold';
  src: url('@/assets/fonts/inter/Inter_24pt-Bold.ttf');
}

@font-face {
  font-family: 'Inter Light';
  src: url('@/assets/fonts/inter/Inter_18pt-Light.ttf');
}

p,
a {
  font-family: 'Inter Light';
}

h1,
h2,
h3 {
  font-family: 'Inter Bold';
  color: #2b35af;
}
</style>
