<template>
  <b-container id="app">
      <Nav/>
      <router-view />
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
