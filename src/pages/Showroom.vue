<template>
  <div style="background-color: ghostwhite;height: 100%;">
    <HeaderBar barName="线下展厅"></HeaderBar>
    <div class="tool">
      <div>预约一家一世界先下展厅</div>
    </div>
    <div class="boom">
      <div>现场体验套系产品与设计师当面沟通</div>
    </div>
    <div class="suermsg">
      <div class="suermsgdiv">
        <mt-field placeholder="请输入姓名"  ></mt-field>
        <mt-field placeholder="请输入电话号码"  ></mt-field>
      </div>
    </div>
    <div>
      <mt-button style="width:100%;margin-top: 10px;" v-on:click="clickSubmit"  type="primary">免费预约</mt-button>
      <div style="text-align: center;font-size: 12px;color: #999;margin: 10px;">
        留下您的联系方式，一家一世界客服会与您沟通到店时间
      </div>
    </div>
    <div style="text-align: center;background-color: white;">
      <a href="" style="color:#000000;text-decoration:none;">
        <div class="top" style="margin-top: 15px;font-size: 22px;">
          一家以世界软装轻松配置
        </div>
        <div class="top">
          <span style="border-right:1px solid #cccccc;width:48%;font-size: 20px;"><span
            style="margin:0 auto;text-align: center;">热情服务</span></span>
          <span style="width:48%;"><span style="margin:0 auto;text-align: center;font-size: 20px;">追求品质</span></span>
        </div>
        <div>
          <span style="border-bottom:1px solid #cccccc;display: inline-block;height:1px;width:45%;"></span>
          <span style="border-bottom:1px solid #cccccc;display: inline-block;height:1px;width:45%"></span>
        </div>
        <div class="top">
          <span style="border-right:1px solid #cccccc;width:48%;"><span
            style="margin:0 auto;text-align: center;font-size: 20px;">匠心工艺</span></span>
          <span style="width:48%;"><span style="margin:0 auto;text-align: center;font-size: 20px;">追求环保 </span></span>
        </div>
      </a>
    </div>

    <div>
      <div style="margin-top: 20px;font-size: 23px;">展厅实景图</div>
      <div v-on:click="clickPic" style="margin-top: 20px;">
        <img src="http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg"
             :style="{height:heightNum+'px'}" style="width: 100%;"/>
        <mt-cell title="南京-典雅居" value="5房 120㎡" label="经典3居室，特色软装，值得信赖美丽大气">
        </mt-cell>

      </div>
      <div v-on:click="clickPic">
        <img src="http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg"
             :style="{height:heightNum+'px'}" style="width: 100%;"/>
        <mt-cell title="南京-典雅居" value="5房 120㎡" label="经典3居室，特色软装，值得信赖美丽大气">
        </mt-cell>
      </div>
      <div v-on:click="clickPic">
        <img src="http://storage.shjhome.com:9000/case/cover/fa2adc9df4724a49b41fe442f5237943.jpg"
             :style="{height:heightNum+'px'}" style="width: 100%;"/>
        <mt-cell title="南京-典雅居" value="5房 120㎡" label="经典3居室，特色软装，值得信赖美丽大气">
        </mt-cell>
      </div>
    </div>
  </div>

</template>

<script>
  import {Header} from 'mint-ui'
  import HeaderBar from '../components/HeaderBar'

  export default {
    name: "showroom",
    components: {HeaderBar},
        methods: {
      clickPic() {
        console.log(this)
      },
      clickSubmit(){
      	console.log(this)
      },
    },
     created() {
      //初始化轮播图高度
      let clientWidth = document.documentElement.clientWidth
      this.heightNum = (clientWidth / 1.3).toFixed(2)

    }
  }
</script>

<style scoped>

  span {
    display: inline-block;
  }

  .tool {
    display: flex;
    margin-top: 40px;
    text-align: center;
    font-size: 24px;
    color: #666;
  }

  .tool div {
    flex: 1;
    display: block;
  }

  .boom {
    display: flex;
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    color: #57b382;
  }

  .boom div {
    flex: 1;
    display: block;
  }

  .suermsg {
    margin-top: 10px;
    width: 80%;
    border: 1px;
  }

  .suermsgdiv {
    margin-left: 20%;
  }

  .top {
    margin-top: 20px;
  }
</style>
