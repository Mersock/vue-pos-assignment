<template>
  <b-container class="bv-example-row">
    <b-row v-for="(item, index) in basketBookItem" :key="index" class="items">
      <b-col>
        <b-img :src="item.cover" rounded="circle" width="70px" hight="70px"></b-img>
      </b-col>
      <b-col>{{item.title}}</b-col>
      <b-col>
        <b-form-input :id="`index-${index}`" type="number" min="0" :value="item.quantity"></b-form-input>
      </b-col>
      <b-col>{{item.priceTotal}}</b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Basket',
  computed: {
    ...mapState([
      'basketBookItem'
    ])
  }
}
</script>
