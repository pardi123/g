<template>
  <v-navigation-drawer 
    absolute
    right
    app
    v-model="inputValue"
    mobile-breakpoint="911"
    persistent
    width="260"
  >
      
  </v-navigation-drawer>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
    props: {
        opened: {
            type: Boolean,
            default: false,
        }
    },
        computed: {
        inputValue: {
            get(){
                return this.$store.state.app.draweLanding;
            },
            set(val){
                this.setDraweLanding(val);
            },
        }
    },
    
    methods: {
        ...mapMutations('app', ['setDraweLanding', 'toggleDrawerLanding']),
    }
}
</script>

<style>

</style>