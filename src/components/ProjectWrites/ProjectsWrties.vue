<template lang="pug">
section.project-writes
    .project-writes-title
        h2.title О проекте пишут
        .project-writes-btns
            button.slider-btn.btn-slide-prev()
                i.fa-solid.fa-arrow-left
            button.slider-btn.btn-slide-next()
                i.fa-solid.fa-arrow-right
    swiper.project-writes-slider(
    :slides-per-view="2"
    :space-between="50"
    :navigation="{prevEl:'.btn-slide-prev', nextEl:'.btn-slide-next'}"
    :modules="modules"
    )
        swiper-slide(
                v-for="slide in projectSliders"
                :key="slide.id")
            ProjectWritesSlide(:slideItem="slide")
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from "swiper";
import ProjectWritesSlide from '@/components/ProjectWrites/ProjectWritesSlide.vue'
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  components: {
    ProjectWritesSlide,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      projectSliders: [
        {
          companyName: 'Название компании',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
          companyImg: 'CompanyLogo-slide.svg',
          link: '#',
          id: 1,
        },
        {
          companyName: 'Название компании',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
          companyImg: 'CompanyLogo-slide.svg',
          link: '#',
          id: 2,
        },
        {
          companyName: 'Название компании',
          id: 3,
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
          companyImg: 'CompanyLogo-slide.svg',
          link: '#',
        },
        {
          companyName: 'Название компании',
          id: 4,
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
          companyImg: 'CompanyLogo-slide.svg',
          link: '#',
        },
        {
          companyName: 'Название компании',
          id: 5,
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
          companyImg: 'CompanyLogo-slide.svg',
          link: '#',
        },
      ],
    }
  },
  setup(){
    return {
      modules: [Navigation],
    };
  }
//   setup() {
//     const onSwiper = (swiper) => {
//       console.log(swiper)
//     }
//     const onSlideChange = () => {
//       console.log('slide change')
//     }
//     return {
//       onSwiper,
//       onSlideChange,
//     }
//   },
})
</script>
