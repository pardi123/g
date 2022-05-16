export default {
    fecthKatalog(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.query({
            query: require('~/graphql/query/katalog.gql').getkatalog,
            variables: {
                date: param.date,
                email: param.email
            }
        }).then(response => {
            store.commit('setDataKatalog', response.data.product_sold);
        }).catch(error => {
            console.log(error)
        })
    },
    katalogDate(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.query({
            query: require('~/graphql/query/katalog.gql').getKatalogDate,
            variables: {
                date1: param.date1,
                date2: param.date2,
                email: param.email,
            }
        }).then(response => {
            store.commit('setDataKatalog', response.data.product_sold);
        }).catch(error => {
            console.log(error)
        })
    }
}