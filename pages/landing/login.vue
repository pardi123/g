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
                      <v-alert
                        dense
                        outlined
                        type="error"
                        class="ml-4 mr-4"
                        :value="alert"
                    >
                        Email Atau Passowrd  <strong>salah</strong> 
                     </v-alert>
                    <v-card-title class="text-h4 text--text" >
                       Login    
                    </v-card-title>
                    <v-form
                     ref="form"
                     lazy-validation
                     class="pl-4 pr-4"
                    >
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
                <v-btn  
                    block color="primary" 
                    @click="doLogin" 
                    :disabled="isLoading"
                    :loading="isLoading"
                  >Login</v-btn>
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
                 <v-alert
                        dense
                        outlined
                        type="error"
                        :value="alert"
                    >
                        Email Atau Passowrd  <strong>salah</strong> 
                     </v-alert>
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
                                                <v-btn  
                    block color="primary" 
                    @click="doLogin" 
                    :disabled="isLoading"
                    :loading="isLoading"
                  >Login</v-btn>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import {mapActions,mapState} from 'vuex';


export default {
    layout: 'landingPage',
    computed: {
        currentUser(){
        return this.$store.state.auth.user
      },
        users(){
            return this.$store.state.users.users
        }
    },

    data: () => ({
        margin: '',
      email: '',
      alert: false,
            password: '',
            showPassword: false,
            isLoading: false,
            window: true,
            email: '',
            test: ''
    }),
    created() {
                this.checkAuth();

    },
    mounted(){
        this.onResponsiveInverted();
        window.addEventListener("resize",this.onResponsiveInverted);
        this.fecthUser();
        this.local();
    },
    methods: {
        ...mapActions({
            fecthUser: 'users/fecthUser',
            login: 'auth/login',
        }),
        local(){
            if(localStorage.users){
                this.test = localStorage.users
            }
        },
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
            this.alert =false
            this.isLoading = true
           const user = this.users.filter(email => email.email === this.email);
           if (user.length > 0) {
                if(user[0].password === this.password){
                    const param = {
                        email: user[0].email,
                        nama: user[0].namaPemilik
                    }
                    this.login(param)
                    this.$router.push('/')
                    
                }
                else
                {
                    this.isLoading = false
                    this.alert = true
                    this.email = ''
                    this.password = ''
                }
           }
           else{
                 this.isLoading = false
                    this.alert = true
                    this.email = ''
                    this.password = ''
           }
      

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