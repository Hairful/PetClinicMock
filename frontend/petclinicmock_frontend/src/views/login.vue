<template>
  <div class="login-container">
    <div class="login-header">
      <header data-thq="thq-navbar" class="navbarContainer login-navbar-interactive">
        <router-link to="/menu" class="login-logo logo">PETCLINICMock</router-link>
        <div data-thq="thq-navbar-nav" class="login-desktop-menu">
          <div class="login-buttons">
            <router-link to="/login" class="login-login buttonFlat">
              登录
            </router-link>
            <router-link to="/register" class="login-register buttonFilled">
              注册
            </router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="login-hero"  @keyup.enter="submit">
      <div class="login-hero1 heroContainer">
        <div class="login-container1">
          <h1 class="login-hero-heading heading1">登录</h1>
          <h1 class="login-hero-heading1 heading1">欢迎回来 🤗</h1>
        </div>
        <el-form :model="formLogin" class="login-form" method="get" :rules="rules" ref="formLogin" >
          <el-form-item prop="name" class="login-textinput">
            <el-input prop="name" type="text" placeholder="请输入用户名" autocomplete="true"
              v-model="formLogin.name" /></el-form-item>
          <el-form-item prop="password" class="login-textinput">
            <el-input prop="password" type="password" placeholder="请输入密码" show-password autocomplete="true"
              v-model="formLogin.password"/>
          </el-form-item>
          <table>
            <tr>
              <td>
                <el-input  class="login-validcode" type="text" placeholder="请输入验证码" v-model="formLogin.code" />
              </td>
              <td width="100%" @click="refreshCode">
                <ValidCode class="login-code" :identifyCode="identifyCode"></ValidCode>
              </td>
            </tr>
          </table>
          <el-button class="login-register2 buttonFilled" @click="submit">登录</el-button>
        </el-form>
      </div>
    </div>
    <div class="login-footer">
      <footer class="login-footer1 footerContainer">
        <div class="login-container2">
          <router-link to="/menu" class="login-logo2 logo">PETCLINICMOCK</router-link>
        </div>
        <div class="login-separator"></div>
        <div class="login-container3">
          <span class="bodySmall login-text14">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import ValidCode from '../components/validcode.vue'
import axios from 'axios';
export default {
  name: 'Login',
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
      token: "",
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: "^[\\u4e00-\\u9fa5\\w]{2,20}$", message: '用户名长度在 2~20 位不含特殊字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: "^\\w{6,18}$", message: '密码长度在 6~18 位不含特殊字符', trigger: 'blur', }
        ]
      },

      identifyCodes: "234567890abcdefjhijkinpqrsduvwxyz", //随机串内容,从这里随机抽几个显示验证码
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
    // HTTP request
    async login() {
      try {
        const response = await axios.post('/login', {
          userName: this.formLogin.name,
          password: this.formLogin.password,
        });
        if (response.status === 200) {
          if (response.data.status === 0) {
            // Login successful
            this.token = response.data.token;
            localStorage.setItem('Token', this.token);//将token存在localstorage中
            localStorage.setItem('username', this.formLogin.name);
            localStorage.setItem('userID', response.data.userID);
            localStorage.setItem('isAdmin', response.data.isAdmin);
            console.log('Login successful');
            this.$router.push('/menu'); // Navigate to menu page
          }
        }
      } catch (error) {
        // Handle error
        // Show error message
        this.$message.warning(error.message);
      }
    },
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
          console.log("用户输入的验证码:", this.formLogin.code);
          console.log('是否验证通过:', this.identifyCode == this.formLogin.code);
          if (!(this.identifyCode == this.formLogin.code)) {
            this.$message.warning('验证码错误');
            this.refreshCode()
          }
          else {
            this.login();
          }
        } else {
          console.log('校验失败');
          return false;
        }
      });
    }
  },
  metaInfo: {
    title: 'Login - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'Login - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.login-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.login-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.login-logo {
  text-decoration: none;
}

.login-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.login-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.login-login {
  margin-right: 32px;
  text-decoration: none;
}

.login-register {
  text-decoration: none;
}

.login-burger-menu {
  display: none;
}

.login-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.login-mobile-menu1 {
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

.login-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.login-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.login-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.login-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.login-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.login-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.login-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.login-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.login-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.login-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.login-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.login-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.login-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}

.login-hero1 {
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}

.login-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.login-hero-heading {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
}

.login-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
}

.login-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.login-form {
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

.login-textinput {
  width: 300px;
  height: 44px;
  align-self: left;
  margin-left: 40px;
  font-family: "Noto Sans";
  margin-bottom: var(--dl-space-space-unit);

}

.login-textinput1 {
  width: 300px;
  height: 44px;
  align-self: left;
  margin-left: 40px;
  font-family: "Noto Sans";
  margin-bottom: var(--dl-space-space-unit);
}

.login-validcode {
  width: 200px;
  height: 44px;
  align-self: left;
  margin-left: 37px;
  font-family: "Noto Sans";
  margin-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}

.login-code {
  margin-left: 10px;
  margin-bottom: var(--dl-space-space-unit);
}

.login-register2 {
  height: 34px;
  width: 100px;
  align-self: center;
}

.login-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-footer1 {
  height: 246px;
}

.login-container2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.login-logo2 {
  text-decoration: none;
}

.login-separator {
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

.login-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .login-hero1 {
    flex-direction: column;
  }

  .login-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .login-hero-heading {
    text-align: center;
  }

  .login-hero-heading1 {
    text-align: center;
  }

  .login-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}

@media(max-width: 767px) {
  .login-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .login-desktop-menu {
    display: none;
  }

  .login-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .login-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .login-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .login-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .login-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .login-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .login-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .login-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .login-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .login-text14 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .login-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .login-mobile-menu1 {
    padding: 16px;
  }

  .login-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .login-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .login-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .login-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .login-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .login-text14 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
