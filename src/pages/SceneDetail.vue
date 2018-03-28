<template>
  <div>
    <HeaderBar barName="场景详情"></HeaderBar>
    <div class="swipeDiv">
      <mt-swipe :style="{height:swipeHeightNum+'px'}" style="width: 100%;" :auto="4000">
        <mt-swipe-item>
          <img style="width: 100%;height: 100%;"
               src="http://storage.shjhome.com:9000/case/cover/d46a1e98a156419da972ee403cc87fb9.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>
          <img style="width: 100%;height: 100%;"
               src="http://storage.shjhome.com:9000/case/cover/2579ffa367214aa3959c9454e87cab32.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>
          <img style="width: 100%;height: 100%;"
               src="http://storage.shjhome.com:9000/attachment/uploadfile/2015/04/20151104110901986.jpg"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="scene-info">
      <p class="scene-name textMore">
        常州金新鼎邦230.0㎡230户型 现代
      </p>
      <div class="type-tag">
        <span class="type-tag">120㎡</span><span class="type-tag">现代</span>
      </div>
      <div>
      	<p class="scene-descp">
        	在满足功能需要的前提下，让一些空间和人既物进行合理的分配组合，描绘出最丰富动人的空间效果。
        	空间开敞、内外通透，在空间平面设计中追求不受承重墙的限制自由。
        	空间开敞、内外通透，在空间平面设计中追求不受承重墙的限制自由。
      	</p>
      </div>
    </div>
    <div>
      <mt-button size="large" type="danger" style="background-color: #6dc243">预约设计师</mt-button>
    </div>
    <div class="prod-out">
    <div class="prod-info" v-for="data in datas">
      <div class="soft-prod">
        <div class="soft-title">
        	<input type="checkbox" v-bind:id="data.listTitle" value="" v-bind:checked="isTitleChecked(data)" @change="changeTitleChecked(data,$event)">{{data.listTitle}}
        </div>
        <div class="prod-list" v-for="item in data.listItem">
          <div class="pord-item">
            <div style="flex: 10%;">
              <input type="checkbox" v-bind:value="item" v-model="data.selected" @change="changeOne(item,$event)">
            </div>
            <div style="flex: 30%;">
              <img width="79px" height="79px" :src="item.img"/>
            </div>
            <div style="flex: 60%;">
              <div class="textMore rz">{{item.name}}</div>
              <div class="textMore rz">价格：¥{{item.price}}</div>
              <div class="textMore rz">数量：{{item.num}}件</div>
            </div>
          </div>
        </div>
      </div>
       <!--
      <div class="hard-prod">
        <div class="soft-title"><input type="checkbox">硬装明细</div>
        <div class="prod-list" v-for="(item, index) in yzDetail">
        	<div class="pord-item" v-for="(yz,index) in item.children">
            <div style="flex: 10%;">
              <input type="checkbox">
            </div>
            <div style="flex: 30%;">
              <img width="79px" height="79px" :src="yz.img"/>
            </div>
            <div style="flex: 60%;">
              <div class="textMore rz">{{yz.name}}</div>
              <div class="textMore rz">价格:¥{{yz.price}}元/㎡</div>
              <div class="textMore rz">数量:{{yz.num}}件</div>
            </div>
          </div>
        </div>
      </div>
            -->
    </div>
		</div>
    <div class="shopping-cart">
      <div style="flex: 20%;" class="allChoose"><input id="all-checked" type="checkbox" :checked="isAllChecked()" @change="changeAllChecked($event)"/>全选</div>
      <div style="flex: 50%;">
        <div>已选择商品：<span style="color: #ff770d;">{{checkedCount}}件</span></div>
        <div>合计：¥<span style="color: #ff770d;">{{calcPrice}}</span></div>
      </div>
      <div style="flex: 30%;">
        <mt-button type="danger" size="normal" class="btnMint">加入购物车</mt-button>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar'

