<template lang="pug">
footer.footer
    .footer__container
        .footer__up
            a.footer__up-logo
                img(src="@/assets/images/logo.png")
            .footer__up-start
                a.footer__up-gmail(href="mailto:business@swapster.tech")
                    img(src="@/assets/images/icons/mail.svg")
                    span business@swapster.tech
                a.footer__up-btn(href="#!")
                    span Запустить Swapster
                    img(src="@/assets/images/icons/arrow.svg")
        .footer__middle
            ul.footer__middle-menu
                li(v-for="link in getFooterMenuList" :key="link.id")
                    a.footer__middle-link(href="#!") {{link.title}}
            .footer__middle-actives
                h2.footer__middle-title Активы
                ul.footer__middle-menu 
                    li(v-for="link in getFooterMenuCurrenty" :key="link.id")
                        a.footer__middle-link(href="#!") {{ link.title }}
            .footer__middle-block
                ul.footer__middle-menu 
                    li
                        a.footer__middle-link(href="#!") Криптовалюты
                    li
                        a.footer__middle-link(href="#!") Заработок криптовалют
                    li
                        a.footer__middle-link(href="#!") Криптобезопастность
                    li
                        a.footer__middle-link(href="#!") Криптоновости
                .footer__middle-social
                    h2.footer__middle-link Подпишитесь на нас
                    .footer__middle-icons
                        a.footer__middle-icon(href="#!" v-for="icon in getFooterMenuIcons" :key="icon.id")
                            img(:src="require(`@/assets/images/icons/${icon.icon}`)")
        .footer__bottom
            ul.footer__bottom-menu 
                li 
                    a.footer__bottom-link(href="#!") Поддержка
                li 
                    a.footer__bottom-link(href="#!") Политика конфиденциальности
                li 
                    a.footer__bottom-link(href="#!") Условия использования
            p.footer__bottom-copyright  © 2022 Swapster
</template>

<script>

import {mapGetters} from "vuex";

export default {
    computed:{
        ...mapGetters(["getFooterMenuList", "getFooterMenuCurrenty", "getFooterMenuIcons"])
    }
}

</script>