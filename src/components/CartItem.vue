<template>
    <div class="flex justify-between items-center w-full my-2 gap-4">
        <div class="w-8 h-8">
            <img class="rounded-md" :src="url" alt="Product thumbnail">
        </div>

        <div class="w-5/6 overflow-clip">
            <h3>{{name}}</h3>
            <p>
                ${{price}} x {{quantity}} <span>${{total}}</span>
            </p>
        </div>

        <div>
            <img src="../assets/icon-delete.svg" alt="Delete Product">
        </div>
    </div>
</template>

<script>
export default {
    name: "CartItem",
    props:{
        id: String,
        name: String,
        price: Number,
        quantity: Number,
        total: Number,
        url: String
    }
}
</script>

<style>

</style>