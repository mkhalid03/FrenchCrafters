export default function ({ store, redirect }) {
  if (store.state.auth.user === undefined || store.state.auth.user === null) {
    return redirect("/login")
  }
}
