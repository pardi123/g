export default function({ store, redirect }) {

    if (!store.state.user) {
        console.log("in MiddleWare");
        redirect("/landing/login");
    }
}