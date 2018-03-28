<template>
  <div>
    <HeaderBar barName="全部订单"></HeaderBar>
		<div class="content">
			  <div class="orderTab">
    			<ul class="tabUl">
    				<li class="tabLi" v-bind:class="{'selColor':ind === '0'}" v-on:click="typeClick('0')">全部</li>
    				<li class="tabLi" v-bind:class="{'selColor':ind === '1'}" v-on:click="typeClick('1')">待付款</li>
    				<li class="tabLi" v-bind:class="{'selColor':ind === '2'}" v-on:click="typeClick('2')">待发货</li>
    				<li class="tabLi" v-bind:class="{'selColor':ind === '3'}" v-on:click="typeClick('3')">待收货</li>
    				<li class="tabLi" v-bind:class="{'selColor':ind === '4'}" v-on:click="typeClick('4')">部分收货</li>
    				<li class="tabLi" v-bind:class="{'selColor':ind === '5'}" v-on:click="typeClick('5')">已签收</li>
    			</ul>
    		</div>
    		<div class="fgLine"></div>
    		<div class="lists">
    			<ul class="listUl">
    				<li class="listLi" v-for="item in orderAllItem[ind]">
    					<div class="liLine1">
    						<div class="orderId textMore">{{item.orderId}}</div>
    						<div class="orderTime textMore">{{item.date}}</div>
    						<div class="orderState textMore" v-if="item.state==='1'" >等待付款</div>
    						<div class="orderState textMore" v-if="item.state==='2'" >待发货</div>
    						<div class="orderState textMore" v-if="item.state==='3'" >待收货</div>
    						<div class="orderState textMore" v-if="item.state==='4'" >部分签收</div>
    						<div class="orderState textMore" v-if="item.state==='5'" >已签收</div>
    					</div>
    					<div class="liLine2">
    						<div class="liImgDiv">
    							<img class="liImg" :src="item.img">
    						</div>
    						<div class="goodName">{{item.name}}</div>
    						<div class="goodInfoLine">
    							<span class="goodPrice">￥{{item.price}}</span>
    							<span class="goodNum">X{{item.num}}</span>
    						</div>
    					</div>
    					<div class="liLine3">
    						<div class="totalNum">共{{item.num}}件</div>
    						<div class="totalPrice">合计：￥{{item.price}}</div>
    						<div class="yf">（含运费）</div>
    					</div>
    					<div class="liLine4">
    						<div class="delOrder"><div class="delOrder_btn">删除订单</div></div>
    						<div class="orderDetail"><div class="orderDetail_btn">订单详情</div></div>
    						<div class="toState" v-if="item.state=='1'"><div class="toState_btn">去付款</div></div>
    						<div class="toState" v-if="item.state!='1'"><div class="toState_btn">不去付款</div></div>
    					</div>
    					<div class="fgLine"></div>
    				</li>
    			</ul>
    		</div>
		</div>
  </div>

</template>

