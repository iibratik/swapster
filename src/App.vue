<template>
    <div class="wrapper">
        <Header />
    </div>
</template>

<script>

import Header from "@/components/Header.vue"

export default {
    name:'home',
    components: {
        Header,
    },
    data(){
        return{
            userLang:"",
        }
    },

    }

</script>
<style>

</style>
