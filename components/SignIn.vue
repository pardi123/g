<template>
    <div id="firebaseui-auth-container">

    </div>
</template>

<script>
export default {
    mounted(){
        const firebaseui =require("firebaseui");
        require("firebaseui/dist/firebaseui.css");

        const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(this.$fire.auth);

        const config = {
            signInOptions: [
                this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
                this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            signInSuccessUrl: '/',
            callback:{
                signInSuccessWithAuthResult(){
                    console.log('Successfully signed in')
                    window.location = '/';
                }
            }

        }
        ui.start('#firebaseui-auth-container',config);
    }
}
</script>

<style>

</style> 