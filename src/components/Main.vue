<template>
<main class="main">
    <div class="main__container">
        <MainBenefits />
        <MainSupportedAssets />
        <MainAppFunctions />
        <MainSwapsterInNumbers />
    </div>
</main>
</template>

<script>

import MainBenefits from "@/components/Main/MainBenefits.vue";
import MainAppFunctions from "@/components/Main/MainAppFunctions.vue";
import MainSupportedAssets from "@/components/Main/MainSupportedAssets.vue";
import MainSwapsterInNumbers from "@/components/Main/MainSwapsterInNumbers.vue";

export default {
    components: {
        MainBenefits,
        MainAppFunctions,
        MainSupportedAssets,
        MainSwapsterInNumbers
    }
}

</script>