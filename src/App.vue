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
      <p @click="pageStore.modify('first')">Home</p>
      <p @click="pageStore.modify('don')">les donnateurs</p>
      <p @click="pageStore.modify('asso')">les associations</p>
      <p @click="pageStore.modify('echange')">les echanges</p>
      <p @click="pageStore.modify('tool')">les outils</p>
    </div>
  </aside>
  <main>
    <component :is="PageView" />
  </main>
  <aside id="aside_page" class="block">
      <h2>Sommaire</h2>
      <hr />
      <component :is="PageAsideView" />
  </aside>
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
