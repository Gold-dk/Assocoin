<script setup lang="ts">
import { usePageView } from '@/stores/pageView'
import { computed } from 'vue'

const pageStore = usePageView()

const PageView = computed(() => pageStore.getPageAside)

// access the `store` variable anywhere in the component ✨
</script>
<template>
  <div id="aside_page" class="block">
    <component :is="PageView" />
  </div>
</template>
<style>
#aside_page {
  position: absolute;
  right: 5vw;
  top: 25vh;
  width: 20vw;
  height: 50vh;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

hr {
  border-style: dashed;
}

h1,
h2,
h3 {
  text-align: center;
}
p {
  padding: 5px;
  margin-left: 10px;
}
</style>
