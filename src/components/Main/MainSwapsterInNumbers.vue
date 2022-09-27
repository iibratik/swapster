<template>
    <section class="main__number">
        <h2 class="main__number-title title">
            Swapster в цифрах
        </h2>
        <div class="main__number-items">
            <MainSwapsterInNumbersItems
            v-for="item in getNumbersItems"
            :key="item.key"
            :item="item"/>
        </div>
    </section>
</template>

<script>

import MainSwapsterInNumbersItems from "@/components/Main/MainSwapasterInNumbersItem.vue"
import {mapGetters} from "vuex"

export default {
    components:{
        MainSwapsterInNumbersItems
    },
    computed: {
        ...mapGetters(["getNumbersItems"])
    }
}
</script>

<style>

</style>