<script setup lang="ts">
import { usePageView } from '@/stores/pageView'
import { computed } from 'vue'

const pageStore = usePageView()

const PageView = computed(() => pageStore.getPageMain)

// access the `store` variable anywhere in the component ✨
</script>
<template>
  <main class="block">
    <component :is="PageView" />
  </main>
</template>
<style>
main {
  width: 40vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
}

main > div {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: auto;
}

h1,
h2,
h3 {
  text-align: center;
}

.display_none {
  opacity: 0 !important;
  pointer-events: none !important;
}

.display {
  opacity: 1;
  pointer-events: auto;
}

.transition {
  transition: opacity 0.5s ease-in-out;
}
</style>
