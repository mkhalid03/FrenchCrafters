import Cookies from "js-cookie"
import axios from "axios"

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

export const actions = {
  async fetchProfile({ commit, state }, { jwt }) {
    const { data: profile } = await axios.get(
      `${process.env.backendUrl}/profile/${state.user.id}`,
      {
        headers: { Authorization: "Bearer " + jwt },
      }
    )
    commit("setUser", profile)
  },
  async updateProfile({ commit, state }, { jwt, body }) {
    const { data: profile } = await axios.post(
      `${process.env.backendUrl}/profile`,
      body,
      {
        headers: { Authorization: "Bearer " + jwt },
      }
    )
    commit("setUser", profile)
  },
}

export const getters = {
  getUserInfo: (state) => {
    if (!state.user) {
      return {}
    }
    return {
      username: state.user.username || null,
      firstName: state.user.firstname || null,
      lastName: state.user.lastname || null,
      picture: state.user.picture || null,
      title: state.user.title || null,
    }
  },
}
