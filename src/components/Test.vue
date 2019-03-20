<template>

 

    <v-dialog max-width="600px">
        <v-btn flat slot="activator" class="success">Add New</v-btn>
        <v-card>
            <v-card-title>
        
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Title" v-model="title">

                    </v-text-field>
                    <v-textarea label="Info" v-model="info">

                    </v-textarea>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>


 
</template>


<script>
export default {
    data () {
        return {
            title: '',
            info: ''

        }
    }
};
</script>

<style scoped>
</style>
