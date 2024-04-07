<template>
  <div class="register-container">
    <div class="register-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer register-navbar-interactive"
      >
        <router-link to="/menu" class="register-logo logo">PETCLINICMock</router-link>
        <div data-thq="thq-burger-menu" class="register-burger-menu">
          <svg viewBox="0 0 1024 1024" class="register-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
      </header>
    </div>
    <div class="register-hero">
      <div class="register-hero1 heroContainer">
        <div class="register-container1">
          <h1 class="register-hero-heading heading1">
            <span>
              注册
            </span>
            <br />
            <span>以获取全新的体验</span>
          </h1>
        </div>
        <el-form :model="formLogin" class="register-form" method="get" :rules="rules" ref="formLogin">
        <el-form-item prop="name" class="register-textinput">
          <el-input
            prop="name"
            type="text"
            placeholder="请输入用户名"
            autocomplete="true"
            v-model="formLogin.name"
          /></el-form-item>
        <el-form-item prop="password" class="register-textinput">
          <el-input
            prop="password"
            type="password"
            placeholder="请输入密码"
            show-password
            autocomplete="false"
            v-model="formLogin.password"
          />
        </el-form-item>
        <el-form-item prop="repeat_password" class="register-textinput">
          <el-input
            prop="repeat_password"
            type="repeat_password"
            placeholder="请重复输入密码"
            show-password
            autocomplete="false"
            v-model="formLogin.repeat_password"
          />
        </el-form-item>
          <table>
            <tr>
              <td>
                <el-input
                  class="register-validcode"
                  type="text"
                  placeholder="请输入验证码"
                  v-model="formLogin.code"
                />
              </td>
              <td
                width="100%" 
                @click="refreshCode">
              <ValidCode class="register-code" :identifyCode="identifyCode"></ValidCode>
              </td>
            </tr>
          </table>
          <el-button class="register-register2 buttonFilled" @click="submit">注册！</el-button>
        </el-form> 
      </div>
    </div>
    <div class="register-footer">
      <footer class="register-footer1 footerContainer">
        <div class="register-container2">
          <router-link to="/menu" class="register-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="register-separator"></div>
        <div class="register-container3">
          <span class="bodySmall register-text20">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import ValidCode from '../components/validcode.vue'
import axios from 'axios'
export default {
  name: 'Register',
  props: {},
  components: {
    ValidCode,
  },
  data() {
    var validateCheckPass = (rule,value,callback)=>{
        if (value === '') {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.formLogin.password) {
            callback(new Error('两次输入密码不一致!'));
        } else {
            callback();
        }
    };
    return {
      formLogin: {
        code: "", //验证码输入框
        name: "",
        password: "",
        repeat_password: "",
      },
      rules: {
      name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern:"^[\\u4e00-\\u9fa5\\w]{2,20}$", message: '用户名长度在 2~20 位不含特殊字符', trigger: 'blur' }
      ],
      password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern:"^\\w{6,18}$", message: '密码长度在 6~18 位不含特殊字符', trigger: 'blur',  }
      ],
      repeat_password: [
          {validator: validateCheckPass, trigger: 'blur'}
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
    // HTTP request
    async register() {
      try {
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            console.log(config);
            return config;
          }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
        const response = await axios.post('/register', {
          userName: this.formLogin.name,
          password: this.formLogin.password,
        });

        if (response.status === 200) {
          // Register successful
          this.$router.push('/login'); // Navigate to menu page
        } 
      } catch (error) {
        // Handle error
        this.$message.warning('用户名已被使用');
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
          console.log("用户输入的验证码:",this.formLogin.code);
          console.log('是否验证通过:',this.identifyCode==this.formLogin.code);
          if(!(this.identifyCode==this.formLogin.code))
          {
            alert('验证码错误！')
            this.refreshCode() 
          }
          else {
            this.register();
          }
         } else {
             console.log('校验失败');
             return false;
         }
     });
    }
  },
  metaInfo: {
    title: 'Register - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'Register - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.register-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.register-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.register-logo {
  text-decoration: none;
}
.register-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.register-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.register-burger-menu {
  display: none;
}
.register-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.register-mobile-menu1 {
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
.register-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.register-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.register-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.register-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.register-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.register-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.register-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.register-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.register-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.register-hero1 {
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.register-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.register-hero-heading {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.register-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.register-form {
  width: 387px;
  height: 310px;
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
.register-textinput {
  width: 300px;
  height: 44px;
  align-self: left;
  margin-left: 40px;
  font-family: "Noto Sans";
  margin-bottom: var(--dl-space-space-unit);

}
.register-textinput1 {
  width: 300px;
  height: 44px;
  align-self: left;
  margin-left: 40px;
  font-family: "Noto Sans";
  margin-bottom: var(--dl-space-space-unit);
}
.register-validcode {
  width: 200px;
  height: 44px;
  align-self: left;
  margin-left: 37px;
  font-family: "Noto Sans";
  margin-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}
.register-code {
  margin-left: 10px;
  margin-bottom: var(--dl-space-space-unit);
}
.register-register2 {
  height: 34px;
  width: 100px;
  align-self: center;
}
.register-register1 {
  height: 34px;
  align-self: center;
  background-color: var(--dl-color-custom-primary1);
}
.register-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-footer1 {
  height: 246;
}
.register-container2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.register-logo2 {
  text-decoration: none;
}
.register-separator {
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
.register-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .register-hero1 {
    flex-direction: column;
  }
  .register-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .register-hero-heading {
    text-align: center;
  }
  .register-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .register-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .register-desktop-menu {
    display: none;
  }
  .register-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .register-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .register-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .register-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .register-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .register-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .register-text20 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .register-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .register-mobile-menu1 {
    padding: 16px;
  }
  .register-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .register-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .register-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .register-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .register-text20 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
