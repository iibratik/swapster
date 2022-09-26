<template>
<main class="main">
    <div class="main__container">
        <MainImportant />
        <MainBenefits />
        <MainSupportedAssets />
        <MainAppFunctions />
        <ProjectsWrties/>
    </div>
</main>
</template>

<script>

import MainBenefits from "@/components/Main/MainBenefits.vue";
import MainAppFunctions from "@/components/Main/MainAppFunctions.vue";
import MainSupportedAssets from "@/components/Main/MainSupportedAssets.vue";
import MainImportant from "@/components/Main/MainImportant.vue"
import ProjectsWrties from '@/components/ProjectWrites/ProjectsWrties';
export default {
    components: {
        ProjectsWrties,
        MainBenefits,
        MainAppFunctions,
        MainSupportedAssets,
        MainImportant,
    }
}

</script>