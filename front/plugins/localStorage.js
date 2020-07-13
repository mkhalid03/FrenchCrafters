import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'frenchcrafters',
    paths: ['cart', 'auth']
  })(store)
}
