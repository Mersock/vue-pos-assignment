<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <img src="../assets/logo.png" class="d-inline-block align-top" alt="Kitten">
      <b-navbar-brand href="#">
        Little Brown Book
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">Shop</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/basket">Basket </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-button class="btn-green" size="sm" v-b-modal.checkout-modal>
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
    <Modal />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Modal from '@/components/ModalCheckout'

export default {
  computed: {
    ...mapState([
      'basketTotal'
    ])
  },
  components: {
    Modal
  },
  methods: {
    ...mapActions([
      'clearBasket'
    ])
  }
}
</script>
