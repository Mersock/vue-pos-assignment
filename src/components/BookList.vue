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
            <b-card-text><strong>฿ {{book.price}}</strong></b-card-text>
            <b-button class="btn-secondary" @click="deleteBasket(book.id)">-</b-button>&nbsp;&nbsp;
            <b-button class="btn-green" @click="addBasket(book.id)">+</b-button>
          </b-card>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'addBook', 'updateBook', 'deleteBook'
    ]),
    addBasket (bookId) {
      const payload = this.books.find(book => {
        return book.id === bookId
      })
      const index = this.basketBookItem.findIndex(book => book.id === bookId)
      if (index === -1) {
        this.addBook(payload)
      } else {
        let { quantity } = this.basketBookItem[index]
        quantity += 1
        const itemTotal = 1
        this.updateBook({ quantity, itemTotal, index })
      }
    },
    deleteBasket (bookId) {
      const index = this.basketBookItem.findIndex(book => book.id === bookId)
      if (typeof this.basketBookItem[index] === 'undefined') return false
      let { quantity } = this.basketBookItem[index]
      quantity -= 1
      const itemTotal = 1
      this.deleteBook({ quantity, itemTotal, index })
    }
  },
  computed: {
    ...mapGetters([
      'getBooks'
    ]),
    ...mapState([
      'books', 'basketBookItem'
    ])
  }
}
</script>
