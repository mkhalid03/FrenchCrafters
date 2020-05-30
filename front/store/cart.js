import Cookies from "js-cookie"
import { cleanProductArray } from "~/helpers"

const defaultState = () => ({
  items: [],
  price: 0,
  numberOfItems: 0,
})

export const state = () => defaultState()

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  reset(state) {
    state.items = []
    Cookies.remove("cart")
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
    console.log(state.items)
    console.log(cleanProductArray(state.items))
    Cookies.set("cart", cleanProductArray(state.items))
  },
  remove(state, item) {
    const record = state.items.find((i) => i.id === item.id)

    if (record.quantity > 1) {
      record.quantity--
    } else {
      const index = state.items.findIndex((i) => i.id === item.id)
      state.items.splice(index, 1)
    }
    Cookies.set("cart", cleanProductArray(state.items))
  },
}

export const getters = {
  items: (state) => {
    return state.items
  },
  price: (state) => {
    return (
      Math.round(
        state.items.reduce(
          (accumulator, item) => accumulator + item.price * item.quantity,
          0
        ) * 100
      ) / 100
    )
  },
  numberOfItems: (state) => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    )
  },
}
