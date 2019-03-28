<template>
<v-layout>
<v-btn :to="{name: 'dashboard'}">Dashboard</v-btn>
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
