<template>
  <mt-header fixed :title="barName" class="header">
    <router-link to="" slot="left">
      <mt-button @click.native="goBack" icon="back"></mt-button>
    </router-link>
    <router-link to="/index" slot="right">
      <mt-button icon=""><img src="../assets/images/personalCenter.png" class="per"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
  export default {
    name: "header-bar",
    props: ['barName'],
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }

  }
</script>

<style scoped>

  .header {
    background-color: black;
    z-index: 99999;
    height:1.71rem;
  }

  .per {
    width: 1rem;
  }

</style>
