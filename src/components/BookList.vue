<template>
  <div>
    <b-row>
      <b-col
        v-for="(book,index) in books"
        :key="index"
      >
        <b-card
          title="Card Title"
          :img-src="`${book.cover}`"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{book.title}}
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    books: Array
  }
}
</script>
