<template>
  <v-app-bar id="core-app-bar" app color="transparent" class="px-6" flat height="60" dark>
      <v-container class="py-0 fill-height">
        <v-toolbar-title class="link--text font-weight-bold align-self-center mr-10" >
            <span>Kasirku</span>
          
        </v-toolbar-title>   
  
    <v-spacer></v-spacer>
          <v-btn
            v-for="link in links"
            :key="link.to"
            text
            color="link"
            v-if="!responsive"
            @click="routerPush(link.to)"
        >
            {{ link.title }}
        </v-btn>
    <v-btn icon dark color="link" v-if="responsive" @click.stop="onClick">
        <v-icon>mdi-view-list</v-icon>
    </v-btn>
      </v-container>

  </v-app-bar>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    data: () => ({
        links: [
          {title: 'Home' , to: '/landing'},
          {title: 'About' , to: '/landing/about'},
          {title: 'Daftar' , to: '/landing/register'},
          {title: 'Login' , to: '/landing/login'},
        ],
        responsive: false,
    }),
    mounted(){
        this.onResponsiveInverted();
        window.addEventListener("resize",this.onResponsiveInverted);
    },
    methods: {
         ...mapMutations('app', ['setDraweLanding', 'toggleDrawerLanding']),
            onClick(){
                this.setDraweLanding(!this.$store.state.app.draweLanding);
            },

           onResponsiveInverted(){
            if(window.innerWidth < 991){
                this.responsive = true;
            } else{
                this.responsive = false;
                this.setDraweLanding(false)
            }
        },
        routerPush(to){
            this.$router.push(to)
        }
    }
}
</script>

<style>

</style>