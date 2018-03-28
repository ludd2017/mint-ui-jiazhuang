<template>
  <div>
    <HeaderBar barName="商品分类"></HeaderBar>
    <div class="menu">
    	<aside class="left">
    		<div class="menuLeft">
    			<ul class="menuUl">
    				<li class="menuLi" v-bind:class="{'menuLi_active':ind === index}" v-for="(items, index) in newContent" v-on:click="typeClick(index)">{{index}}</li>
    			</ul>
    		</div>
    	</aside>
    	<div>
    		<section class="menuRight">
    			<div class="rightDiv" v-for="(items, index) in newContent" v-show="index == ind">
    				<div v-for="(item, key) in items">
    					<div class="cTitle">{{key}}</div>
    					<div class="cTypes">
    						<span v-for="val in item" class="cType">{{val}}</span>
    					</div>
    				</div>
    			</div>
    		</section>
    	</div>
    </div>
  </div>
</template>

<script>
  import {Header} from 'mint-ui'
  import HeaderBar from '../components/HeaderBar'

  export default {
    name: "category",
    data() {
      return {
      	ind:'居家家具',
        newContent: {
				'居家家具': {
				'沙发/茶几': ['三人沙发', '二人沙发', '单人沙发', '组合沙发'],
				'餐桌/餐椅': ['餐桌', '餐椅']
				},
				'装修建材': {
				'瓷砖/大理石/地板': ['全抛釉', '抛光砖', '大理石瓷砖'],
				'涂料/墙纸': ['无纺布墙纸', '纯纸墙纸', 'PVC墙纸']
			},
			'软体配饰': {
				'装饰画': ['实物画', '油画', '印刷画'],
				'台灯/吊灯/落地灯': ['台灯', '吊灯', '落地灯','壁灯']
			},
			'家用设备': {
				'厨房设备': ['烟灶组合', '烟消灶组合', '油烟机'],
				'净化设备': ['直饮水设备', '全屋水设备']
			},
			'生活日用': {
				'床上用品': ['床品套件', '婚庆床品', '儿童床品','枕头枕芯'],
				'毛巾/浴巾': ['毛巾套装', '毛巾', '浴巾浴帽']
			},
		},
      }
    },
    components: {HeaderBar},
    methods: {
    	typeClick(index){
    		this.ind=index;
    	}
    }
  }
</script>

<style scoped>
.menu{
	margin-top: 1.71rem;
	}
.left{
	width:4.5rem;
}
.menuLeft{
	background-color: #F6F6F9;
	width:4.5rem;
	color:#333;
	position: fixed;
  top: 1.71rem; 
  left: 0;
  overflow-y: scroll;
  height:100%;
}
.menuUl{
	
}
.menuLi{
  padding: 0.65rem 0 0.65rem 0;
  font-size: 0.6rem;
  text-align: center;
}
.menuLi_active{
	background-color: #fff;
}
.menuRight{
	margin-left: 4.5rem;
	background: #fff;
	overflow-y: scroll;
	font-size: 0.55rem;
	color: #000;
}
.rightDiv{
	padding:0.5rem 0;
}
.cTitle{
	 width: 100%;
   padding: 0.4rem 0.4rem;
   background-color: #f3f4f6;
	font-size: 0.6rem;
	margin-left: 0.17rem;
}
.cTypes{
	width:100%;
	margin-top: 0.4rem;
  margin-left: 0.35rem;
}
.cType{
    width: 3rem;
    display: inline-block;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    background-color: #f3f4f6;
    margin: 0 0.3rem 0.3rem 0;
    border-radius: 5px;
    padding: 0.1rem;
	font-size: 0.4rem;
}
</style>
