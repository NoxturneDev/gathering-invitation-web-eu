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
    <!-- <div class="w-40 h-auto" ref="imageWrapper">
      <img src="bg-1.jpg" alt="" />
    </div> -->
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

/* Circle 1 Styles */
.circle:nth-child(1) {
  background: linear-gradient(to bottom, #1915fa, #0077ff);
  filter: blur(20px);
  bottom: 20%;
  right: 20%;
  width: 700px;
  height: 700px;
}

/* Circle 2 Styles */
.circle:nth-child(2) {
  background: linear-gradient(to bottom, #3700ff, #0033ff);
  filter: blur(20px);
  right: 5%;
  top: 10%;
  width: 800px;
  height: 800px;
}

/* Circle 2 Styles */
.circle:nth-child(3) {
  background: linear-gradient(to bottom, #0055ff, #0033ff);
  filter: blur(20px);
  left: 10%;
  top: 20%;
  width: 800px;
  height: 800px;
}

/* Responsive Styles */
.circle:nth-child(1) {
  width: 90vmin; /* Responsive sizing based on viewport width */
  height: 90vmin; /* Responsive sizing based on viewport height */
}

.circle:nth-child(2) {
  width: 95vmin; /* Responsive sizing based on viewport width */
  height: 95vmin; /* Responsive sizing based on viewport height */
}

.circle:nth-child(3) {
  width: 100vmin; /* Responsive sizing based on viewport width */
  height: 100vmin; /* Responsive sizing based on viewport height */
}

/* Media Queries for Desktop and Smaller Screens */
@media screen and (min-width: 768px) {
  .circle:nth-child(1) {
    width: 950px; /* 1.5 times the size for desktop */
    height: 950px; /* 1.5 times the size for desktop */
  }

  .circle:nth-child(1) {
    width: 1050px; /* 1.5 times the size for desktop */
    height: 1050px; /* 1.5 times the size for desktop */
  }

  .circle:nth-child(3) {
    width: 1100px; /* 1.5 times the size for desktop */
    height: 1100px; /* 1.5 times the size for desktop */
  }
}

</style>
