import { cleanUser } from "~/helpers"

export const state = () => ({
  user: {
    email: ""
  }
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  logout(state) {
    state.user = null
    localStorage.removeItem("jwt")
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
  async updateProfile({ commit, state }, { jwt, body }) {
    const profile = await this.$axios.$post("/profile/update", body, {
      headers: { Authorization: "Bearer " + jwt },
    })
    commit("setUser", profile)
  }
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
      email: state.user.email || null,
    }
  },
  getUserId: (state) => {
    return state.user ? state.user.id : null
  },
}
