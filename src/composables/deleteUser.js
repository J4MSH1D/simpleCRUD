import store from "../store"

export function deleteUser(user) {
    store.dispatch("deleteUser", user)
}