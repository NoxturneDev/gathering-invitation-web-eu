<script setup>
defineProps({
  text: String,
  color: String
})
defineEmits(['click'])
</script>

<template>
  <button class="btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<style>
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(90deg, #fff 1px, transparent 0) 0 0,
    linear-gradient(180deg, #fff 1px, transparent 0) 0 0,
    linear-gradient(270deg, #fff 1px, transparent 0) 100% 0,
    linear-gradient(180deg, #fff 1px, transparent 0) 100% 0,
    linear-gradient(270deg, #fff 1px, transparent 0) 100% 100%,
    linear-gradient(0deg, #fff 1px, transparent 0) 100% 100%,
    linear-gradient(90deg, #fff 1px, transparent 0) 0 100%,
    linear-gradient(0deg, #fff 1px, transparent 0) 0 100%;
  background-repeat: no-repeat;
  background-size: 4px 4px;
  margin: -1px;
  /* z-index: 1; */
}

.btn {
  border: 0.5px solid rgba(255, 255, 255, 0.267);
  position: relative;
  font-weight: 500;
  padding: 0.8em 1.5em;
  transition: all ease-in-out 500ms;
  background: linear-gradient(to right, #1d20f0f5, #4319ff94);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.btn:hover {
  color: white;
  border: 0.6px solid rgba(255, 255, 255, 0.671);
}
</style>
