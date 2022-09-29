<template lang="pug">
.project-slide
    .project-slide-img
        img(:src="require(`@/assets/images/slider-img/${slideItem.companyImg}`)")
        span.project-slide-company-name {{slideItem.companyName}}
    .project-slide-body
        p.project-slide-title {{slideItem.body}}
        a.project-slide-link(:href="slideItem.link") Читать далее
            img(src="@/assets/images/slider-img/arrow-right.svg")


</template>

<script>
    export default {
        props:{
            slideItem:{
                typeof: Object,
                require: true
            }
        }
    }
</script>
