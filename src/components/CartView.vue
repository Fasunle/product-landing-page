<template>
  <div class="bg-gray-50 rounded-md shadow-2xl absolute p-cart-mobile sm:p-cart-desktop sm:fixed ">

    <h1 class="p-2 font-semibold text-black text-lg">Cart</h1>

    <span class="bg-gray-300 h-0.5 block"></span>

    <div class="grid grid-cols-1 grid-flow-row py-4 h-2/3 sm:h-3/4 overflow-y-auto snap-y scrollbar-hide">
      <div v-if="cartItems.length == 0" class="flex place-self-center snap-center">Your Cart is empty.</div>

      <div v-else-if="cartItems.length >= 0" v-for="cart in cartItems" class="mx-8 snap-center"
        :key="cart.id">
        <CartItem :name="cart.name" :price="60" :quantity="2" :total="120"
          :url="'https://avatars.githubusercontent.com/u/77301273?v=4'" />
        <CartItem :name="cart.name" :price="60" :quantity="2" :total="120"
          :url="'https://avatars.githubusercontent.com/u/77301273?v=4'" />
        <CartItem :name="cart.name" :price="60" :quantity="2" :total="120"
          :url="'https://avatars.githubusercontent.com/u/77301273?v=4'" />
        <CartItem :name="cart.name" :price="60" :quantity="2" :total="120"
          :url="'https://avatars.githubusercontent.com/u/77301273?v=4'" />
        <CartItem :name="cart.name" :price="60" :quantity="2" :total="120"
          :url="'https://avatars.githubusercontent.com/u/77301273?v=4'" />
        <CartItem :name="cart.name" :price="60" :quantity="2" :total="120"
          :url="'https://avatars.githubusercontent.com/u/77301273?v=4'" />
        <CartItem :name="cart.name" :price="60" :quantity="2" :total="120"
          :url="'https://avatars.githubusercontent.com/u/77301273?v=4'" />
      </div>

    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
export default {
    name: "CartView",
    data() {
        return {
            cartItems: [{
                    name: "Sneaker 1",
                    id: 1
                }]
        };
    },
    components: { CartItem }
}
</script>

<style>

</style>