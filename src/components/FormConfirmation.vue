<script setup>
import { onMounted, ref } from 'vue'
import { store } from '../store'
import { gsap } from 'gsap'
import Button from './Button.vue'

const formContainer = ref(null)
const btnNext = ref(null)

function runAnimation() {
  const tl = gsap.timeline()

  tl.to(formContainer.value, { opacity: 1 })
  tl.to(btnNext.value, { opacity: 1 }, '>')
}

function gotoForms() {
  store.nextAnimationStep()
}

onMounted(() => {
  gsap.set(btnNext.value, { opacity: 0 })
  gsap.set(formContainer.value, { opacity: 0 })

  runAnimation()
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h3 ref="formContainer" class="font-bold text-white text-5xl">Forms confirmation</h3>
    <Button :text="'Proceed'" :color="'white'" @click="gotoForms" />
  </div>
</template>
