<template>
    <div class="wrapper">
        <Header />
        <p>{{userLang}}</p>
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
    // mounted:{
    //     userLanguage(){
    //         if (window.navigator.language === 'en-US') {
    //             localStorage.setItem("lang","en")
    //         }else if(window.navigator.language === 'ru-Ru') {
    //             localStorage.setItem("lang","ru")
    //         }
    //         return this.userLang = window.navigator.language
    //     }
    // }
}

</script>
<style>

</style>
