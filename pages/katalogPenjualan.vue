<template>
      <v-container fluid>
        <material-card color="green" title="Katalog Penjualan" text="Katalog Penjualan">
                 <v-row justify="center">
                    <v-col cols="6">
                           <v-date-picker
                                v-model="dates"
                                range
                                @change="getKatalogDate"
                            ></v-date-picker>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="dateRangeText"
                            label="Date range"
                            prepend-icon="mdi-calendar"
                            readonly
                            
                        ></v-text-field>
                        <v-btn @click="downloadSalesReport()" color="green" dark>
                            Rekapan Penjualan dari {{ dates[0] }} sampai {{ dates[1] }} 
                        </v-btn>
                    </v-col>
                </v-row>
               <v-data-table
                            :headers="headers"
                            :items="dataKatalog"
                            sort-by="namaBarang"
                            class="elevation-1"
                            :loading="dataLoading"  
                            loading-text="Loading... Please wait"
                            id="pdf"

                >
                     <template v-slot:item.hargaBarang="{item}">
                                {{ changeRupiah(item.hargaBarang) }}
                    </template>
                    <template v-slot:item.jumlahHarga="{item}">
                                {{ changeRupiah(item.jumlahHarga) }}
                     </template>
              </v-data-table> 
              
        </material-card>
    </v-container>   
</template>

<script>
import {mapActions,mapState} from 'vuex';
import jspdf from 'jspdf'
import autoTable from 'jspdf-autotable'
export default {
      middleware: 'auth',

    computed: {
        dateRangeText () {
                return this.dates.join(' ~ ')
        },
        dataKatalog(){
            return this.$store.state.katalog.dataKatalog
        },
        dataLoading(){
            return this.$store.state.katalog.dataLoading
        },
        emailUser(){
            return this.$store.state.user
        }
    },
    data: () => ({
        date: '',
        dates: [],
        headers: [
         
            { text: 'Kode Barang', value: 'kodeBarang'},
            { text: 'Nama Barang', value: 'namaBarang' },
            { text: 'Jumlah Barang', value: 'jumlahBarang'},
            {text: 'Harga Barang',value: 'hargaBarang',sortable: false,},
            {text: 'total Harga',value: 'jumlahHarga',sortable: false,},
            {text: 'Satuan', value: 'satuan'},
            {text: 'Date', value: 'date'},

        ],
    }),
    mounted(){
        this.getDataKatalog();
        this.changeData();
    },
    methods: {
        ...mapActions({
            fecthKatalog : 'katalog/fecthKatalog',
            katalogDate: 'katalog/katalogDate',

        }),
        getDataKatalog(){
            var date = new Date();
            this.date = date.toLocaleDateString();
                let param = {
                date: this.date,
                email: this.emailUser.email
            }
            this.fecthKatalog(param)
        },
        downloadSalesReport(){
            const doc = new jspdf();
            doc.text('Toko Pardi',10,10);
            doc.text('Rekapan Penjualan',5,30);
            doc.text(`${this.dates[0]} Sampai ${this.dates[1]}`,5,40)
            doc.line(0,35,400,35)
            doc.autoTable({
                head: [
                    ['No','Kode Barang','Nama Barang','Jumlah Barang', 'Harga Barang', 'Total Harga','Satuan']
                ],
                body: this.changeData(),
                margin: {
                    top:50,
                }
            })
            doc.save(`Rekapan Penjualan ${this.dates[0]} sampai ${this.dates[1]}`)
        },
        changeData(){
            let katalog = [];
            let totalSales = 0;
            for(let i=0; i< this.dataKatalog.length; i++){
                let jumlahHarga = this.dataKatalog[i].jumlahBarang * this.dataKatalog[i].hargaBarang;
                let harga = this.changeRupiah(this.dataKatalog[i].hargaBarang)
                let data = [i+1,this.dataKatalog[i].kodeBarang, this.dataKatalog[i].namaBarang, this.dataKatalog[i].jumlahBarang, harga, this.changeRupiah(jumlahHarga), this.dataKatalog[i].satuan]
                totalSales = totalSales +jumlahHarga
                katalog.push(data)
            };
                let dataTotal = ['','','','','Total Pendapatan',this.changeRupiah(totalSales)]
                katalog.push(dataTotal)
            return katalog

        },
        getKatalogDate(){
             if(this.dates === []){
                 var date = new Date();
                 this.date = date.toLocaleDateString();
                     let param = {
                     date: this.date,
                     email: this.emailUser.email
                     }
                 this.fecthKatalog(param)
             }
             else {
                 var date1 = new Date(this.dates[0])
                 var date2 = new Date(this.dates[1])
                 let dateConvert1 = date1.toLocaleDateString()
                 let dateConvert2 = date2.toLocaleDateString()
                 let param = {
                     date1: dateConvert1,
                     date2: dateConvert2,
                     email: this.emailUser.email
                 }
               
                 this.katalogDate(param)
                console.log(param)
             }
      
            
        },
         changeRupiah(item){
            return new Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' }).format(item)

        },
        printPdf(){
            
            frame.Window.print();
        }
        
    }
}
</script>

<style>

</style>