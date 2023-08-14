<script setup>
import { onMounted, ref } from 'vue'
import { store } from '../store'
import { gsap } from 'gsap'

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
  <h3 ref="formContainer">Forms confirmation</h3>
  <a href="https://forms.gle/4p1LWRm2bY9w8bxn8">Isi Link form kehadiran disini</a>
  <button ref="btnNext" @click="gotoForms">Confirm</button>
</template>
