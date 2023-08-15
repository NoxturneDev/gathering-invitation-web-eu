<script setup>
import BackgroundAnimationVue from './components/BackgroundAnimation.vue'
import InputName from './components/InputName.vue'
import Loader from './components/Loader.vue'
import ThankYou from './components/ThankYou.vue'
// import ImageGalleryVue from './components/ImageGallery.vue'
import EventDetails from './components/EventDetails.vue'

import { store } from './store.js'
</script>

<template>
  <main class="w-100 min-w-full h-screen min-h-full px-4 py-2 grid place-items-center overflow-x-hidden">
    <BackgroundAnimationVue />
    <Loader v-if="store.currentAnimationIndex === 0" />
    <InputName v-if="store.currentAnimationIndex === 1" />
    <EventDetails v-if="store.currentAnimationIndex === 2" />
    <ThankYou v-if="store.currentAnimationIndex === 3" />
  </main>
</template>