//规范价格显示
    function formatCurrency (num) {
        num = num.toString().replace(/\$|\,/g, '') // eslint-disable-line
        if (isNaN(num)) {
            num = '0'
        }
        var sign = (num == (num = Math.abs(num)))// eslint-disable-line
        num = Math.floor(num * 100 + 0.50000000001)
        var cents = num % 100
        num = Math.floor(num / 100).toString()
        if (cents < 10) {
            cents = '0' + cents
        }
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
            num = num.substring(0, num.length - (4 * i + 3)) +
                    num.substring(num.length - (4 * i + 3))
        }
        return (((sign) ? '' : '-') + num + '.' + cents)
    }

  export default {
    name: "scene-detail",
    components: {HeaderBar},
    data() {
      return {
        swipeHeightNum: 300,
        checkedArr:[],
        totalPrice:0,
				datas : [
					{id:666,selected:[],listTitle:"软装明细",isYz:false,
					listItem:[{id:0,info:0,name:"组合沙发 东北松实木框架1组合沙发 东北松实木框架1","price":"0.01","num":"1","img":"https://images.bdhome.cn/bdhomeminiimage/product/79/1917/21474856917/21474856917.jpg_170x170.jpg"},
					{id:1,info:1,name:"组合沙发 东北松实木框架1...","price":"0.02","num":"2","img":"https://images.bdhome.cn/bdhomeminiimage/product/79/1917/21474856917/21474856917.jpg_170x170.jpg"},
					{id:2,info:0,name:"组合沙发 东北松实木框架1...","price":"0.18","num":"3","img":"https://images.bdhome.cn/bdhomeminiimage//product/292/3378/21474878378/21474878378.jpg_170x170.jpg"}]
					},
					{id:888,selected:[],listTitle:"硬装明细",isYz:true,
					listItem:[{id :0,info:0,name:"墙纸","price":"4.12","num":"1","img":"https://images.bdhome.cn/bdhomeimage//product/805/3663/21474873663/21474839021/21474853115.jpg_80x80.jpg"},
					{id:1,info:1,name:"地板","price":"5.06","num":"2","img":"https://images.bdhome.cn/bdhomeimage/product/766/2765/21474872765/21474872765.jpg_80x80.jpg"},
					{id:2,info:0,name:"地板","price":"6.2","num":"3","img":"https://images.bdhome.cn/bdhomeimage/product/766/2765/21474872765/21474872765.jpg_80x80.jpg"}]
					},
				],
    }},
  methods:{
  	/*单个选项发生变化*/
  	changeOne:function(item,event){
  		var doudou=this.checkedArr;
  		var allcheckedPrice=this.totalPrice;//总价
  		if (event.target.checked === true) {//点击选中，把item加入数组
      doudou.push(item);
      //allcheckedPrice=(parseFloat(allcheckedPrice).add((parseFloat(item.price))*parseFloat(item.num))).toFixed(2);//总价
      allcheckedPrice=(parseFloat(allcheckedPrice)+parseFloat(formatCurrency(Number(item.num)*Number(item.price)))).toFixed(2);
  		}else{//点击取消选中,从数组中移除item
			if(doudou.indexOf&&typeof(doudou.indexOf)=='function'){//获取item在数组里的index
        var index = doudou.indexOf(item);
        if(index >= 0){
            doudou.splice(index,1);
            //allcheckedPrice=parseFloat(allcheckedPrice).sub((parseFloat(item.price))*parseFloat(item.num));//总价
            allcheckedPrice=(parseFloat(allcheckedPrice)-parseFloat(formatCurrency(Number(item.num)*Number(item.price)))).toFixed(2);
        }
   }
  		}
  		this.checkedArr=doudou;
  		this.totalPrice=allcheckedPrice;
  	},
  	/**
		* 当父标题状态变化时的处理方法
		* @param data [当前项的data]
		* @param event [当前项的event]
		*/
  	changeTitleChecked : function (data,event) {
  		var heihei=[];//点击一级元素后统计二级元素的选中数量
  		var biu=this.checkedArr;
  		var allcheckedPrice=this.totalPrice;//总价
			if (event.target.checked === true) {
				data.listItem.forEach(function (item) {
				data.selected.indexOf(item) === -1 && data.selected.push(item);
				if(biu.indexOf&&typeof(biu.indexOf)=='function'){//获取item在数组里的index,将不存在于已选中数组的元素添加进去
        var index = biu.indexOf(item);
        if(index >= 0){            
        }else{
        	heihei.push(item);
        	allcheckedPrice=(parseFloat(allcheckedPrice)+parseFloat(formatCurrency(Number(item.num)*Number(item.price)))).toFixed(2);
        	//allcheckedPrice=(parseFloat(allcheckedPrice).add((parseFloat(item.price))*parseFloat(item.num))).toFixed(2);
        }
   }
			})
				this.checkedArr=this.checkedArr.concat(heihei);//将此次点击父级选中元素的加入原先已选中的数组中
			}else {
				data.selected = [];
				var ohye=this.checkedArr;
				data.listItem.forEach(function (item) {
					if(ohye.indexOf&&typeof(ohye.indexOf)=='function'){
        	var index = ohye.indexOf(item);
        	if(index >= 0){
            ohye.splice(index,1);
            allcheckedPrice=(parseFloat(allcheckedPrice)-parseFloat(formatCurrency(Number(item.num)*Number(item.price)))).toFixed(2);
            //allcheckedPrice=parseFloat(allcheckedPrice).sub((parseFloat(item.price))*parseFloat(item.num));
        	}
    }
			})
			this.checkedArr=ohye;//把现在选中的数组赋值给checkedArr
			}
			
			this.totalPrice=allcheckedPrice;
		},
		/**
		* 判断父标题选择状态
		* @param data [当前项的data]
		* @returns {boolean}
		*/
		isTitleChecked : function (data) {
		var _selected = data.selected;
		var _listItem = data.listItem;
		 // 验证selected中是否含有全部的item的id 如果是 证明title要选中
		return _listItem.every(function (item) {
		return _selected.indexOf(item) != -1;
		});
		},
		/**
		* 全选框change事件的回调处理方法
		* @param event 
		*/
		changeAllChecked : function (event) {
		if (event.target.checked === true) {//点击全部选中
		var haha=[];//还没选中，点击全部选中
		var allcheckedPrice=0;
		this.datas.forEach(function (data) {
		data.listItem.forEach(function (item) {
		data.selected.indexOf(item) === -1 && data.selected.push(item);
		haha.push(item);//还没选中，点击全部选中
		allcheckedPrice=(parseFloat(allcheckedPrice)+parseFloat(formatCurrency(Number(item.num)*Number(item.price)))).toFixed(2);
		//allcheckedPrice=parseFloat(allcheckedPrice).add((parseFloat(item.price))*parseFloat(item.num));//总价
		})
		})
		this.checkedArr=haha;
		this.totalPrice=allcheckedPrice;
		//计算总价
		}else {	//点击取消全选
		this.datas.forEach(function (data) {
		data.selected = [];
		})
		this.checkedArr=[];
		this.totalPrice=0;
		}
		},
		/**
		* 判断全选框选择状态
		* @returns {boolean}
		*/
		isAllChecked : function () {
		return this.datas.every(function (data) {
		return data.selected.length === data.listItem.length;
		});
		},
		
  },
  computed:{ 	
		checkedCount:{
			get: function() {
        return this.checkedArr.length;
     }
		},
		calcPrice:{
			get: function() {
        return this.totalPrice;
     }
		}
  },
    created() {
      console.log(this.$route.params)
      //初始化轮播图高度
      let clientWidth = document.documentElement.clientWidth
      this.swipeHeightNum = (clientWidth / 1.3).toFixed(2)
    },
  }
