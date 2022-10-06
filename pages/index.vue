<template>
    <div>
        <!-- <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link> -->
        Hello Index
        <button @click="toAboutPage">Go to About Page</button>
    </div>
</template>

<script setup>
    const toAboutPage = () => {
        navigateTo('about')
    }
</script>