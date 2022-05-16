<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" xs="12" sm="12" md="5" :class="margin">
                <v-card color="bg"   elevation="0" :class="margin">
                    <v-card-title class="text-h4 text--text" >
                       Tentang Aplikasi
                    </v-card-title>
                    <v-card-text>
                        Aplikasi kasir membantu anda dalam mengatasi penjualan dan fitur dalam aplikasi ini ada keranjang katalog penjualan, katalog produk , dan laporan bisa dicetak


                    </v-card-text>
                </v-card>
            </v-col>
             <v-col cols="12" xs="12" sm="12" md="6">
                <v-card color="transparent"   elevation="0" class="pl-16 d-flex justify-center">
                    <v-img
                       :src="require('@/static/features-3.png')"
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