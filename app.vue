<template>
  <!-- <a href="#" @click="view('home')">Home</a>
  <a href="#" @click="view('counter')">Counter</a> -->
  <!-- <LazyHomeWelcome v-if="page === 'home'"/>
  <LazyCounter v-if="page === 'counter'"/> -->
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>  
  </div>  
</template>

<script setup>

const page = ref('home')

const view = (pageName) => {
  page.value = pageName
}
</script>
