<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <img src="../assets/logo.png" class="d-inline-block align-top" alt="Kitten">
      <b-navbar-brand to="/">
        Little Brown Book
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-button class="btn-green" size="sm" to="/basket" v-bind:disabled="basketTotal === 0">
              <b-icon icon="bag-fill"></b-icon>&nbsp;
              <b-badge variant="light">{{basketTotal}} <span class="sr-only"></span></b-badge>
            </b-button>&nbsp;
            <b-button variant="secondary" size="sm" @click="clearBasket">
              <b-icon icon="trash-fill"></b-icon>&nbsp;
              Clear Basket
            </b-button>
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'basketTotal'
    ])
  },
  methods: {
    ...mapActions([
      'clearBasket'
    ])
  }
}
</script>
