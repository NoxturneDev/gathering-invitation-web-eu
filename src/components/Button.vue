<script setup>
defineProps({
  text: String,
  color: String
})
defineEmits(['click'])
</script>

<template>
  <button class="btn" @click="$emit('click')">{{ text }}</button>
</template>

<style>
.btn {
  border: 1px solid;
  font-weight: 700;
  padding: 0.5em 1em;
  transition: all ease-in-out 500ms;
  border-image: linear-gradient(to right, #0077ff, #00aaff) 1;
  background: linear-gradient(to right, #0077ff, #00aaff);
  background-clip: text;
  -webkit-background-clip: text; /* For compatibility with some browsers */
  color: transparent; /* Hide the original text color */
}

.btn:hover{
  color:white;
  border: 1px solid;
}
</style>
