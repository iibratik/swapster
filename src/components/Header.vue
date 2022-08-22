<template>
    <header class="header">
        <Navbar/>
    </header>
</template>

<script>

import Navbar from "@/components/Navbar.vue"

export default {
    components: { Navbar },
    computed:{
        userLang(){
            var userLang = navigator.language || navigator.userLanguage;
            console.log(userLang);
        }
    }
}


</script>
