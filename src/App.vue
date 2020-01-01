<template>
  <div id="app">

    <router-view/>
<Footer/>
  </div>
</template>


<script>
import Footer from "./../src/views/Footer";

export default {
  name: 'app',
  components: {
    Footer,
  },
 
}
</script>

<style>
body{
    margin: 0; padding: 0;
  width: 100%;
}
</style>
