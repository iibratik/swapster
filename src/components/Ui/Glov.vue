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
    }
    .glov-bg{
        background: rgba(171, 0, 251, 0.7);
        filter: blur(327px);
    }
</style>