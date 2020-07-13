export default function ({ store, redirect }) {
  if (store.state.auth.user && store.state.auth.user?.email !== '') {
    return redirect("/")
  }
}
