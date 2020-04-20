<template>
  <div class="shop">
    <BookList :books="books"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookList from '@/components/BookList.vue'

export default {
  components: {
    BookList
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'books'
    ])
  }
}
</script>
