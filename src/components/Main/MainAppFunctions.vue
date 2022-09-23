<template lang="pug">
section.main__functions
    h2.title  Функции приложения
    .main__functions-block
        MainAppFunctionsItem(
        v-for="item in getAppFunctionsList" 
        :key="item.id"
        :item="item")
</template>

<script>

import MainAppFunctionsItem from "@/components/Main/MainAppFunctionsItem.vue";
import {mapGetters} from "vuex"

export default {
    components:{
        MainAppFunctionsItem
    },
    computed: {
        ...mapGetters(["getAppFunctionsList"])
    }
}
</script>

<style>

</style>