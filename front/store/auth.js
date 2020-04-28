import Cookies from "js-cookie"

export const state = () => {}

export const mutations = {
  setUser(state, user) {
    state.user = user
    Cookies.set("user", user)
  },
  logout(state) {
    state.user = null
    Cookies.set("user", null)
  },
}

export const getters = {
  getUserInfo: (state) => {
    if(!state.user) {
      return {}
    }
    return {
      username: state.user.username || null,
      firstName: state.user.firstname || null,
      lastName: state.user.lastname || null,
      profile: state.user.profile || null,
      title: state.user.title || null,
    }
  }
}
