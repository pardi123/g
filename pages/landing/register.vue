<template>
    <v-container fluid>
        <v-row justify="center" v-if="window === true">

             <v-col cols="12" xs="12" sm="12" md="6">
                <v-card color="transparent"   elevation="0" class="pl-16 d-flex justify-center ">
                    <v-img
                       :src="require('@/static/features-3.png')"
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
                    <v-alert
                        dense
                        outlined
                        type="error"
                        class="ml-4 mr-4"
                        :value="alert"
                    >
                        Akun  <strong>Telah Terdaftar</strong> 
                     </v-alert>
                     <v-alert
                        dense
                        outlined
                        type="error"
                        class="ml-4 mr-4"
                        :value="alertPassword"
                    >
                        Password  <strong>Tidak Sama</strong> 
                     </v-alert>

                    <v-form
                     ref="form"
                     lazy-validation
                     class="pl-4 pr-4"
                    >
                    <v-text-field 
                    outlined 
                    label="Nama Pemilik"
                    :disabled="isLoading"
                    :loading="isLoading"
                    v-model="namaPemilik"
                ></v-text-field>
                    <v-text-field 
                    outlined 
                    label="Nama Toko"
                    :disabled="isLoading"
                    :loading="isLoading"
                    v-model="namaToko"

                ></v-text-field>
                <v-text-field 
                    outlined 
                    label="Email"
                    :disabled="isLoading"
                    :loading="isLoading"
                    v-model="email"
                ></v-text-field>
                <v-text-field 
                     outlined label="Password" 
                    :type="showPassword ? 'text' : 'password' "
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' " 
                      :disabled="isLoading"
                    :loading="isLoading"
                    @click:append="showPassword = !showPassword"
                    v-model="password"
                ></v-text-field>
                        <v-text-field 
                     outlined label="Konfirmasi Password" 
                    :type="showConfirmPassword ? 'text' : 'password' "
                    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off' " 
                      :disabled="isLoading"
                    :loading="isLoading"
                    @click:append="showConfirmPassword = !showConfirmPassword"
                    v-model="confirmPassword"
                ></v-text-field>
                                <v-btn  
                    block color="primary" 
                    @click="doRegister" 
                    :disabled="isLoading"
                    :loading="isLoading"
                  >Daftar</v-btn>
                <p class="text-center mt-4 pb-5">Udah Punya Akun..? <a @click="toLogin">Login</a> </p>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
        <v-layout wrap class="mx-4" v-else> 
        <v-flex xs12>
            <v-img :src="require('@/static/features-3.png')" max-width="240" class="ma-auto mt-10 mb-5" />

        </v-flex>
        <v-flex xs12>
                 <v-alert
                        dense
                        outlined
                        type="error"
                        class="ml-4 mr-4"
                        :value="alert"
                    >
                        Akun  <strong>Telah Terdaftar</strong> 
                     </v-alert>
                       <v-alert
                        dense
                        outlined
                        type="error"
                        class="ml-4 mr-4"
                        :value="alertPassword"
                    >
                        Password  <strong>Tidak Sama</strong> 
                     </v-alert>
            <v-form ref="loginForm"> 
                    <v-text-field 
                    outlined 
                    label="Nama Pemilik"
                    :disabled="isLoading"
                    :loading="isLoading"
                    v-model="namaPemilik"
                ></v-text-field>
                    <v-text-field 
                    outlined 
                    label="Nama Toko"
                    :disabled="isLoading"
                    :loading="isLoading"
                    v-model="namaToko"
                ></v-text-field>
                <v-text-field 
                    outlined 
                    label="Email"
                    :disabled="isLoading"
                    :loading="isLoading"
                    v-model="email"
                ></v-text-field>
                <v-text-field 
                     outlined label="Password" 
                    :type="showPassword ? 'text' : 'password' "
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' " 
                      :disabled="isLoading"
                    :loading="isLoading"
                    @click:append="showPassword = !showPassword"
                    v-model="password"
                ></v-text-field>
                        <v-text-field 
                     outlined label="Konfirmasi Password" 
                    :type="showConfirmPassword ? 'text' : 'password' "
                    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off' " 
                      :disabled="isLoading"
                    :loading="isLoading"
                    @click:append="showConfirmPassword = !showConfirmPassword"
                    v-model="confirmPassword"
                ></v-text-field>
                <v-btn  
                    block color="primary" 
                    @click="doRegister" 
                    :disabled="isLoading"
                    :loading="isLoading"
                  >Daftar</v-btn>
                <p class="text-center mt-4 pb-5">Udah Punya Akun ..? <a @click="toLogin">Login</a> </p>
            </v-form>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import {mapActions,mapState} from 'vuex';

export default {
    layout: 'landingPage',
    computed: {
        users(){
            return this.$store.state.users.users
        }
    },
    data: () => ({
        margin: '',
      email: '',
            password: '',
            alert: false,
            alertPassword: false,

            showPassword: false,
            showConfirmPassword: false,
            isLoading: false,
            window: true,
            namaPemilik: '',
            namaToko: '',
            email: '',
            password: '',
            confirmPassword: '',
    }),
    mounted(){
        this.onResponsiveInverted();
        window.addEventListener("resize",this.onResponsiveInverted);
        this.fecthUser();
    },
    methods: {
        ...mapActions({
            fecthUser: 'users/fecthUser',
            addUSer: 'users/addUSer',
        }),

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
            this.alert = false
            this.alertPassword = false
          let user = this.users.filter(email => email.email === this.email)
          if(user.length > 0){
              this.alert = true
          }
          else{
              if (this.password === this.confirmPassword) {
               
              const param = {
                    namaPemilik: this.namaPemilik,
                    namaToko: this.namaToko,
                    email: this.email,
                    password:this.password,
                }   
                this.addUSer(param)
                this.$router.push('/landing/login')
            }
            else {
                this.alertPassword = true
            }
          }  
        },
        toLogin()
        {
            this.$router.push('/landing/login')
        }
    }
}
</script>

<style>

</style>