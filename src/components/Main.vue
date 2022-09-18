<template>
<main class="main">
    <div class="main__container">
        <MainBenefits />
        <MainAppFunctions />
    </div>
</main>
</template>

<script>

import MainBenefits from "@/components/Main/MainBenefits.vue";
import MainAppFunctions from "@/components/Main/MainAppFunctions.vue";

export default {
    components: {
        MainBenefits,
        MainAppFunctions
    }
}

</script>