<template>
    <div class="home mt-12 grid grid-cols-2 gap-4 items-center sm:items-start">

        <div class="grid grid-cols-1 md:grid-rows-6">

            <div class="row-span-5 w-full sm:w-5/6 mx-auto mb-6 max-w-sm">
                <img class="h-full rounded-xl" src="../assets/image-product-1.jpg" alt="Product 1">
            </div>

            <div class="row-span-1 hidden sm:flex gap-4 w-5/6 mx-auto max-w-sm">
                <div>
                    <img class="rounded-xl" src="../assets/image-product-1-thumbnail.jpg" alt="Product 1 thumbnail">
                </div>
                <div>
                    <img class="rounded-xl" src="../assets/image-product-2-thumbnail.jpg" alt="Product 2 thumbnail">

                </div>
                <div>
                    <img class="rounded-xl" src="../assets/image-product-3-thumbnail.jpg" alt="Product 3 thumbnail">
                </div>
                <div>
                    <img class="rounded-xl" src="../assets/image-product-4-thumbnail.jpg" alt="Product 4 thumbnail">
                </div>
            </div>

        </div>

        <div class="mt-4">
            <p class="uppercase text-orange-400 text-lg my-4 font-bold">Sneaker Company</p>

            <h1 class="capitalize text-black text-3xl mb-4 font-extrabold w-2/3">Fall Limited Edition Sneakers</h1>

            <p class="text-gray-500 text-base mb-4">These low-profile sneakers are your perfect casual wear companion.
                Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <div class="flex mb-2">
                <b class="text-black text-xl">$125.00</b>
                <p class="text-orange-600 font-bold rounded-md ml-4 px-2 bg-orange-100">50%</p>
            </div>

            <s class="font-semibold text-gray-400">$250.00</s>

            <div class="mt-8">
                <QuantityCounter />
            </div>
        </div>


    </div>
</template>

<script>

    import QuantityCounter from './QuantityCounter.vue'

    export default {
        name: 'HomePage',
        components: {
            QuantityCounter
        }
    }
</script>

<style scoped>

    .home{
        /* max-height: 55vmax; */
        height: fit-content;
    }
</style>