<template lang="pug">
section.project-writes
    .project-writes-title
        h2.title О проекте пишут
        .project-writes-btns
            button.slider-btn
                i.fa-solid.fa-arrow-left
            button.slider-btn
                i.fa-solid.fa-arrow-right
    .project-writes-slider
        ProjectWritesSlide(
            v-for="slide in projectSliders"
            :key="slide.id"
            :slideItem="slide"
        )
</template>

<script>
import ProjectWritesSlide from '@/components/ProjectWrites/ProjectWritesSlide'
    export default {
        components:{
            ProjectWritesSlide
        },
        data(){
            return{
                projectSliders:[
                    {companyName:"Название компании",body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#', id:1},
                    {companyName:"Название компании",body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#', id:2},
                    {companyName:"Название компании",id:3, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:4, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:5, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:6, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:7, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:8, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:9, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:10, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:11, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:12, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"@/assets/images/slider-img/CompanyLogo-slide.svg", link:'#'},
                ]
            }
        }
    }
</script>
