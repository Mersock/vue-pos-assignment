<template>
  <div>
    <b-container>
      <b-row v-for="(bookItem,j) in getBooks" :key="j">
        <b-col v-for="(book,i) in bookItem" :key="i">
          <b-card
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            width="20px"
          >
            <b-img thumbnail fluid :src="book.cover" alt="Image 1"></b-img>
            <b-card-text>
              {{book.title}}
            </b-card-text>
            <b-button href="#"  class="btn-green">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getBooks'
    ])
  }
}
</script>
