<template>
  <h2>Svelte 4</h2>
  <h2>Svelte 5</h2>
  <div class="iframe-container">
    <iframe :src="props.svelte4" />
    <iframe :src="props.svelte5" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  svelte4: string;
  svelte5: string;
}>();
</script>

<style scoped>
h2:nth-child(1) {
  position: fixed;
  margin-top: -40px;
  margin-left: 140px;
}

h2:nth-child(2) {
  position: fixed;
  margin-top: -40px;
  margin-left: 620px;
}

.iframe-container {
  position: relative;
}

iframe:nth-child(1) {
  position: fixed;
  top: 40px;
  left: 16px;
  width: 470px;
  height: 500px;
}

iframe:nth-child(2) {
  position: fixed;
  top: 96px;
  left: 500px;
  width: 470px;
  height: 444px;
}
</style>
