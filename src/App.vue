<script setup lang="ts">
import { usePageView } from '@/stores/pageView'
import { computed } from 'vue'

const pageStore = usePageView()

const PageView = computed(() => pageStore.getPageMain)
const PageAsideView = computed(() => pageStore.getPageAside)
</script>

<template>
  <aside id="aside_Menu_Page" class="block">
    <h2>Menu</h2>
    <hr />
    <div class="cursor">
      <p @click="pageStore.modify('Home')">Home</p>
      <p @click="pageStore.modify('Don')">les donnateurs</p>
      <p @click="pageStore.modify('Asso')">les associations</p>
      <p @click="pageStore.modify('Echange')">les echanges</p>
      <p @click="pageStore.modify('Tool')">les outils</p>
    </div>
  </aside>
  <main class="block">
    <component :is="PageView" />
  </main>
  <aside id="aside_page" class="block">
    <h2>Sommaire</h2>
    <hr />
    <component :is="PageAsideView" />
  </aside>
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

#aside_Menu_Page {
  position: absolute;
  left: 5vw;
  top: 25vh;
  width: 20vw;
  height: 50vh;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}
</style>
