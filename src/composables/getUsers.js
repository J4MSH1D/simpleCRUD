import { computed } from "vue";
import { useStore } from "vuex";

export function gettingUsers(){
    const store = useStore()
    store.dispatch("getUsers");
    const users = computed(()=> store.state.users)
    return { users }
}