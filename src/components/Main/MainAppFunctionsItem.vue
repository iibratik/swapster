<template lang="pug">
.main__functions-item
    .main__functions-top(:class="{fourth: item.fourth}")
        img(:src="require(`@/assets/images/icons/main/${item.icon}`)")
        h2.main__functions-title {{item.title}}
    p.main__functions-text {{item.text}}
</template>

<script>


export default {
    props:{
        item:Object,
    }
}
</script>