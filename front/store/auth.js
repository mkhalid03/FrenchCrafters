import Cookies from "js-cookie"
import { cleanUser } from "~/helpers"

export const state = () => {}

export const mutations = {
  setUser(state, user) {
    state.user = cleanUser(user)
    Cookies.set("user", cleanUser(user))
  },
  logout(state) {
    state.user = null
    Cookies.remove("user")
    Cookies.remove("jwt")
    this.app.router.push('/')
  },
}

export const actions = {
  async fetchProfile({ commit, state }, { jwt }) {
    const profile = await this.$axios.$get(`/profile/me`, {
      headers: { Authorization: "Bearer " + jwt },
    })
    commit("setUser", profile)
  },
  async updateProfile({ commit, state }, { jwt, body, userId }) {
    console.log(body.get("files").size !== 0)
    if (body.get("files").size !== 0) {
      body.append("ref", "user")
      body.append("refId", userId)
      body.append("field", "picture")
      body.append("source", "users-permissions")
      await this.$axios.$post(`/upload`, body, {
        headers: { Authorization: "Bearer " + jwt },
      })
    }
    const profile = await this.$axios.$post("/profile/update", body, {
      headers: { Authorization: "Bearer " + jwt },
    })
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
  getUserId: (state) => {
    return state.user.id
  },
}
