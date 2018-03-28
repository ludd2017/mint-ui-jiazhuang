<template>
  <div>
    <!--logo-->
    <div class="headFix">
    	<div class="logo_div">
      	<img src="../assets/logo.png" class="logo_img"/>
    	</div>
    	<div class="search">
    		<input class="searchInput" placeholder="搜索您想要的商品">
    		<img src="../assets/images/search.png" class="img_search">
    	</div>
    </div>
    <!--轮播图-->
    <div class="lbTop">
      <mt-swipe :style="{height:swipeHeightNum+'px'}" style="width: 100%;">
        <mt-swipe-item>
          <img style="width: 100%;height: 100%;"
               src="http://storage.shjhome.com:9000/case/cover/a34aa7ed54124ef0b5a28f9a51f1b9e7.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>
          <img style="width: 100%;height: 100%;"
               src="http://storage.shjhome.com:9000/case/cover/54970d00151c4e959a6ed89ca3aeea2c.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>
          <img style="width: 100%;height: 100%;"
               src="http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--功能按钮-->
    <div class="fun_in">
      <div class="radBtn">
        <div class="fun_btn">
        	<div class="fun_outimg" style="background-color:#925da3;" v-on:click="scenePage">
        		<img src="../assets/images/icon_scene.png" class="fun_inimg">
        	</div>
        	<div class="fun_text">场景</div>
        </div>
        <div class="fun_btn">
        	<div class="fun_outimg" style="background-color:#69c2b1;">
        		<img src="../assets/images/icon_furniture.png" class="fun_inimg">
        	</div>
        	<div class="fun_text">家具</div>
        </div>
        <div class="fun_btn">
        	<div class="fun_outimg" style="background-color:#5e97be;">
        		<img src="../assets/images/icon_material.png" class="fun_inimg">
        	</div>
        	<div class="fun_text">建材</div>
        </div>
      </div>
      <div class="radBtn">
        <div class="fun_btn">
        	<div class="fun_outimg" style="background-color:#eadb00;">
        		<img src="../assets/images/icon_soft .png" class="fun_inimg">
        	</div>
        	<div class="fun_text">软配</div>
        </div>
        <div class="fun_btn">
        	<div class="fun_outimg" style="background-color:#f6ac2b;">
        		<img src="../assets/images/icon_custom.png" class="fun_inimg">
        	</div>
        	<div class="fun_text">定制</div>
        </div>
        <div class="fun_btn">
        	<div class="fun_outimg" style="background-color:#b56363;">
        		<img src="../assets/images/icon_equipment.png" class="fun_inimg">
        	</div>
        	<div class="fun_text">设备</div>
        </div>
      </div>
    </div>
    <!--场景方案-->
    <div class="scene_in">
    	<span class="scene_line"></span>
    	<span class="scene_text">场景方案(实景图/效果图)</span>
    </div>
    <div class="scenes">
    <div v-on:click="clickPic" class="scene_pic">
      <mt-cell title="南京-典雅居" value="5房 120㎡">
      </mt-cell>
      <img src="http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg"
           :style="{height:heightNum+'px'}" style="width: 100%;"/>
    </div>
    <div v-on:click="clickPic"  class="scene_pic">
      <mt-cell title="南京-典雅居" value="5房 120㎡">
      </mt-cell>
      <img src="http://storage.shjhome.com:9000/case/cover/f4627b2726d74730baaad49ca2a18bf5.jpg"
           :style="{height:heightNum+'px'}" style="width: 100%;"/>
    </div>
    <div v-on:click="clickPic"  class="scene_pic">
      <mt-cell title="南京-典雅居" value="5房 120㎡">
      </mt-cell>
      <img src="http://storage.shjhome.com:9000/case/cover/d46a1e98a156419da972ee403cc87fb9.jpg"
           :style="{height:heightNum+'px'}" style="width: 100%;"/>
    </div>
    </div>
    <!--底部按钮-->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import {Swipe, SwipeItem, Search} from 'mint-ui'
  import Tabbar from '../components/Tabbar'

  export default {
    name: "index",
    data() {
      return {
        heightNum: 300,
        swipeHeightNum: 250,
        value: ''
      }
    },
    created() {
      //初始化轮播图高度
      let clientWidth = document.documentElement.clientWidth
      this.heightNum = (clientWidth / 1.3).toFixed(2)
      this.swipeHeightNum = (clientWidth / 1.8).toFixed(2)
    },
    components: {
      Tabbar
    },
    watch: {
      value: function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
      },
    },
    methods: {
      clickPic() {
        console.log(this)
        this.$router.push('/scene-detail/9528')
      },
      scenePage(){
        this.$router.push('/scene')
      }
    },

  }
</script>

<style scoped>
	.headFix{
		position:fixed;
		top:0;
		height:1.71rem;
		background-color: #fff;
		width:100%;
		z-index: 99999;
	}
	.lbTop{
		margin-top: 1.71rem;
    padding-bottom: 0.18rem;
    background-color: #f2f2f2;
	}
  .radBtn {
    display: flex;
    width: 100%;
    text-align: center;
  }

  .radBtn div {
    display: block;
    flex: 1;
  }
  .logo_div{
  	float: left;
  }
  .logo_img{
  	width:4rem;
  }
  .search{
  	float: right;
  	width:11rem;
  	margin-top:0.1rem;
  	position:relative;
  }
  .searchInput{
  	width:9rem;
  	height:1rem;
  	outline: none;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding:0 0.3rem;
    color:#CCCCCC;
  }
  .img_search{
  	position: absolute;
    top: 0.3rem;
    right: 1.5rem;
    width: 0.9rem;
  }
  .fun_in{
  	padding: 0.375rem 0.5rem;
  	font-size:0.7rem;
  }
  .fun_btn{

  }
  .fun_outimg{
    border-radius: 50px;
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
  .fun_inimg{
  	width: 32px;
    margin-top: 9px;
  }
  .fun_text{
  	padding: 0.3rem;
  }
  .scenes{
  	background-color: #f2f2f2;
  }
  .scene_in{
  	padding: 0.15rem 0;
  	font-size:0.7rem;
  	position:relative;
  }
  .scene_line{
    border: 1px solid #75b426;
    margin-right: 0.2rem;
    display: inline-block;
    width: 0.1rem;
    position: absolute;
    height: 0.6rem;
    top: 0.15rem;
    background-color: #75b426;
  }
  .scene_text{
  	margin-left:0.5rem;
  }
  .scene_pic{
  	margin-bottom:0.8rem;
  	display: flex;
    flex-direction: column;
  }
</style>
