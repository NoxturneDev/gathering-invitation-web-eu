<script setup>
import InputName from './components/InputName.vue'
import Loader from './components/Loader.vue'
import ThankYou from './components/ThankYou.vue';
import ImageGalleryVue from './components/ImageGallery.vue';
import FormConfirmationVue from './components/FormConfirmation.vue';

import {store} from './store.js'
</script>

<template>
  <main class="w-100 min-w-full h-screen min-h-full px-4 py-2 grid place-items-center bg-blue-300">
  <Loader v-if="store.currentAnimationIndex === 0"/>
  <InputName v-if="store.currentAnimationIndex === 1"/>
  <ImageGalleryVue v-if="store.currentAnimationIndex === 2"/>
  <FormConfirmationVue v-if="store.currentAnimationIndex === 3"/>
  <ThankYou v-if="store.currentAnimationIndex === 4"/>
  </main>
</template>
