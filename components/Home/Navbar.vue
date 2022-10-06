<template>
    <div>
        <nav class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between">
            <div class="flex">
                <NuxtLink to="/" class="mr-4">Home</NuxtLink>
                <NuxtLink to="/about" class="mr-4">About</NuxtLink>
                <NuxtLink to="/iphone" class="mr-4">iPhones</NuxtLink>
                <p class="mr-4">Cart ({{cart.length}})</p>
                <p>Total route changed: {{pageVisitCount.count}}</p>
            </div>
            
            <div v-if="auth.isAuthenticated">
                <NuxtLink to="/profile">Profile</NuxtLink>
                <button class="ml-4" @click="logoutHandler">Log out</button>
            </div>
            <NuxtLink v-else to="/login">Login</NuxtLink>

        </nav>   
    </div>
</template>

<script setup>
    const cart = useCart()
    const auth = useAuth()
    const pageVisitCount = usePageVisitCount()

    const logoutHandler = () => {
        auth.value.isAuthenticated = false
        navigateTo('/login')
        // auth.logout()
    }
</script>