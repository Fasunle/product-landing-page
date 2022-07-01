<template>
    <div class="flex mt-8">

        <div class="flex items-center place-content-around px-8 py-2 bg-gray-50 w-36 rounded-md shadow-md">
            <span class="cursor-pointer">
                <img src="../assets/icon-minus.svg" alt="Decrease quantity">
            </span>
            <span class="mx-2 font-bold">3</span>
            <span class="cursor-pointer">
                <img src="../assets/icon-plus.svg" alt="Increase quantity">
            </span>

        </div>

        <button class="flex justify-between w-56 px-8 py-2 ml-4 rounded-md bg-orange-400 text-white shadow-xl">
            <img src="../assets/icon-cart.svg" alt="Add to cart">
            <span class="text-lg font-semibold">Add to cart</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "QuantityCounter"

}
</script>

<style>

</style>