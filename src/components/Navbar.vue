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

                <h3 class="header__nav-lang" @click="changeLang" :class="{active: ruActive}">ru</h3>
                <p class="header__nav-lang">|</p>
                <h3 class="header__nav-lang" @click="changeLang" :class="{active: enActive}">en</h3>
            </div>
            <green-btn href="#!" :className="'header__nav-signin'">
                Lang.en.btnJoin
            </green-btn>
        </div>
        <button class="header__nav-btn" @click="burger = !burger"><img src="@/assets/images/icons/menu.svg" alt=""></button>
        <div class="header__nav-burger" :class="{active: burger}">
            <ul class="header__nav-menu nav-burger">
                <li v-for="link in getMenuList" :key="link.id"><a href="#!" class="header__nav-link">{{link.title}}</a></li>
            </ul>
        <a href="" class="header__nav-signin">Присоединиться</a>
        </div>
        <button @click="burger = !burger" class="header__nav-btn">burger</button>
    </nav>
</template>

<script>

import { mapGetters } from "vuex"

export default {
    data(){
        return {
            ruActive: localStorage.getItem('lang') === 'ru'? true : false,
            enActive: localStorage.getItem('lang') === 'en'? true : false,

            ruActive:true,
            enActive: false,
            burger: false,
        }
    },
    computed: {
        getMenuList(){
            return this.$store.getters.getMenuList
        }
        // getLang(){}
    },
    methods:{
        changeLang(){
            if (localStorage.getItem('lang') == "en") {
                this.ruActive = false;
                this.enActive = true;
                localStorage.setItem('lang', 'ru')
            }else {
                localStorage.setItem('lang', 'en')
                this.enActive = false;
                this.ruActive = true;

            }

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
