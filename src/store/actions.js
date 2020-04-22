export default {
  addBook: ({ commit }, payload) => {
    commit('addBook', payload)
  },
  clearBasket: ({ commit }) => {
    commit('clearBasket')
  },
  updateBook: ({ commit }, payload) => {
    commit('updateBook', payload)
  }
}
