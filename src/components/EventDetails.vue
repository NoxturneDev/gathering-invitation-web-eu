<script setup>
import { onMounted, ref } from 'vue'
import { store } from '../store'
import { gsap } from 'gsap'
import Button from './Button.vue'

const boxContainer = ref(null)
const btnNext = ref(null)

function gotoForms() {
  store.nextAnimationStep()
}

onMounted(() => {
  gsap.fromTo(boxContainer.value, { opacity: 0 }, { opacity: 1, duration: 2 })
  gsap.fromTo(btnNext.value, { opacity: 0 }, { opacity: 1, duration: 1 })
})
</script>

<template>
  <div
    ref="boxContainer"
    class="flex flex-col justify-center items-center gap-5 px-4 py-9 backdrop-blur-sm bg-blue-800 bg-opacity-30 border-[0.8px] border-white border-opacity-25 text-white"
  >
    <!-- Location -->
    <h3 class="text-2xl font-bold text-center">
      Silaturahmi Mahasiswa Baru Esa Unggul angkatan 2023
    </h3>
    <div class="mb-5 w-[200px] h-auto">
      <img src="/logo.jpeg" alt="" />
    </div>
    <div class="mb-3 w-full text-center">
      <h3 class="font-bold text-1xl">LOKASI (Menyesuaikan)</h3>
      <p>Titik kumpul Kampus Esa Unggul Jakarta (Setelah Zuhur)</p>
    </div>
    <div class="mb-3 w-full text-center">
      <h3 class="font-bold text-1xl">TANGGAL</h3>
      <p>20 Agustus 2023</p>
      <div class="mt-5" ref="btnNext">
        <Button @click="gotoForms">Daftar</Button>
      </div>
    </div>
    <div class="mt-10 text-center w-4/5">
      <p class="text-italic">Notes: Yang tidak ada kendaraan, bisa kumpul di kampus. InsyaAllah nanti ada boncengan</p>
    </div>
  </div>
</template>
