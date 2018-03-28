<template>
  <div>
    <HeaderBar barName="个人中心"></HeaderBar>
    <div class="content">
    	<div class="center-info">
    		<div class="txDiv">
    			<img class="txImg" src="../assets/images/touxiang.jpg">
    		</div>
    		<p class="txName txText">老罗</p>
    		<p class="txIdentity txText">普通会员</p>
    	</div>
    	<div class="fgLine"></div>
    	<div class="center-order">
    		<div class="orderLists">
    			<ul class="orderUl">
    				<li class="orderLi">
    					<div class="orderImgDiv"><img class="orderImg" src="../assets/images/center_dfk.png"></div>
    					<div class="orderText">待付款<span class="orderNum">0</span></div>
    				</li>
    				<li class="orderLi">
    					<div class="orderImgDiv"><img class="orderImg" src="../assets/images/center_dfh.png"></div>
    					<div class="orderText">待发货<span class="orderNum">0</span></div>
    				</li>
    				<li class="orderLi">
    					<div class="orderImgDiv"><img class="orderImg" src="../assets/images/center_dsh.png"></div>
    					<div class="orderText">待收货<span class="orderNum">0</span></div>
    				</li>
    				<li class="orderLi">
    					<div class="orderImgDiv"><img class="orderImg" src="../assets/images/center_yqs.png"></div>
    					<div class="orderText">已签收<span class="orderNum">0</span></div>
    				</li>
    			</ul>
    		</div>
    		<router-link :to="'/allOrders/1234'" class="routerStyle">
    		<div class="allOrders">
    			<div class="leftText">全部订单</div>
    			<div class="rightArrow_p">
    				<img src="../assets/images/rightArrow.png" class="arrowImg_p">
    			</div>
    		</div>
    		</router-link>
    	</div>
    	<div class="fgLine"></div>
    	<ul class="center-pageLists">
    		<li class="allPages aLine">
    			<div class="leftImg">
    				<img src="https://m.bdhome.cn/img/centericon/shoucang@2x.png" class="pagesImg">
    			</div>
    			<div class="leftText_p">我的收藏</div>
    			<div class="rightArrow_p">
    				<img src="../assets/images/rightArrow.png" class="arrowImg_p">
    			</div>
    		</li>
    		<li class="allPages aLine">
    			<div class="leftImg">
    				<img src="https://m.bdhome.cn/img/wap/img/shouhuodizhi.png" class="pagesImg">
    			</div>
    			<div class="leftText_p">收货地址</div>
    			<div class="rightArrow_p">
    				<img src="../assets/images/rightArrow.png" class="arrowImg_p">
    			</div>
    		</li>
    		<li class="allPages aLine">
    			<div class="leftImg">
    				<img src="https://m.bdhome.cn/img/wap/img/gouwuche.png" class="pagesImg">
    			</div>
    			<div class="leftText_p">我的购物车</div>
    			<div class="rightArrow_p">
    				<img src="../assets/images/rightArrow.png" class="arrowImg_p">
    			</div>
    		</li>
    		<li class="allPages aLine">
    			<div class="leftImg">
    				<img src="https://m.bdhome.cn/img/centericon/zuji@2x.png" class="pagesImg">
    			</div>
    			<div class="leftText_p">浏览记录</div>
    			<div class="rightArrow_p">
    				<img src="../assets/images/rightArrow.png" class="arrowImg_p">
    			</div>
    		</li>
    	</ul>
    	<div class="fgLine"></div>
    	<div class="center-safeCenter">
    		<div class="allPages">
    			<div class="leftImg">
    				<img src="https://m.bdhome.cn/img/wap/img/anquanzhongxin.png" class="pagesImg">
    			</div>
    			<div class="leftText_p">安全中心</div>
    			<div class="rightArrow_p">
    				<img src="../assets/images/rightArrow.png" class="arrowImg_p">
    			</div>
    		</div>
    	</div>
    </div>
    <!--底部按钮-->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import {Header} from 'mint-ui'
  import Tabbar from '../components/Tabbar'
  import HeaderBar from '../components/HeaderBar'

  export default {
    name: "category",
    data() {
      return {}
    },
    components: {Tabbar, HeaderBar},
    methods:{
    	
    }
  }
</script>

<style scoped>
.content{
	margin-top: 1.71rem;
	color: #595757;
}
.center-info{
	padding: 0.2rem 0.5rem;
	position:relative;
	height:3.6rem;
}
.txDiv{
	position: absolute;
  top: 0.2rem;
  left: 0.5rem;
}
.txImg{
	width:3.5rem;
	height:3.5rem;
	border-radius: 50px;
}
.txName{
	font-size:0.67rem;
}
.txIdentity{
	font-size:0.65rem;
}
.txText{
	margin-top:0.4rem;
	margin-left:4.25rem;
}
.center-order{
	
}
.orderLists{
  padding: 0.4rem 0;
  border-bottom: 1px solid #eeeeee;
}
.orderUl{
	display: flex;
}
.orderLi{
	width: 100%;
	color: #999;
}
.orderImgDiv{
	text-align: center;
}
.orderImg{
	width: 1.4rem;
}
.orderText{
	text-align: center;
	font-size: 0.5rem;
}
.orderNum{
	color:#ff770d;
	padding-left: 0.1rem;
}
.allOrders{
	font-size: 0.6rem;
  padding: 0.1rem 0.5rem;
  display: flex;
}
.leftText{
  width: 100%;
  height: 1.4rem;
  line-height: 1.4rem;
}
.rightArrow{

}
.arrowImg_p{
	width: 1.3rem;
}
.allPages{
	font-size: 0.6rem;
  padding: 0.5rem 0.5rem;
  display: flex;
}
.leftImg{

}
.pagesImg{
	width: 1.4rem;
  margin-right: 0.5rem;
}
.leftText_p{
	width: 100%;
	line-height: 1.2rem;
}
.rightArrow_p{
	
}
.arrowImg_p{
	width: 1.3rem;
}
.aLine{
	border-bottom: 1px solid #eeeeee;
}
.fgLine{
  width: 100%;
  height: 5px;
  background-color: #eeeeee;
}
</style>
