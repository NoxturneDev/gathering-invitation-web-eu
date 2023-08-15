<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const wrapper = ref(null)
const circleOne = ref(null)
const circleTwo = ref(null)
const circleThree = ref(null)

function runAnimation() {
  animateBgColor()
}

function animateBgColor() {
  const tl = gsap.timeline({ repeat: -1 })

  tl.to(wrapper.value, { rotate: 360, duration: 35, ease: 'linear' }, 0)
  tl.to(circleOne.value, { rotate: 360, duration: 35, ease: 'linear' }, 0)
  tl.to(circleTwo.value, { rotate: 360, duration: 35, ease: 'linear' }, 0)
  tl.to(circleThree.value, { rotate: 360, duration: 35, ease: 'linear' }, 0)
}

onMounted(() => {
  runAnimation()
})
</script>

<template>
  <div class="boundary">
    <div class="wrapper" ref="wrapper">
      <div class="circle" ref="circleOne"></div>
      <div class="circle" ref="circleTwo"></div>
      <div class="circle" ref="circleThree"></div>
    </div>
  </div>
</template>

<style>
.boundary {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  display: grid;
  place-items: center;
}
.wrapper {
  position: absolute;
  width: 250%;
  height: 250%;
  z-index: -1;
  background-color: #010101;
}

.circle {
  position: absolute;
  border-radius: 50%;
  animation: moveCircles 10s infinite linear;
}

.circle:nth-child(1) {
  background: linear-gradient(to bottom, #00aaff, #0077ff);
  filter: blur(20px);
  bottom: 20%;
  right: 20%;
  width: 700px;
  height: 700px;
}

/* .circle:nth-child(2) {
  background: linear-gradient(to bottom, #0077ff, #0055ff);
  filter: blur(20px);
  right: 10px;
  bottom: 40%;
  width: 600px;
  height: 600px;
} */

.circle:nth-child(3) {
  background: linear-gradient(to bottom, #0055ff, #0033ff);
  filter: blur(20px);
  left: 10%;
  top: 20%;
  width: 800px;
  height: 800px;
}
</style>
