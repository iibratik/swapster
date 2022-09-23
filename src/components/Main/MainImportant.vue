<template lang="pug">
section.main__important
    .main__important-left
        img(src="@/assets/images/main/main__important-img.png")
    .main__important-right
        h2.title Самое важное
        .main__important-block
            MainImportantItem(
            v-for="item in getImportantList" 
            :key="item.id"
            :item="item")

</template>

<script>

import MainImportantItem from "@/components/Main/MainImportantItem.vue";
import { mapGetters } from "vuex";
export default {
    components:{
        MainImportantItem,
    },
    computed: {
        ...mapGetters(["getImportantList"])
    }

}
</script>