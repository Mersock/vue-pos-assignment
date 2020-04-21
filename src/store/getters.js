import _ from 'lodash'

export default {
  getBooks: (state) => {
    return _.chunk(state.books, 5)
  }
}