<script>
  import {Header} from 'mint-ui'
  import HeaderBar from '../components/HeaderBar'

  export default {
    name: "category",
     data(){
    	var orders=[
      	{"id":"1","orderId":"12334654346643","name":"希奢 三人沙发 实木框架+皮质软包 欧琳 W2600*D1000*H630","price":"42699.99","date":"2017-12-28 9:11","state":"1","num":"1","img":"https://images.bdhome.cn/bdhomeminiimage/product/79/1917/21474856917/21474856917.jpg_170x170.jpg"},
      	{"id":"2","orderId":"357351323463","name":"希奢 三人沙发 实木框架+皮质软包 欧琳 W2600*D1000*H630","price":"42699.99","date":"2017-12-28 9:11","state":"2","num":"1","img":"https://images.bdhome.cn/bdhomeminiimage/product/79/1917/21474856917/21474856917.jpg_170x170.jpg"},
      	{"id":"3","orderId":"235463568546","name":"希奢 三人沙发 实木框架+皮质软包 欧琳 W2600*D1000*H630","price":"42699.99","date":"2017-12-28 9:11","state":"3","num":"1","img":"https://images.bdhome.cn/bdhomeminiimage/product/79/1917/21474856917/21474856917.jpg_170x170.jpg"},
      	{"id":"4","orderId":"35453575466","name":"希奢 三人沙发 实木框架+皮质软包 欧琳 W2600*D1000*H630","price":"42699.99","date":"2017-12-28 9:11","state":"4","num":"1","img":"https://images.bdhome.cn/bdhomeminiimage/product/79/1917/21474856917/21474856917.jpg_170x170.jpg"},
      	{"id":"5","orderId":"5565478546250","name":"希奢 三人沙发 实木框架+皮质软包 欧琳 W2600*D1000*H630","price":"42699.99","date":"2017-12-28 9:11","state":"5","num":"1","img":"https://images.bdhome.cn/bdhomeminiimage/product/79/1917/21474856917/21474856917.jpg_170x170.jpg"},
      	{"id":"6","orderId":"56735234325434","name":"希奢 三人沙发 实木框架+皮质软包 欧琳 W2600*D1000*H630","price":"42699.99","date":"2017-12-28 9:11","state":"1","num":"1","img":"https://images.bdhome.cn/bdhomeminiimage/product/79/1917/21474856917/21474856917.jpg_170x170.jpg"},
      	];
    		var dfk = [];
        var dfh = [];
        var dsh = [];
        var bfsh = [];
        var yqs = [];
        //把所有不同状态的订单通过if判断push到相对应的订单状态集合中。
        orders.forEach(function(order){
          if(order.state == 1){
            dfk.push(order);
          };
          if(order.state == 2){
            dfh.push(order);
          };
           if(order.state == 3){
            dsh.push(order);
          }
          if(order.state == 4){
            bfsh.push(order);
          };
          if(order.state == 5){
            yqs.push(order);
          }
        });
        //设置一个空数组，把所有状态下的订单集合放到空数组中，从0-5的顺序按照你的自己设置的tab切换的内容0-5的顺序对应排列，
        var orderAll = [orders,dfk,dfh,dsh,bfsh,yqs];
        return {
      	ind:'0',
      	orderAllItem : orderAll,
      }           
    },
    components: {HeaderBar},
    methods:{
    	typeClick(index){
    		this.ind=index;
    	}
    },
  }
</script>

<style scoped>
.content{
	margin-top: 1.71rem;
	color: #000;
}
.orderTab{
  padding: 0.4rem 0;
  border-bottom: 1px solid #eeeeee;
}
.tabUl{
	display: flex;
	flex-direction: row;
}
.tabLi{
	width: 100%;text-align: center;
	font-size: 0.52rem;
}
.fgLine{
  width: 100%;
  height: 5px;
  background-color: #eeeeee;
}
.selColor{
	color: #ff770d; 
}
.lists{
	
}
.listUl{
	
}
.listLi{
	
}
.liLine1{
	display: flex;
	font-size: 0.6rem;
	border-bottom:1px solid #EEEEEE;
	padding: 0.4rem 0.4rem;
}
.orderId{
	width:40%;
}
.orderTime{
	width:40%;
}
.orderState{
	width:20%;
	color:#989898;
	text-align: right;
}
.liLine2{
	border-bottom:1px solid #EEEEEE;
	position: relative;
}
.liImgDiv{
	
}
.liImg{
	width:3rem;
	padding:0.3rem;
}
.goodName{
    width: 12rem;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0.4rem;
    font-size: 0.5rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    height: 1.4rem;
    line-height: 0.7rem;
}
.goodInfoLine{
	width:12rem;
	font-size: 0.6rem;
	position: absolute;
  right: 0;
  bottom: 0;
  margin:0 0.4rem 0.16rem 0;
  display: flex;
}
.goodPrice{
	width:50%;
	text-align: left;
	color: #ff770d; 
}
.goodNum{
	width:50%;
	text-align: right;
	color:#989898;
}
.liLine3{
	display: flex;
	font-size: 0.6rem;
	padding: 0.4rem 0.4rem;	
	border-bottom:1px solid #EEEEEE;
}
.totalNum{
	text-align: right;
	width:30%;
	padding-right:0.4rem;
}
.totalPrice{
	width:45%;
}
.yf{
	width:25%;
}
.liLine4{
	display: flex;
	font-size: 0.6rem;
	padding: 0.4rem 0.4rem;
	border-bottom:1px solid #EEEEEE;
}
.delOrder{
	width:50%;
	color:#989898;
}
.delOrder_btn{
	border:1px solid #989898;
	border-radius: 5px;
	width: 3rem;
  text-align: center;
  padding: 0.22rem 0.22rem;
}
.orderDetail{
	width:25%;
	color:#989898;
}
.orderDetail_btn{
	border:1px solid #989898;
	border-radius: 5px;
	width: 3rem;
  text-align: center;
  padding: 0.22rem 0.22rem;
	}
.toState{
	width:25%;
	text-align: right;
}
.toState_btn{
	border:1px solid #bb0000;
	border-radius: 5px;
	width: 3rem;
  text-align: center;
  padding: 0.22rem 0.22rem;
  color: #bb0000;
	}
</style>
