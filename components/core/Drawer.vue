<template>
    <v-navigation-drawer
        id="app-drawer"
        v-model="inputValue"
        :src="image"
        app
        color="grey darken-2"
        dark
        floating
        mobile-breakpoint="911"
        persistent
        width="260"
    >
        <template v-slot:img="attrs">
            <v-img v-bind="attrs" gradient="to top, rgba(0,0,0, .7), rgba(0,0,0, .7)" />
        </template>

        <v-list-item two-line>

            <v-list-item-title class="title">
                Kasirku
            </v-list-item-title>
        </v-list-item>
        <v-divider class="mx-3 mb-3" />

        <v-list nav>
            <div />
            <v-list-item v-for="(link,i) in links" :key="i" :to="link.to" active-class="primary white--text">
                <v-list-item-action>
                    <v-icon>
                        {{ link.icon }}
                    </v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="link.text" />
            </v-list-item>
        </v-list>
        
        <template v-slot:append>
            <v-list nav>
                <v-list-item to="#">
                    <v-list-item-action>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-action>

                    <v-list-item-title class="font-weight-light" @click="signOut">Sign Out</v-list-item-title>
                </v-list-item>
            </v-list>
        </template>
    </v-navigation-drawer>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
export default {
    props: {
        opened: {
            type: Boolean,
            default: true,
        }
    },
    data: () => ({
        links: [
            {
                to: '/',
                icon: 'mdi-view-dashboard',
                text: 'Dashboard',
            },
            {
                to: '/katalogPenjualan',
                icon: 'mdi-store',
                text: 'Katalog Penjualan',
            },
            {
                to: '/products',
                icon: 'mdi-store',
                text: 'Product',
            },
            {
                to: '/kasir',
                icon: 'mdi-cash-register',
                text: 'Kasir',
            },

        ],
    }),
    computed: {
        ...mapState('app', ['image','color']),
        inputValue: {
            get(){
                return this.$store.state.app.drawer;
            },
            set(val){
                this.setDrawer(val);
            },
        }
    },
    methods: {
        ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
        signOut(){
            this.$store.dispatch('auth/logout');
            window.location="/landing/login"
        }
   }
}
</script>

<style>

</style>