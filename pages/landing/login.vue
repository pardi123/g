<template>
    <v-container fluid>
        <v-row justify="center" v-if="window === true">

             <v-col cols="12" xs="12" sm="12" md="6">
                <v-card color="transparent"   elevation="0" class="pl-16 d-flex justify-center ">
                    <v-img
                       :src="require('@/static/values-2.png')"
                         max-height="450"
                         max-width="400"
                         class="mr-7 pt-15"
                         
                    >

                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="5" :class="margin">
                <v-card color="bg"   elevation="1" :class="margin">
                    <v-card-title class="text-h4 text--text" >
                       Daftar   
                    </v-card-title>
                    <v-form
                     ref="form"
                     lazy-validation
                     class="pl-4 pr-4"
                    >
                   
             <SignIn />

                <p class="text-center mt-4 pb-5">Belum Punya Akun ..? <a @click="doRegister">Daftar</a> </p>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
        <v-layout wrap class="mx-4" v-else> 
        <v-flex xs12>
            <v-img :src="require('@/static/values-2.png')" max-width="240" class="ma-auto mt-10 mb-5" />

        </v-flex>
        <v-flex xs12>
             <SignIn />

        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import SignIn from '@/components/material/SignIn.vue';

export default {
    layout: 'landingPage',
    components: {SignIn},
    computed: {
        currentUser(){
        return this.$store.state.user
      }
    },

    data: () => ({
        margin: '',
      email: '',
            password: '',
            showPassword: false,
            isLoading: false,
            window: true,
    }),
    created() {
                this.checkAuth();

    },
    mounted(){
        this.onResponsiveInverted();
        window.addEventListener("resize",this.onResponsiveInverted);
    },
    methods: {
        onResponsiveInverted(){
            if(window.innerWidth < 991){
                this.margin = 'ml-2 mt-2';
                this.window = false
            } else{
                this.margin = 'ml-5 pt-5'
                this.window = true;
            }
        },
                doLogin(){
            this.isLoading = true
            console.warn('Login!')

        },
        doRegister(){
            console.warn('Register!')
        },
        checkAuth(){
            if(this.currentUser != false){
                window.location = '/'
            }
        }
    }
}
</script>

<style>

</style>