<template>
  <b-modal id="payment-modal" title="Payment">
    <b-container >
      <b-row class="modal-body-row">
        <b-col>
          <b-form-input v-model="paid" type="number" min="0" placeholder="Paid"></b-form-input>
        </b-col>
      </b-row
      >
      <b-row class="modal-body-row">
        <b-col>
          <b-form-input type="number" min="0" placeholder="Change" readonly :value="change"></b-form-input>
        </b-col>
      </b-row>
    </b-container>

    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button size="sm" @click="ok()" class="btn-green" v-bind:disabled="change < 0">
        Payment
      </b-button>
      <b-button size="sm" @click="cancel()">
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalPayment',
  props: {
    netTotal: Number
  },
  data () {
    return {
      paid: null,
      change: null
    }
  },
  updated () {
    this.change = this.paid - this.netTotal
  }
}
</script>
