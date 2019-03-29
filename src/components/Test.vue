<template>
<v-layout>
<v-btn :to="{name: 'dashboard'}">Dashboard</v-btn>
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
