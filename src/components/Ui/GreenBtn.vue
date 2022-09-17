<template>
    <a href="#" class="btn btn-green">
    <slot></slot>
    </a>
</template>

<script>
    export default {
        name:'green-btn',
    }
</script>

<style lang="scss">
    @import '@/assets/styles/common/common.scss';
    .btn{
    padding: 13px 37px;
    color: $white;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    }
    .btn-green{
        border: 2px solid $lightGreen;
        filter: drop-shadow(0px 0px 11px #45AFC7);
        border-radius: 15px;
        &:hover{

        }
    }
</style>