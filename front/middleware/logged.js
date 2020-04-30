export default function ({ store, redirect }) {
  if (store.state.auth.user !== null && store.state.auth.user !== undefined) {
    return redirect("/")
  }
}
