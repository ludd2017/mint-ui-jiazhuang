<template>
  <!--顶部菜单-->
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="index">
      <img slot="icon" v-if="'index'==selected" src="../assets/images/home2.png">
      <img slot="icon" v-else="true" src="../assets/images/home.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="scene">
      <img slot="icon" v-if="'scene'==selected" src="../assets/images/pic2.png">
      <img slot="icon" v-else="true" src="../assets/images/pic.png">
      场景
    </mt-tab-item>
    <mt-tab-item id="category">
      <img slot="icon" v-if="'category'==selected" src="../assets/images/Category2.png">
      <img slot="icon" v-else="true" src="../assets/images/Category.png">
      分类
    </mt-tab-item>
    <mt-tab-item id="showroom">
      <img slot="icon" v-if="'showroom'==selected" src="../assets/images/store2.png">
      <img slot="icon" v-else="true" src="../assets/images/store.png">
      展厅
    </mt-tab-item>
    <mt-tab-item id="mine">
      <img slot="icon" v-if="'mine'==selected" src="../assets/images/account2.png">
      <img slot="icon" v-else="true" src="../assets/images/account.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  import {Tabbar, TabItem} from 'mint-ui';

  export default {
    name: "tabbar",
    data() {
      return {
        selected: 'index'
      }
    },
    watch: {
      selected: function (val, oldVal) {
        //console.log('new: %s, old: %s', val, oldVal)
        this.$router.push(val)
      },
      $route: function (val, oldVal) {
        //this.selected=val
        //console.log(val)
        //console.log(oldVal)
        this.setSelectVal()
      },
    },
    created() {
      this.setSelectVal()
    },
    methods: {
      setSelectVal() {
        let path = this.$route.path
        let matchPath = this.$route.path.substring(path.lastIndexOf('/') + 1)
        if ('index' == matchPath || 'mine' == matchPath) {
          this.selected = matchPath
        }
      }
    }
  }
</script>

<style scoped>

</style>
