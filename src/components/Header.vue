<template>
    <header class="header">
        <Navbar/>
    </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';

export default {
    components: { Navbar },
    computed:{
        ...mapGetters(["getLang"])
    }
}
</script>
