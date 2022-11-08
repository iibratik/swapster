<template>
  <div class="main__number-item">
    <div class="main__number-border">
      <div class="main__number-card">
          <img :src="require(`@/assets/images/icons/main/${item.icon}`)" alt="" class="main__number-icon">
          <p class="main__number-num">{{ item.number }}</p>
          <h3 class="main__number-title text">{{ item.title }}</h3>
      </div>
    </div>
    <p class="main__number-text-out small-text-v2">{{ item.descr }}</p>
  </div>
</template>

<script>
export default {
    props:{
        item:Object
    }

}
</script>

<style>

</style>