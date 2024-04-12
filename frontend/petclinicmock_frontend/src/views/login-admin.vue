<template>
  <div class="login-admin-container">
    <div class="login-admin-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer login-admin-navbar-interactive"
      >
        <router-link to="/menu" class="login-admin-logo logo">
          PETCLINICMock
        </router-link>
        <div data-thq="thq-navbar-nav" class="login-admin-desktop-menu">
          <div class="login-admin-buttons">
            <router-link to="/login" class="login-admin-login buttonFlat">
              登录
            </router-link>
            <router-link to="/register" class="login-admin-register buttonFilled">
              注册
            </router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="login-admin-hero">
      <div class="login-admin-hero1 heroContainer">
        <div class="login-admin-container1">
          <h1 class="login-admin-hero-heading heading1">管理员登录</h1>
          <h1 class="login-admin-hero-heading1 heading1">欢迎！</h1>
        </div>
        <el-form :model="formLogin" class="login-admin-form" method="get" :rules="rules" ref="formLogin">
        <el-form-item prop="name" class="login-admin-textinput">
          <el-input
            prop="name"
            type="text"
            placeholder="请输入用户名"
            autocomplete="true"
            v-model="formLogin.name"
          /></el-form-item>
        <el-form-item prop="password" class="login-admin-textinput">
          <el-input
            prop="password"
            type="password"
            placeholder="请输入密码"
            show-password
            autocomplete="true"
            v-model="formLogin.password"
          />
        </el-form-item>
          <table>
            <tr>
              <td>
                <el-input
                  class="login-admin-validcode"
                  type="text"
                  placeholder="请输入验证码"
                  v-model="formLogin.code"
                />
              </td>
              <td
                width="100%" 
                @click="refreshCode">
              <ValidCode class="login-admin-code" :identifyCode="identifyCode"></ValidCode>
              </td>
            </tr>
          </table>
          <el-button class="login-admin-register2 buttonFilled" @click="submit">登录</el-button>
        </el-form> 
      </div>
    </div>
    <div class="login-admin-footer">
      <footer class="login-admin-footer1 footerContainer">
        <div class="login-admin-container2">
          <router-link to="/menu" class="login-admin-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="login-admin-separator"></div>
        <div class="login-admin-container3">
          <span class="bodySmall login-admin-text14">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import ValidCode from '../components/validcode.vue'
export default {
  name: 'LoginAdmin',
  props: {},
  components: {
    ValidCode,
  },
  data() {
    return {
      formLogin: {
        code: "", //验证码输入框
        name: "",
        password: "",
      },
      rules: {
      name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern:"^[\\u4e00-\\u9fa5\\w]{2,20}$", message: '用户名长度在 2~20 位不含特殊字符', trigger: 'blur' }
      ],
      password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern:"^\\w{6,18}$", message: '密码长度在 6~18 位不含特殊字符', trigger: 'blur',  }
      ]
      },
      identifyCodes: "1234567890abcdefjhijklinpqrsduvwxyz", //随机串内容,从这里随机抽几个显示验证码
      identifyCode: "", //验证码图片内容
    }
  },
    mounted() {
    // 初始化验证码
    this.identifyCode = "";
    //参数：（1）随机串内容。（2）验证码显示位数
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 重置验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    //获取验证码的值
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        //通过循环获取字符串内随机几位
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    //随机数字：用于当角标拿字符串的值
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    submit() {
      this.$refs.formLogin.validate((valid) => {
         if (valid) { //valid成功为true，失败为false
          console.log("验证码:", this.identifyCode);
          console.log("用户输入的验证码:",this.formLogin.code);
          console.log('是否验证通过:',this.identifyCode==this.formLogin.code);
          if(!(this.identifyCode==this.formLogin.code))
          {
            alert('验证码错误！')
            this.refreshCode() 
          }
         } else {
             console.log('校验失败');
             return false;
         }
     });
    }
  },
  metaInfo: {
    title: 'LoginAdmin - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'LoginAdmin - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.login-admin-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.login-admin-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.login-admin-logo {
  text-decoration: none;
}
.login-admin-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.login-admin-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.login-admin-login {
  margin-right: 32px;
  text-decoration: none;
}
.login-admin-register {
  text-decoration: none;
}
.login-admin-burger-menu {
  display: none;
}
.login-admin-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.login-admin-mobile-menu1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
}
.login-admin-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.login-admin-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.login-admin-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-admin-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.login-admin-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.login-admin-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-admin-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-admin-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-admin-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-admin-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.login-admin-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.login-admin-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.login-admin-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.login-admin-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.login-admin-hero1 {
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-radius: 0px;
  background-color: var(--dl-color-gray-black);
}
.login-admin-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}
.login-admin-hero-heading {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
}
.login-admin-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
}
.login-admin-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.login-admin-form {
  width: 387px;
  height: 252px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-style: hidden;
  border-width: 1px;
  border-radius: 16px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-900);
}
.login-admin-textinput {
  width: 300px;
  height: 44px;
  align-self: left;
  margin-left: 40px;
  font-family: "Noto Sans";
  margin-bottom: var(--dl-space-space-unit);

}
.login-admin-textinput1 {
  width: 300px;
  height: 44px;
  align-self: left;
  margin-left: 40px;
  font-family: "Noto Sans";
  margin-bottom: var(--dl-space-space-unit);
}
.login-admin-validcode {
  width: 200px;
  height: 44px;
  align-self: left;
  margin-left: 37px;
  font-family: "Noto Sans";
  margin-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}
.login-admin-code {
  margin-left: 10px;
  margin-bottom: var(--dl-space-space-unit);
}
.login-admin-register2 {
  height: 34px;
  width: 100px;
  align-self: center;
}
.login-admin-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-admin-footer1 {
  height: 246px;
}
.login-admin-container2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.login-admin-logo2 {
  text-decoration: none;
}
.login-admin-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-900);
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.login-admin-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .login-admin-hero1 {
    flex-direction: column;
  }
  .login-admin-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .login-admin-hero-heading {
    text-align: center;
  }
  .login-admin-hero-heading1 {
    text-align: center;
  }
  .login-admin-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .login-admin-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .login-admin-desktop-menu {
    display: none;
  }
  .login-admin-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-admin-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-admin-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-admin-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-admin-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-admin-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .login-admin-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .login-admin-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .login-admin-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .login-admin-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .login-admin-text14 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .login-admin-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .login-admin-mobile-menu1 {
    padding: 16px;
  }
  .login-admin-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .login-admin-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-admin-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .login-admin-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .login-admin-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .login-admin-text14 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
