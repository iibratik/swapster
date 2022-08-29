<template>
    <nav class="header__nav">
        <div class="bg" :class="{active: burger}" @click=" burger = false"></div>
        <div class="header__nav-logo">
            <a href="#!"><img src="@/assets/images/logo.png" alt="" class="logo"></a>
        </div>
        <div class="burger" :class="{active: burger}">
        <ul class="header__nav-menu">
            <li v-for="link in getMenuList" :key="link.id"><a href="#!" class="header__nav-link">{{link.title}}</a></li>
        </ul>
        <div class="header__nav-block">
            <div class="header__nav-translation">

                <h3 class="header__nav-lang" @click="changeLang" :class="{active: ruActive}">ru</h3>
                <p class="header__nav-lang">|</p>
                <h3 class="header__nav-lang" @click="changeLang" :class="{active: enActive}">en</h3>
            </div>
            <a href="#!" class="header__nav-signin">
                Присоединиться
            </a>
        </div>
        </div>
        <button @click="burger = !burger" class="header__nav-btn">burger</button>
    </nav>
</template>

<script>

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
