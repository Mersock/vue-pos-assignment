<template>
  <b-container class="bv-example-row">
    <b-row v-for="(item, index) in basketBookItem" :key="index" class="items">
      <b-col>
        <b-img :src="item.cover" rounded="circle" width="70px" hight="70px"></b-img>
      </b-col>
      <b-col>{{item.title}}</b-col>
      <b-col>x{{item.quantity}}</b-col>
      <b-col><strong>{{item.priceTotal}}</strong></b-col>
    </b-row>
    <b-row v-if="basketBookItem.length > 0" class="check-out-items">
      <b-col cols="9" class="text-right">Discount</b-col>
      <b-col cols="3"><strong>{{summaryDiscount()}}</strong></b-col>
    </b-row>
    <b-row v-if="basketBookItem.length > 0" class="check-out-items">
      <b-col cols="9" class="text-right">Net</b-col>
      <b-col cols="3"><strong>{{summaryNetPrice()}}</strong></b-col>
    </b-row>
    <b-row v-if="basketBookItem.length > 0" class="check-out-items">
      <b-col cols="9" class="text-right"></b-col>
      <b-col cols="3">
        <b-button v-b-modal.payment-modal class="btn-green">Payment</b-button>
      </b-col>
    </b-row>
    <Modal :netTotal="summaryNetPrice()"/>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '@/components/ModalPayment.vue'

export default {
  name: 'Basket',
  components: {
    Modal
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'basketBookItem'
    ])
  },
  methods: {
    summaryDiscount () {
      const discountItems = this.basketBookItem.map(item => item.discount)
      const sumDiscount = (a, b) => a + b
      return discountItems.reduce(sumDiscount, 0)
    },
    summaryNetPrice () {
      const netTotalItems = this.basketBookItem.map(item => item.netTotal)
      const sumNetTotal = (a, b) => a + b
      return netTotalItems.reduce(sumNetTotal, 0)
    }
  }
}
</script>
