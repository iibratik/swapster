<template lang="pug">
.main__benefits-item
    img(:src="require(`@/assets/images/icons/${item.icon}`)")
    h2.main__benefits-title {{item.title}}
    p.main__benefits-text {{item.text}}
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>
