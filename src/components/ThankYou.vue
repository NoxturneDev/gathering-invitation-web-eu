<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const thankYouTextRef = ref(null)
const form = ref(null)

onMounted(() => {
  gsap.fromTo(thankYouTextRef.value, { opacity: 0 }, { opacity: 1 })
})
</script>

<template>
  <div class="flex flex-col justify-center items-start gap-10">
    <h1 ref="thankYouTextRef" class="text-white font-bold text-5xl">Kami tunggu kehadiranya!</h1>
    <h3 class="font-light text-white text-2xl" ref="form">
      <a href="https://forms.gle/4p1LWRm2bY9w8bxn8" class="italic" target="_blank">Link Form Partisipasi >></a>
    </h3>
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
