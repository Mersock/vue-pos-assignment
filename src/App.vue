<template>
  <b-container>
    <div id="app">
      <Nav/>
      <router-view />
    </div>
  </b-container>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
a {
  font-weight: bold;
  color: #000000;

  &.router-link-exact-active {
    color: #42b983;
  }
}
a:hover{
  font-weight: bold;
  color: #8E5842;
}
</style>
