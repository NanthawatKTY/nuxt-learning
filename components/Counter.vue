<template>
    <div>
      <button @click="incrementHandle">Increment</button>
      <p>{{count}}</p>
      <button @click="decrementHandle">Decrement</button>
    </div>
  </template>
  
  
  <script setup>
    const count = ref(0)
  
  
    const incrementHandle = () => {
      count.value++
    }
  
    const decrementHandle = () => {
      count.value--
    }
  </script>