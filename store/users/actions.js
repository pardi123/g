export default {
    fecthUser(store) {
        let client = this.app.apolloProvider.defaultClient
        client.query({
            query: require('~/graphql/query/users.gql').getUSer
        }).then(response => {
            store.commit('setUser', response.data.users)

        }).catch(error => {
            console.error(error)
        })

    },
    addUSer(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.mutate({
            mutation: require('~/graphql/mutations/users.gql').addUSer,
            variables: {
                email: param.email,
                password: param.password,
                namaPemilik: param.namaPemilik,
                namaToko: param.namaToko,
            }
        }).then(response => {
            store.commit('addUser', response.data.insert_users.returning[0])
        })
    }
}