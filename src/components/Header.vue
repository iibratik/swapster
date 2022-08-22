<template>
    <header class="header">
<<<<<<< HEAD
        <Navbar/>
=======
        <Navbar />
>>>>>>> e31c458dc85bf3292dbcc1087201bf8111927eed
    </header>
</template>

<script>
import Navbar from './Navbar.vue';

import Navbar from "@/components/Navbar.vue"

export default {
<<<<<<< HEAD
    components: { Navbar },
        computed:{
        userLang(){
            var userLang = navigator.language || navigator.userLanguage;
            console.log(userLang);
        }
=======
    components : {
        Navbar,
>>>>>>> e31c458dc85bf3292dbcc1087201bf8111927eed
    }
}


</script>