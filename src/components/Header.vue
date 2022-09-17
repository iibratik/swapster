<template>
    <header class="header">
        <Navbar/>
        <HeaderContent/>
    </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import HeaderContent from '@/components/header/Header-Wallet.vue';


export default {
    components: { Navbar, HeaderContent },
}
</script>
