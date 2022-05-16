<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="8" >
            <v-card>
                    <v-card-title class="headline">
                        Sign Up {{readData}}
                    </v-card-title>
                    
                      <v-form
                           ref="form"
                           v-model="valid"
                           lazy-validation
                           class="mx-5"
                     
                       >
                           <v-text-field
                                 v-model="name"
                           :counter="10"
                           label="Name"
                           required
                           ></v-text-field>

                           <v-text-field
                           v-model="address"
                           label="E-mail"
                           required
                        ></v-text-field>

                       
                   

                           <v-btn
                           :disabled="!valid"
                           color="success"
                           class="mr-4"
                           @click="postData"
                           >
                           Validate
                           </v-btn>
                              <v-btn
                           :disabled="!valid"
                           color="primary"
                           class="mr-4"
                           @click="readData"
                           >
                           read
                           </v-btn>

                         
                       </v-form>

            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            name: '',
            address: '',

        }
    },
    methods: {

        async postData(){
             const productRef =this.$fire.firestore
                .collection('tugas-altera')
                .doc('product')
            try {
                await productRef.set({
                        description: "TEST",
                        name:this.name,
                        photoURL:this.address,
                        price: 10
                })
            }
            catch(error){
                alert(error)
                return
            }
         
        },
        async readData(){
          
            const productRef = this.$fire.firestore
            .collection('tugas-altera')
            .doc('product')
            try{
                const snapshot = await productRef.get()
                const doc = snapshot.data()
                if(!doc){
                    alert('Document does not exist.')
                    return
                }
                alert(doc)
                console.log
            }
            catch(error){
                alert(error)
            }
    
        },
    }
}
</script>

<style>

</style>