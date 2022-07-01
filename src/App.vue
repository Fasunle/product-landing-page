<template>

  <div class="container mx-auto">
    <NavBar />
    <Home/>
  </div>

</template>

<script>

  import NavBar from './components/NavBar.vue' 
  import Home from './components/Home.vue' 


  export default {
    name: 'App',
    components: {
      Home,
      NavBar
    }
  }
</script>

<style>
  /* #app{} */
</style>
