export default function ({ store, redirect }) {
  console.log(store.state)
  if (store.state.auth.user !== null) {
    return redirect("/")
  }
}