<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader },
}
</script>

<style lang="scss">
@import "@/assets/sass/typography.scss";
@import "@/assets/sass/reset.scss";

body {
    background: #dcdde1;
    font-family: 'Ubuntu', sans-serif;
    font-size: calcRem(16px);
}
</style>