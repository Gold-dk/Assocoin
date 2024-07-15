<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let divALL: HTMLCollectionOf<HTMLDivElement>
let scrollY: number
let divActivate: number = 0

const scrollListener = () => {
  console.log(divALL[0].scrollTop)
}

onMounted(() => {
  divALL = document.getElementsByTagName('div')
  divALL[0].addEventListener('wheel', scrollListener)
})

onUnmounted(() => {
  divALL[0].removeEventListener('wheel', scrollListener)
})
</script>
<template>
  <div>
    <h1>ASSOCOIN</h1>
    <h1>Welcome to the new social network</h1>
    <div id="sub_title">
      <h3>for association</h3>
      <h3>boost by blockchain</h3>
    </div>
  </div>
  <div>2</div>
</template>

<style>
div {
  height: 50vh;
}
</style>
