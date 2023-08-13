<script setup>
import { ref, onMounted } from 'vue'
import { store } from '../store'
import { gsap } from 'gsap'

const thankYouTextRef = ref(null)

function sayThanksAnimation() {
  const tl = gsap.timeline()

  tl.to(thankYouTextRef.value, { opacity: 1 })
}

onMounted(() => {
  gsap.set(thankYouTextRef, { opacity: 0 })
})
</script>

<template>
  <h1 ref="thankYouTextRef">Thank you</h1>
</template>
