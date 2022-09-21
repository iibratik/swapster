<template>
    <div class="bg glov-bg">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'glov-bg'
    }
</script>

<style lang="scss" scoped>
    .bg{
        max-width: 460px;
        width: 100%;
        height: 460px;
        position: absolute;
        z-index: -1;
    }
    .glov-bg{
        background: rgb(247, 0, 255);
        filter: blur(327px);
    }
</style>