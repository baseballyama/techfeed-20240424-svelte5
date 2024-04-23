<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>
div {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
