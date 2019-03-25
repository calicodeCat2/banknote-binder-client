<template>
<v-layout>
<v-btn :to="{name: 'About'}">About</v-btn>
<v-btn :to="{name: 'dashboard'}">Dashboard</v-btn>
<v-btn :to="{name: 'CollectionAdd'}">Collection add</v-btn>
<v-btn :to="{name: 'CollectionView'}">Collection view</v-btn>
<v-btn :to="{name: 'WantListAdd'}">Want list add</v-btn>
<v-btn :to="{name: 'WantListView'}">Want list view</v-btn>
<v-btn :to="{name: 'region'}">Select region</v-btn>
<v-btn :to="{name: 'select'}">select country</v-btn>
</v-layout>
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
