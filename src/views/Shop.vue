<template>
  <div class="shop">
    <BookList />
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue'

export default {
  name: 'Shop',
  components: {
    BookList
  },
  data () {
    return {}
  }
}
</script>
