<template>
  <div>
      <b-row v-for="(bookItem,j) in getBooks" :key="j">
        <b-col v-for="(book,i) in bookItem" :key="i" class="d-flex card-item">
          <b-card
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 flex-fill"
          >
            <b-img thumbnail fluid :src="book.cover" alt="Image 1"></b-img>
            <b-card-text>
              {{book.title}}
            </b-card-text>
            <b-card-text><strong>฿ {{commasPrice(book.price)}}</strong></b-card-text>
            <b-button class="btn-green" @click="addBasket(book.id)"><b-icon icon="plus"></b-icon>&nbsp;Add to Basket</b-button>
          </b-card>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import { numberWithCommas } from '@/utils/index'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'addBook'
    ]),
    addBasket (bookId) {
      const payload = this.books.find(book => {
        return book.id === bookId
      })
      this.addBook(payload)
    },
    commasPrice (number) {
      return numberWithCommas(number)
    }
  },
  computed: {
    ...mapGetters([
      'getBooks'
    ]),
    ...mapState([
      'books'
    ])
  }
}
</script>
