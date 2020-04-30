export default function ({ store, redirect }) {
  if (store.state.auth.user === undefined) {
    return redirect("/login")
  }
}
