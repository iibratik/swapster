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
    created(){
            if (window.navigator.language === 'en-US') {
                localStorage.setItem("lang","en")
            }else if(window.navigator.language === 'ru-Ru') {
                localStorage.setItem("lang","ru")
            }
        }
    }

</script>
<style>

</style>
