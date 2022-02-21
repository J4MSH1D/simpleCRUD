import store from "../store"
export function addUser(data) {
    store.dispatch("addUser", data)
}
