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
