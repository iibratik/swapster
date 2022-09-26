<template>
<main class="main">
    <div class="main__container">
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
import ProjectsWrties from '@/components/ProjectWrites/ProjectsWrties';
export default {
    components: {
        MainBenefits,
        MainAppFunctions,
        MainSupportedAssets,
        ProjectsWrties,
    }
}

</script>