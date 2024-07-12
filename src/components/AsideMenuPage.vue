<script setup lang="ts">
import { usePageView } from '@/stores/pageView'

// access the `store` variable anywhere in the component ✨
const pageView = usePageView()
</script>
<template>
  <div id="aside_Menu_Page" class="block">
    <p @click="pageView.modify('first')">Home</p>
    <hr />
    <h2>C'est un lieu pour</h2>
    <hr />
    <div>
      <p @click="pageView.modify('don')">les donnateurs</p>
      <p @click="pageView.modify('asso')">les associations</p>
      <p @click="pageView.modify('echange')">les echanges</p>
      <p @click="pageView.modify('tool')">les outils</p>
    </div>
  </div>
</template>
<style>

#aside_Menu_Page {
  position: absolute;
  left: 5vw;
  top: 25vh;
  width: 20vw;
  height: 50vh;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

p {
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
}


</style>
