<template>
    <nav class="header__nav">
        <div class="header__nav-logo">
            <a href="#!"><img src="@/assets/images/logo.png" alt="" class="logo"></a>
        </div>
        <ul class="header__nav-menu">
            <li v-for="link in getMenuList" :key="link.id"><a href="#!" class="header__nav-link">{{link.title}}</a></li>
        </ul>
        <div class="header__nav-block">
            <div class="header__nav-translation">
                <h3 class="header__nav-lang" @click="ruActive = true; enActive=false" :class="{active: ruActive}">ru</h3>
                <p class="header__nav-lang">|</p>
                <h3 class="header__nav-lang" @click="enActive = true; ruActive=false" :class="{active: enActive}">en</h3>
            </div>
            <a href="#!" class="header__nav-signin">
                Присоединиться
            </a>
        </div>
        <button class="header__nav-btn" @click="burger = !burger"><img src="@/assets/images/icons/menu.svg" alt=""></button>
        <div class="header__nav-burger" :class="{active: burger}">
            <ul class="header__nav-menu nav-burger">
                <li v-for="link in getMenuList" :key="link.id"><a href="#!" class="header__nav-link">{{link.title}}</a></li>
            </ul>
        <a href="" class="header__nav-signin">Присоединиться</a>
        </div>
<<<<<<< HEAD
        <button @click="burger = !burger" class="header__nav-btn">burger</button>
=======
>>>>>>> 9d31ae2a1572f92c7c6fcc12c672e5a2521b1820
    </nav>
</template>

<script>

import { mapGetters } from "vuex"

export default {
    data(){
        return {
            ruActive:true,
            enActive: false,
            burger: false,
        }
    },
    computed: {
        ...mapGetters(["getMenuList"])
    },
    created() {

    },
    methods: {
    }
}

</script>