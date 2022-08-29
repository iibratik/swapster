<template>
    <a href="#" :class="className">
    <slot></slot>
    </a>
</template>

<script>
    export default {
        props:{
            className:{
                type:String,
                default:'btn'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn{
    padding: 13px 37px;
    color: $white;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    }
    .btn-green{
        border: 2px solid #07DBB4;
        filter: drop-shadow(0px 0px 11px #45AFC7);
        border-radius: 15px;
    }
</style>