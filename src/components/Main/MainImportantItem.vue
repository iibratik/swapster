<template lang="pug">
.main__important-item
    .main__important-icon 
        img(:src="require(`@/assets/images/icons/main/${item.icon}`)")
    .main__important-info
        h2.main__important-title {{item.title}}
        p.main__important-descr {{item.descr}}
</template>

<script>

export default {
    props: {
        item:Object
    }
}
</script>
