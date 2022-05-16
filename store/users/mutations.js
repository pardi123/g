export default {
    setUser(state, param) {
        state.users = param;
    },
    addUser(state, param) {
        state.users.push(param);
    }
}