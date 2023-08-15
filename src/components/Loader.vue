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
    timeline.to(el, { opacity: 0, delay: Math.random() * 1 }, ">+2") // Apply a random delay between 0 and 0.5 seconds

    totalDuration = timeline.duration()
  })

  setTimeout(
    () => {
      store.finishLoader()
      store.nextAnimationStep()
    },
    totalDuration * 1000 + 1000
  )
}

onMounted(() => {
  loaderAnimation()
})
</script>

<template>
  <div class="flex flex-col md:gap-4 justify-center items-center">
    <h1 ref="loaderTitle" class="font-bold text-6xl text-white text-center">
      Welcome..
    </h1>
    <!-- <button class="rounded-full h-10 w-10 bg-blue-500" @click="store.nextAnimationStep()"></button> -->
  </div>
</template>
