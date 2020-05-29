export const state = () => ({
  orders: [],
})

export const mutations = {
  setOrders(state, orders) {
    state.orders = orders
  },
}

export const actions = {
  async fetchOrders({ commit, state }, { jwt }) {
    const orders = await this.$axios.$get(`/profile/me/orders`, {
      headers: { Authorization: "Bearer " + jwt },
    })
    commit("setOrders", orders)
  },
}

export const getters = {
  getOrders: (state) => {
    return state.orders
  },
}
