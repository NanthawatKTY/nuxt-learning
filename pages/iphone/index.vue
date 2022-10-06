<template>
    <div class="grid grid-cols-4 gap-4 mt-10">
        <nuxt-link v-for="iphone in iphones" :key="iphone" :to="`/iphone/${iphone}`"
            class="shadow-lg border rounded-lg text-center">
            <h1>{{ iphone }}</h1>
            <div class="flex justify-center">
                <img width="200" :src="`/images/${iphone}.png`" alt="" />
            </div>
        </nuxt-link>
    </div>

</template>

<script setup>
    useHead({
        title: 'Fleet v5 - iPhones',
    })

    // const iphones = ["iphone-14", "iphone-14-pro-gold"];

    const {data} = useFetch("/api/iphones")
    const iphones = data
</script>