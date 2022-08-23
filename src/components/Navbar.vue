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
                <h3 class="header__nav-lang">
                    <span @click="changeLang">ru</span>
                     |
                    <span @click="changeLang"> en</span>
                    </h3>
                <h3 class="header__nav-lang" @click="ruActive = true; enActive=false" :class="{active: ruActive}">ru</h3>
                <p class="header__nav-lang">|</p>
                <h3 class="header__nav-lang" @click="enActive = true; ruActive=false" :class="{active: enActive}">en</h3>
            </div>
            <a href="#!" class="header__nav-signin">
                Присоединиться
            </a>
        </div>
    </nav>
</template>

<script>

export default {
    data(){
        return {
            ruActive:true,
            enActive: false,

        }
    },
    computed: {
        getMenuList(){
            return this.$store.getters.getMenuList
        }
    },

    methods:{

    }

}

</script>
