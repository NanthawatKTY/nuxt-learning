<template>
    <div>

        <Head>
            <Title>Fleet v5 - iPhone {{name}}</Title>
        </Head>
        <div class="flex justify-center w-full mt-20">
            <div class="grid grid-cols-2">
                <div>
                    <img :src="`/images/iphone-${route.params.name}.png`" />
                </div>
                <div class="text-center">
                    <h1 class="text-3xl">Iphone {{ name }}</h1>
                    <button @click="addToCart" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">
                        <span v-if="isInCart()">Remove from Cart </span>
                        <span v-else>Buy Now </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()
    const name = computed(() => route.params.name.replaceAll('-', ' '))

    const fullname = computed(() => {
        return `iphone-${route.params.name}`;
    });

    // Cart functions
    const cart = useCart();

    function isInCart() {
        // !! = If the item is in the cart, return true
        // Otherwise, return false
        return !!cart.value.find((ct) => ct.name === fullname.value);
    }
    
    // console.log("Is in card?", isInCart());
    function addToCart() {
        if (!isInCart()) {
            //If the item is not in the cart, add it
            //If it's false (not in the cart), add it
            //If it's true (in the cart), do nothing
            cart.value.push({
                name: fullname
            });
            console.log(cart.value);
            console.log("Is in card?", isInCart());
        } else {
            //If it's true (in the cart), remove it
            // console.log("Deleted fullname:", fullname.value);
            cart.value = cart.value.filter((ct) => ct.name !== fullname.value);
            console.log("Removed card", cart.value);
            console.log("Is in card?", isInCart());
        }
    }

    // useHead({
    //     title: `Fleet v5 - iPhone ${route.params.name}`,
    // })
</script>