<template>
    <nav class="header__nav">
        <div class="header__nav-logo">
            <a href="#!"><img src="@/assets/images/logo.png" alt="" class="logo"></a>
        </div>
            <ul class="header__nav-menu desctop-block">
                <li v-for="link in getMenuList" :key="link.id"><a href="#!" class="header__nav-link">{{link.title}}</a></li>
            </ul>
            <div class="header__nav-block desctop-block">
                <div class="header__nav-translation">
                    <h3 class="header__nav-lang" @click="switchingLang('ru'), changeLang()" :class="{active:ruActive}">ru</h3>
                    <p class="header__nav-lang">|</p>
                    <h3 class="header__nav-lang" @click="switchingLang('en'),changeLang()" :class="{active:enActive}">en</h3>
                </div>
                <green-btn href="#">
                    {{$store.state.btnJoin}}
                </green-btn>
            </div>
            <button @click="burger = !burger" class="header__nav-burger"><i class="fa-solid fa-bars"></i></button>
            <transition name="nav-burger">
                <div class="mobile-block" v-if="burger">
                    <ul class="header__nav-menu mobile-nav">
                        <li v-for="link in getMenuList" :key="link.id"><a href="#!" class="header__nav-link">{{link.title}}</a></li>
                    </ul>
                    <div class="header__nav-block mobilde-nav">
                        <div class="header__nav-translation">
                            <h3 class="header__nav-lang" @click="switchingLang('ru'), changeLang()" :class="{active:ruActive}">ru</h3>
                            <p class="header__nav-lang">|</p>
                            <h3 class="header__nav-lang" @click="switchingLang('en'),changeLang()" :class="{active:enActive}">en</h3>
                        </div>
                        <green-btn href="#">
                            {{$store.state.btnJoin}}
                        </green-btn>
                    </div>
                </div>
            </transition>

    </nav>
</template>

<script>
import { mapMutations} from 'vuex'

export default {
    data(){
        return {
            ruActive: this.$store.state.currentActiveLang == 'ru',
            enActive: this.$store.state.currentActiveLang == 'en',
            burger: false,
        }
    },
    computed: {
        getMenuList(){
            return this.$store.getters.getMenuList
        },
    },
    methods:{
        ...mapMutations(['switchingLang']),
        changeLang(){
            if (this.ruActive) {
                this.ruActive = false
                this.enActive = true
            }else{
                this.enActive = false
                this.ruActive= true
            }

        }
    },
    watch(){
        this.ruActive,
        this.enActive
    },
    created(){
        }

}
</script>