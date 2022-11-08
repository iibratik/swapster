<template lang="pug">
section.project-writes
    .project-writes-title
        h2.title О проекте пишут
        .project-writes-btns
            button.slider-btn(@click="slideMoveLeft")
                i.fa-solid.fa-arrow-left
            button.slider-btn(@click="slideMoveRight")
                i.fa-solid.fa-arrow-right
    .project-writes-slider
        .project-writes-wrapper(:style="{transform:`translateX(-${(currentSlide * projectSliders.length)*4}%)`}")
            ProjectWritesSlide(
                v-for="slide in projectSliders"
                :slideItem="slide"
                :key="slide.id"
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
                currentSlide:0,
                projectSliders:[
                    {companyName:"Название компании",body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"CompanyLogo-slide.svg", link:'#', id:1},
                    {companyName:"Название компании",body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"CompanyLogo-slide.svg", link:'#', id:2},
                    {companyName:"Название компании",id:3, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:4, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"CompanyLogo-slide.svg", link:'#'},
                    {companyName:"Название компании",id:5, body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....', companyImg:"CompanyLogo-slide.svg", link:'#'},
                ],
                sliderWidth:1,
                sliderSlice:0,
            }
        },
        mounted(){
            const slider = document.querySelector('.project-writes-wrapper');
            this.sliderWidth = slider.clientWidth;
            this.sliderSlice = this.sliderWidth/(this.projectSliders.length);
            setInterval(() => {
                this.slideMoveRight()
            }, 2000);
        },
        methods:{
            slideMoveLeft(){
                setTimeout(() => {
                    if (this.currentSlide > 0) {
                        this.currentSlide--
                    }else{
                        this.currentSlide = (this.projectSliders.length-1)/2
                    }
                }, 2000);
            },
            slideMoveRight(){
                    if (this.currentSlide < this.projectSliders.length/2) {
                        this.currentSlide++
                    }else{
                        this.currentSlide= 0
                    }
            }
        }
    }
</script>
