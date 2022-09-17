<template lang="pug">
section.main__benefits
    h2.title Еще преимущества
    .main__benefits-block
        MainBenefitsItem(
            v-for="item in getBenefitsList" 
            :key="item.id"
            :item="item")
</template>



<script>

import MainBenefitsItem from "@/components/Main/MainBenefitsItem.vue";
import {mapGetters} from "vuex"

export default {
    components: {
        MainBenefitsItem, 
    },
    computed: {
        ...mapGetters(["getBenefitsList"])
    }
}

</script>