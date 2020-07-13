import {verifyCartContent} from "~/helpers/cart";

const defaultState = () => ({
  items: [],
  price: 0,
  numberOfItems: 0,
  owner: null
})

export const state = () => defaultState()

export const mutations = {
  reset(state) {
    state.items = []
  },
  add(state, item) {
    const record = state.items.find(
      (i) => i.id === item.id && i.selectedSize === item.selectedSize
    )

    if (!record) {
      state.items.push({
        quantity: 1,
        ...item,
      })
    } else {
      record.quantity++
    }
  },
  remove(state, item) {
    const record = state.items.find((i) => i.id === item.id)

    if (record.quantity > 1) {
      record.quantity--
    } else {
      const index = state.items.findIndex((i) => i.id === item.id)
      state.items.splice(index, 1)
    }
  },
  setOwner(state, item){
    state.owner = item
  }
}

export const actions = {
  setOwner({ commit }, payload) {
    commit('setOwner', payload)
  },
  resetCart({ commit }) {
    commit('reset')
  }
}

export const getters = {
  items: (state) => {
    return state.items
  },
  validatedContent: (state) => {
    return getters => verifyCartContent(state.items, getters)
  },
  price: (state) => {
    return (
      Math.round(
        state.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ) * 100
      ) / 100
    )
  },
  numberOfItems: (state) => {
    return state.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    )
  },
  getOwner: (state) => {
    return state.owner
  }
}
