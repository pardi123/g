<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" xs="12" sm="12" md="5" :class="margin">
                <v-card color="transparent"   elevation="0" :class="margin">
                    <v-card-title class="text-h4 text--text" >
                        Selamat Datang Di Kasirku
                    </v-card-title>
                    <v-card-text>
                        Aplikasi kasir adalah aplikasi yang Lebih mudah memantau penjualan dari mana saja untuk mengurangi kecurangan ,Laporan keuangan yang dapat ditarik
                        secara otomatis, jadi tidak menyita waktu,Kelola stok udah gak bikin encok karena bisa cek ketersediaan barang sambil rebahan.


                    </v-card-text>
                </v-card>
            </v-col>
             <v-col cols="12" xs="12" sm="12" md="6">
                <v-card color="transparent"   elevation="0" class="pl-16 d-flex justify-center">
                    <v-img
                       :src="require('@/static/hero-imgg.png')"
                         max-height="450"
                         max-width="400"
                    >

                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: 'landingPage',
    data: () => ({
        margin: '',
    }),
    mounted(){
        this.onResponsiveInverted();
        window.addEventListener("resize",this.onResponsiveInverted);
    },
    methods: {
        onResponsiveInverted(){
            if(window.innerWidth < 991){
                this.margin = 'ml-2 mt-2';
            } else{
                this.margin = 'ml-5 mt-15'
            }
        }
    }
}
</script>

<style>

</style>