</script>

<style scoped>
  .swipeDiv {
    margin-top:1.71rem;
  }
  .scene-info {
    border-top: 1px solid #dddddd;
    margin: 0.2rem 0;
  }
  .scene-name {
    font-size: 0.62rem;
    color: #595757;
    padding: 0.4rem 0.5rem;
  }
  .type-tag {
    margin-left:0.5rem;
    height: 1rem;
  }
  .type-tag span {
		float: left;
    display: inline-block;
    border: 1px solid #b4b4b4;
    border-radius: 4px;
    padding: 0.2rem 0.1rem;
    margin: 0 0.4rem 0 0;
    font-size: 0.6rem;
    color: #595757;
    height: 0.5rem;
    width: 2rem;
    text-align: center;
  }
  .scene-descp {
    font-size: 0.6rem;
    color: #737373;
    margin: 0.5rem 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 0.8rem;
  }
	.prod-out{
    margin-bottom: 3rem;
    }
  .prod-info {
    display: block;
    border-top: 1px solid #dddddd;
    margin-top: 10px;
    font-family: "microsoft yahei";
  }
	.soft-prod{
		padding: 0.3rem;
	}
  .soft-title {
    font-size: 0.65rem;
    padding: 0.22rem 0;
    border-bottom: 1px dashed #dddddd;
  }
  .pord-item {
    display: flex;
    border-bottom: 1px dashed #dddddd;
    font-size: 0.55rem;
    padding: 0.22rem 0;
  }
  .rz{
  	height:1rem;
  	line-height: 1rem;
  	width:9rem;
  }
  /*
  .hard-prod{
		padding: 0.3rem;
	}
	*/
  .shopping-cart {
		display: flex;
    height: 2.2rem;
    line-height: 1.1rem;
    font-size: 0.55rem;
    position: fixed;
    bottom: 0;
    background-color: #f9f9f9;
    width: 100%;
  }
  .btnMint{
  	height: 100%;
    font-size: 0.55rem;
    width: 100%;
    border-radius: 0;
  }
  .allChoose{
  	vertical-align: middle;
    line-height: 3.5;
  }
</style>
