<template>
  <iframe :src="props.svelte5" />
</template>

<script setup lang="ts">
const props = defineProps<{
  svelte5: string;
}>();
</script>

<style scoped>
iframe {
  position: fixed;
  top: 20px;
  left: 16px;
  width: 950px;
  height: 520px;
}
</style>
