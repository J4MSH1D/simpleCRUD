import { computed } from "vue";
import store from "../store"

export function gettingUsers(){
    store.dispatch("getUsers");
    const users = computed(()=> store.state.users)
    return { users }
}