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
    return {
      username: state.user.username || null,
      firstname: state.user.firstname || null,
      lastname: state.user.lastname || null,
      profile: state.user.profile || null,
      title: state.user.title || null,
    }
  }
}
