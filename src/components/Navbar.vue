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
                    <span>ru</span>
                     |
                    <span> en</span>
                    </h3>
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
            
        }
    },
    computed: {
        getMenuList(){
            return this.$store.getters.getMenuList
        }
    }
}

</script>