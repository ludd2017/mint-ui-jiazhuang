<template>
  <div style="background: #f1f2f6;height:100%;overflow: hidden;">
    <HeaderBar barName="登录"></HeaderBar>
		<div class="content">
			<div class="logo_div" style="background: #fff;">
				<img class="logoImg" src="../assets/logo.png">
			</div>
			<ul class="log_nav" style="background: #fff;">
				<li class="navLi" v-on:click="loginChoose('zhdl')" v-bind:class="{'selColor':loginType==='zhdl'}">
					<div class="loginText">账号登录</div>
					<div class="arrowDiv" v-bind:class="{'selArrow':loginType==='ksdl'}">
						<div class="loginArrow"></div>
					</div>
				</li>
				<li class="navLi" v-on:click="loginChoose('ksdl')" v-bind:class="{'selColor':loginType==='ksdl'}">
					<div class="loginText">快速登录</div>
					<div class="arrowDiv" v-bind:class="{'selArrow':loginType==='zhdl'}">
						<div class="loginArrow"></div>
					</div>
				</li>
			</ul>
			<div class="zhdl" v-if="loginType==='zhdl'">
				<div class="loginLine blackLine">
					<img src="../assets/images/user.png">
					<div class="login_line2">
						<input type="text" class="mobile" placeholder="会员名/手机号" maxlength="10">
					</div>
				</div>
				<div class="loginLine blackLine">
					<img src="../assets/images/pwd.png">
					<div class="login_line2">
						<input type="password" class="mobile" placeholder="密码" maxlength="14">
					</div>
				</div>
				<div class="loginBtnLine">
					<button class="btnLogin">登录</button>
				</div>
				<div class="regLine">
					<div class="forgetPwd">忘记密码</div>
					<div class="freeRegist">免费注册</div>
				</div>
			</div>
			<div class="ksdl" v-if="loginType==='ksdl'">
				<div class="loginLine blackLine">
					<div class="login_line2">
						<input type="text" class="mobile" placeholder="请输入手机号码">
					</div>
				</div>
				<div class="loginLine">
					<div class="codeDiv blackLine">
						<input type="text" class="code" placeholder="请输入验证码">
					</div>
					<button class="getCode">获取验证码</button>
				</div>
				<div class="loginBtnLine">
					<button class="btnLogin">登录</button>
				</div>
			</div>
		</div>
  </div>

</template>

<script>
  import {Header} from 'mint-ui'
  import HeaderBar from '../components/HeaderBar'
//<div class=""></div>
  export default {
    name: "category",
    data() {
      return {
      	loginType:'zhdl'
      }
    },
    components: {HeaderBar},
    methods:{
    	loginChoose(choose){
    		this.loginType=choose
    	}
    }
  }
</script>

<style scoped>
.content{
	margin-top: 1.71rem;
}
.logo_div{
	text-align: center;
	padding:2rem;
}
.logoImg{
	width: 10rem;
}
.log_nav{
	display: flex;
	font-size:0.6rem;
	text-align: center;
	color:#989b9f;
}
.loginText{
	text-align: center;
}
.arrowDiv{
	width:100%;
	background-color: #fff;
}
.loginArrow{
    text-align: center;
    border: 0.4rem solid transparent;
    border-bottom-color: #f1f2f6;
    width: 0;
    height: 0;
    margin: 0 auto;
}
.navLi{
	width:50%;
}
.selColor {
  color: #8BC34A;
  }
 .selArrow{
  display: none;
}
.zhdl{
  padding: 1.5rem 1.5rem;
  }
.ksdl{
 	padding: 1.5rem 1.5rem;
 }
 .loginLine{
		display: flex;
    display: -webkit-flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.7rem;
 }
  .login_line2{
  width: 100%;
 	flex: 1;
  webkit-flex:1;
 }
 .mobile{
    border: 0;
    width: 100%;
    height: 1.6rem;
    outline: none;
    display: block;
    font-size: 0.7rem;
    font-family: "microsoft yahei";
    background: transparent;
    padding-left: 0.2rem;
 }
 .code{
 	  border: 0;
    height: 1.6rem;
    outline: none;
    display: block;
    font-size: 0.7rem;
    font-family: "microsoft yahei";
    background: transparent;
 }
 .codeDiv{
 	width:100%;
 }
 .getCode{
		display: block;
    width: 4.8rem;
    height: 1.8rem;
    line-height: 1rem;
    text-align: center;
    margin-left: 0.2rem;
    border-radius: 5px;
    font-size: 0.5rem;
    color: #fff;
    background: #8BC34A;
    border: 0;
    font-family: "microsoft yahei";
 }
 .blackLine{
 	  border-bottom: solid 1px #4a4a4a;
 }
 .loginBtnLine{
 	text-align: center;
 	margin-top: 1.6rem;
 }
 .btnLogin{
    display: block;
    border-radius: 5px;
    height: 2rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: 0.75rem;
    width: 100%;
    background: #8BC34A;
    border: 0;
    font-family: "microsoft yahei";
 }
 .regLine{
 	padding:0.2rem;
 	display: flex;
 	font-size:0.6rem;
 	color:#989b9f;
 }
 .forgetPwd{
 	width:50%;
 }
 .freeRegist{
 	width:50%;
	text-align: right;
 }
</style>
