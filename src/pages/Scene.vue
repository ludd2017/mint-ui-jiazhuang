<template>
  <div>
    <HeaderBar barName="效果/实景图"></HeaderBar>
    <!--
    <div class="conditionDiv">
      <div>综合排序</div>
      <div style="position: relative;">
      	<div>价格排序</div>
      	<div class="arrows">
      		<div class="top_arrow"></div>
      		<div class="bottom_arrow"></div>
      	</div>
      </div>
      <div @click.native="chooseClick">
      	<span class="choose_text fl">筛选</span>
      	<img src="../assets/images/choose.png" class="choose fl">
      </div>
    </div>
    -->
    <div class="conditionDiv">
      <div v-on:click="handleClick('styles')">风格</div>
      <div v-on:click="handleClick('houseType')">户型</div>
      <div v-on:click="handleClick('region')">区域</div>
      <div v-on:click="handleClick('houseArea')">面积</div>
    </div>
    <!-- 弹层 -->
    <mt-popup v-model="popupVisible" position="top" style="width:100%;" ref="modal1">
      <div class="modal_fg">
        <div class="fg_in">
          <div v-if="clickType=='styles'" v-for="(item,index) in styles" class="fgs fl color"
               v-on:click="selColor(index)" v-bind:class="{'selColor':ind === index}">{{item}}
          </div>
          <div v-if="clickType=='houseType'" v-for="(item,index) in houseType" class="fgs fl color"
               v-on:click="selColor(index)" v-bind:class="{'selColor':ind === index}">{{item}}
          </div>
          <div v-if="clickType=='region'" v-for="(item,index) in region" class="fgs fl color"
               v-on:click="selColor(index)" v-bind:class="{'selColor':ind === index}">{{item}}
          </div>
          <div v-if="clickType=='houseArea'" v-for="(item,index) in houseArea" class="fgs_houseArea fl color"
               v-on:click="selColor(index)" v-bind:class="{'selColor':ind === index}">{{item}}
          </div>
        </div>
      </div>
    </mt-popup>
    <div class="scene-list">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in list" class="scene_li">
          <div v-on:click="clickPic(item)" class="scene-item">
            <img :src="item"
                 :style="{height:heightNum+'px'}" style="width: 100%;"/>
            <mt-cell title="南京-典雅居" value="5房 120㎡" label="经典3居室，特色软装，值得信赖美丽大气">
            </mt-cell>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Header, Cell, InfiniteScroll, Popup} from 'mint-ui'
  import HeaderBar from '../components/HeaderBar'

  export default {
    name: "scene",
    data() {
      return {
        heightNum: 300,
        clickType: 'styles',
        popupVisible: false,
        ind: '',
        list: ['http://storage.shjhome.com:9000/case/cover/d46a1e98a156419da972ee403cc87fb9.jpg',
          'http://storage.shjhome.com:9000/case/cover/f4627b2726d74730baaad49ca2a18bf5.jpg',
          'http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg',
          'http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg',
          'http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg'],
        styles: ['北欧', '简欧', '新中式', '美式', '现代简约', '田园', '欧式', '传统中式', '新古典', '东南亚风格'],
        houseType: ['小公寓', '中小户型', '中大户型', '大户型'],
        region: ['客厅', '餐厅', '卧室', '厨房', '主卧', '次卧', '书房', '卫生间', '男孩房', '女孩房', '老人房'],
        houseArea: ['100㎡以下', '100㎡-150㎡', '150㎡-200㎡', '200㎡以上'],
      }
    },
    components: {HeaderBar},
    methods: {
      handleClick(item) {
        this.clickType = item;
        this.popupVisible = true;
      },
      selColor(index) {
        this.ind = index;
      },
      clickPic(itme) {
        console.log(itme)
        let id = 9527
        // 跳转方案详情
        this.$router.push('/scene-detail/' + id)
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = ['http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg',
            'http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg',
            'http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg',
            'http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg',
            'http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg'];
          for (let item in last) {
            this.list.push(last[item])
          }
          this.loading = false;
        }, 500);
      }
    },
    created() {
      //初始化轮播图高度
      let clientWidth = document.documentElement.clientWidth
      this.heightNum = (clientWidth / 1.3).toFixed(2)

    }
  }
</script>

<style scoped>
  .conditionDiv {
    display: flex;
    margin-top: 1.3rem;
    text-align: center;
    z-index: 99999;
    position: fixed;
    width: 100%;
    height: 1.5rem;
    background-color: #fff;
    top: 0.4rem;
  }

  .conditionDiv div {
    flex: 1;
    display: block;
    font-size: 0.7rem;
    line-height: 1.5rem;
  }

  /*
    .conditionDiv {
      display: flex;
      margin-top: 50px;
      text-align: center;
    }
    .conditionDiv div {
      flex: 1;
      display: block;
      font-size:0.7rem;
    }
    .arrows{
        position:absolute;
        right:0.5rem;
        bottom:-0.13rem;
    }
    .top_arrow{
        border: 0.25rem solid transparent;
        border-bottom-color: #75b426;
        width: 0;
        height: 0;
        margin-bottom: 0.1rem;
    }
      .bottom_arrow{
        border: 0.25rem solid transparent;
        border-top-color: #cccccc;
        width: 0;
        height: 0;
    }
      .choose{
          width:0.8rem;
          margin-left: 0.2rem;
      }
      .choose_text{
          margin-left: 1rem;
      }
  */
  .modal_fg {
    margin-top: 2.5rem;
    background-color: transparent;
    width: 100%;
  }

  .fg_in {
    height: 6rem;
    overflow-y: scroll;
    background-color: #fff;
    max-height: 6rem;
    padding: 1rem 0;
  }

  .fgs {
    height: 0.6rem;
    width: 3rem;
    padding: 0.375rem;
    background-color: #fff;
    font-size: 0.6rem;
    margin: 0 0.1rem 1rem 1rem;
    text-align: center;
    border-radius: 10px;
  }

  .fgs_houseArea {
    height: 0.6rem;
    width: 3.8rem;
    padding: 0.375rem;
    background-color: #fff;
    font-size: 0.6rem;
    margin: 0 0 1rem 0.5rem;
    text-align: center;
    border-radius: 10px;
  }

  .color {
    border: 1px solid #dedede;
    color: #8a8a8a;
  }

  .selColor {
    border: 1px solid #75b426;
    color: #75b426;
  }

  .scene-list {
    margin-top: 3.2rem;
    background-color: #f2f2f2;
  }

  .scene_li {
    margin-bottom: 0.8rem;
  }
</style>
