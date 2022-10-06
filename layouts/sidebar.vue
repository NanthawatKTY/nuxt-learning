<template>
    <main class="user-layout bg-gray-500">
        <article class="sidebar">
            <p>Dashboard</p>
            <p>Settings</p>
        </article>
        
        <section>
            <!-- Here, Nuxt3 will replace page content -->
            <slot></slot>
        </section>
    </main>
</template>


<style>
    .sidebar {
        color: red;
        display: flex;
        flex-direction: column;
    }
    
    .user-layout {
        display: flex;
    }
</style>