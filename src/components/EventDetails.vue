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
  <div class="flex flex-col justify-center items-center gap-5 px-4 py-9 backdrop-blur-sm bg-blue-700 bg-opacity-20 border-[0.8px] border-white border-opacity-25 text-white">
    <!-- Location -->
    <h3 class="font-bold">LOKASI</h3>
    <p>Jl Alamat Kampung Bandang, Jakarta Barat, Indonesia 16360</p>
    <h3 class="font-bold">TANGGAL</h3>
    <p>20 Agustus 2020</p>
  </div>
  <Button :text="'Daftar'" @click="gotoForms" />
</template>
