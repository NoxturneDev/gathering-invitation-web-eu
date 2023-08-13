<script setup>
import { onMounted, ref } from 'vue'
import { store } from '../store.js'
import gsap from 'gsap'

const loaderTitle = ref(null)

function loaderAnimation() {
  const { value: target } = loaderTitle

  const innerTextSplitted = target.innerText.split('')
  const spans = innerTextSplitted.map((el) => `<span>${el}</span>`)
  target.innerHTML = spans.join('') // Replace the inner HTML with the spans

  const spanElements = target.querySelectorAll('span')
  let totalDuration = 0
  spanElements.forEach((el) => {
    const timeline = gsap.timeline()

    timeline.set(el, { opacity: 0 }) // Start with opacity 0 for all elements
    timeline.to(el, { opacity: 1, delay: Math.random() * 1 }) // Apply a random delay between 0 and 0.5 seconds

    totalDuration = timeline.duration()
  })

  setTimeout(
    () => {
      store.finishLoader()
      store.nextAnimationStep()
    },
    totalDuration * 1000 + 500
  )
}

onMounted(() => {
  loaderAnimation()
})
</script>

<template>
  <h1 ref="loaderTitle">Mahasiswa Universitas Esa Unggul</h1>
  <h3>{{ store.isLoaderFinish }}</h3>
</template>
