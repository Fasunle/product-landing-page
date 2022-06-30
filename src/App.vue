<template>

  <div class="container mx-auto sm:px-1 md:px-8 lg:px-15">
    <NavBar />
  </div>

  </template>

<script>

  import NavBar from './components/NavBar.vue' 


  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>

<style>
  /* GLOBAL STYLE */
  #app {
    font-size: 1.15rem;
  }

</style>
