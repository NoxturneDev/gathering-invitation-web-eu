<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import Button from './Button.vue'

const thankYouTextRef = ref(null)
const form = ref(null)

function thankyouAnimation() {
  const { value: target } = thankYouTextRef

  const innerTextSplitted = target.innerText.split('')
  const spans = innerTextSplitted.map((el) => `<span>${el}</span>`)
  target.innerHTML = spans.join('') // Replace the inner HTML with the spans

  const spanElements = target.querySelectorAll('span')
  spanElements.forEach((el) => {
    const timeline = gsap.timeline()

    timeline.set(el, { opacity: 0 }) // Start with opacity 0 for all elements
    timeline.to(el, { opacity: 1, delay: Math.random() * 1 }) // Apply a random delay between 0 and 0.5 seconds
  })

  gsap.fromTo(form.value, { opacity: 0 }, { opacity: 1 })
}

onMounted(() => {
  thankyouAnimation()
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-10">
    <h1 ref="thankYouTextRef" class="text-white font-bold text-4xl md:text-5xl">Kami tunggu kehadiranya!</h1>
    <div ref="form">
      <Button>
        <a href="https://forms.gle/4p1LWRm2bY9w8bxn8" target="_blank"> Link Form Partisipasi </a>
      </Button>
    </div>
    <!-- <h3 class="font-light text-white text-2xl" ref="form"></h3> -->
  </div>
</template>

<style>
.link-form {
  background-color: transparent;
  border-bottom: 1px;
  border-image: linear-gradient(to right, #0077ff, #00aaff) 1;
  border-style: solid;
  outline: none;
  color: white;
  padding: 0.8em 0.5em;
  font-weight: bold;
}
</style>
