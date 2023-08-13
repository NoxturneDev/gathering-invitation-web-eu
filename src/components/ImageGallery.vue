<script setup>
import { onMounted, ref } from 'vue'
import { store } from '../store'
import { gsap } from 'gsap'

const imageContainerRef = ref(null)
const btnNext = ref(null)

function runAnimation() {
  const tl = gsap.timeline()
  tl.to(imageContainerRef.value, { opacity: 1 })
  tl.to(btnNext.value, { opacity: 1 })
}

function proceedNext() {
  store.nextAnimationStep()
}

onMounted(() => {
  gsap.set(imageContainerRef.value, { opacity: 0 })
  gsap.set(btnNext.value, { opacity: 0 })

  runAnimation()
})
</script>

<template>
  <div ref="imageContainerRef">
    <h1>Image gallery</h1>
  </div>
  <button ref="btnNext" @click="proceedNext">next</button>
</template>
