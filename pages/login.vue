<template>
  <div>
    <v-container>
        <h1>Welcome <span v-if="currentUser"> {{ currentUser.email }}</span></h1>
        
    <v-card class="py-5"> 
        <SignIn />
    </v-card>
    </v-container>

  </div>
</template>

<script>
import SignIn from '../components/SignIn.vue';

import {mapGetters} from 'vuex';

export default {
    computed: {
      currentUser(){
        return this.$store.state.user
      }
  },
    components: {SignIn},

}
</script>

<style>

</style>