<template>
  <b-modal id="checkout-modal" size="lg" title="Checkout">
    <b-container class="bv-example-row">
      <b-row v-for="item in basketItem" :key="item.id">
        <b-col>
          <b-img :src="item.cover" rounded="circle" width="70px" hight="70px"></b-img>
        </b-col>
        <b-col>{{item.title}}</b-col>
        <b-col>{{item.quantity}}</b-col>
        <b-col>{{item.priceTotal}}</b-col>
      </b-row>
    </b-container>

    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="success" @click="ok()">
        Payment
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModalCheckout',
  data () {
    return {
      basketItem: []
    }
  },
  computed: {
    ...mapState([
      'basketBookItem'
    ])
  },
  created () {
    this.basketItem = this.basketBookItem
  }
}
</script>
