<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" lg="3" sm="6"> 
          <material-stats-card
            color="green"
            icon= "mdi-book"
            title= "Total Pendapatan"
            value= "Rp.10.000.000" 
            sub-icon= "mdi-book"
            sub-text = "24 hari" 
            />

        </v-col>
       
         
             <v-col cols="12" lg="3" sm="6"> 
          <material-stats-card
            color="info"
            icon= "mdi-store"
            title= "Penjualan"
            value= "Rp.10.000.000,00" 
            sub-icon= "mdi-calendar"
            sub-text = "24 hari" 
            />

        </v-col>

                    <v-col cols="12" lg="12">
                <material-card color="orange" title="Produk Toko" >
                    <v-data-table :headers="headers" :items="allProduct" hide-default-footer />
                </material-card>
            </v-col>
    </v-row>
  </v-container>

</template>

<script>
import {mapActions,mapState} from 'vuex';

export default {

  name: 'IndexPage',
    middleware: 'auth', 
    computed: {
         allProduct(){
            
            return this.$store.state.products.allProduct
        },
        emailUser(){
            return JSON.parse(localStorage.getItem("users"))
        }

    },

  data: () => ({
               headers: [
         
            { text: 'Kode Barang', value: 'kodeBarang'},
            { text: 'Nama Barang', value: 'namaBarang' },
            { text: 'Jumlah Barang', value: 'jumlahBarang'},
            {text: 'Harga Barang',value: 'harga_barang',sortable: false,},
            {text: 'Satuan', value: 'satuan'},
            {text:'Action',value: 'Action',sortable:false,},
        ],
          

  }),
mounted(){
this.getProducts();
},
  methods: {
        ...mapActions({
             setlocalStorage: 'auth/setlocalStorage',
             fecthProducts: 'products/fecthProducts',
             
        }),  
        getProducts(){
             let param = {
                 status: false,
                 email: this.emailUser.email,
             }
            this.fecthProducts(param);
                  

        },
   
  }
}
</script>
