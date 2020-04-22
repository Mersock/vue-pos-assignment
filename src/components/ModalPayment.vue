<template>
  <b-modal id="payment-modal" title="Payment" @hide="hidePaymentModal" ref="payment-modal">
    <b-container v-if="!success">
      <b-row class="modal-body-row">
        <b-col>
          <b-form-input v-model="paid" type="number" min="0" placeholder="Paid" @input.native="calChanges"></b-form-input>
        </b-col>
      </b-row
      >
      <b-row class="modal-body-row">
        <b-col>
          <b-form-input type="number" min="0" placeholder="Change" readonly :value="parseInt(change)" v-if="success === false"></b-form-input>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="payment-success" v-if="success">
        <b-alert variant="success" show>Success Alert</b-alert>
        <p>Paid: ฿{{paid}}</p>
        <p>Change: ฿{{change}}</p>
    </b-container>

    <template v-slot:modal-footer="{ cancel }">
      <div class="btn-payment-false" v-if="!success">
        <b-button size="sm" @click="showPaymentDetail" class="btn-green" v-bind:disabled="change < 0 || change === null" >
          Payment
        </b-button>&nbsp;&nbsp;
        <b-button size="sm" @click="cancel()" >
          Cancel
        </b-button>
      </div>
      <div class="success" v-if="success">
        <b-button size="sm"  to="/">
          Close
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ModalPayment',
  props: {
    netTotal: Number
  },
  data () {
    return {
      paid: null,
      change: null,
      success: false
    }
  },
  methods: {
    ...mapActions([
      'clearBasket'
    ]),
    showPaymentDetail () {
      this.success = true
      this.clearBasket()
    },
    hidePaymentModal () {
      this.paid = null
      this.change = null
    },
    calChanges (e) {
      this.change = parseInt(e.target.value) - parseInt(this.netTotal)
    }
  }
}
</script>
