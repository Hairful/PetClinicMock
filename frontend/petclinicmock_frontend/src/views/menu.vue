<template>
  <div class="menu-container">
    <Chatbot />
    <div class="menu-header">
      <header data-thq="thq-navbar" class="navbarContainer menu-navbar-interactive">
        <router-link to="/menu" class="menu-logo logo">PETCLINICMock</router-link>
        <div>
          <router-link to="/menu" class="head-router-current"> 菜单 </router-link>
          <router-link to="/virtual-tour" class="head-router"> 导览 </router-link>
          <router-link to="/case-study-menu" class="head-router"> 学习 </router-link>
          <router-link to="/role-play-menu" class="head-router"> 扮演 </router-link>
          <router-link to="/quiz-list" class="head-router"> 测试 </router-link>
        </div>
        <div class="menu-container1">
          <div data-thq="thq-navbar-nav" class="menu-desktop-menu">
            <span>
              登录用户：
            </span>
            <span class="menu-text02">{{ name }}</span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="heroContainer">
      <div class="menu-container2">
        <h1 class="menu-hero-heading">
          <span class="heading1">选择功能</span>
          <br />
        </h1>
      </div>
      <div class="menu-container3">
        <div class="menu-container4">
          <router-link to="/virtual-tour" class="button-common">
            <img src="@/assets/yiyuan.png" />
            <span class="heading3">
              <span>3D 虚拟导览</span>
              <br />
            </span>
          </router-link>
          <router-link to="/role-play-menu" class="button-common">
            <img src="@/assets/yishengxinxi.png" />
            <span class="heading3">
              <span>角色扮演</span>
              <br />
            </span>
          </router-link>
        </div>
        <div class="menu-container4">
          <router-link to="/case-study-menu" class="button-common">
            <img src="@/assets/xuexi.png" />
            <span class="heading3">
              <span>病例学习</span>
              <br />
            </span>
          </router-link>
          <router-link to="/quiz-list" class="button-common">
            <img src="@/assets/xinxitianxie.png" />
            <span class="heading3">测试</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="menu-footer">
      <footer class="menu-footer1 footerContainer">
        <div class="menu-container6">
          <router-link to="/menu" class="menu-logo2 logo">PETCLINICMOCK</router-link>
        </div>
        <div class="menu-separator"></div>
        <div class="menu-container7">
          <span class="bodySmall menu-text29">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
          <router-link to="/admin-menu" class="menu-navlink4 button">
            管理员菜单
          </router-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Chatbot from '@/components/Chatbot.vue';
export default {
  name: 'Menu',
  props: {},
  components: {
    Chatbot,
  },
  data() {
    return {
      name: localStorage.getItem('username'),
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    }
  },
  metaInfo: {
    title: 'Menu - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'Menu - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.head-router {
  font-size: 24px;
  text-align: center;
  font-family: STIX Two Text;
  font-weight: 400;
  line-height: 150%;
  margin-left: 20px;
}

.head-router:hover {
  color: gray;
}

.head-router-current {
  font-size: 24px;
  font-family: STIX Two Text;
  font-weight: 600;
  line-height: 150%;
  margin-left: 20px;
  border-bottom-color: var(--dl-color-custom-primary1);
  border-bottom-width: 4px;
}

.menu-item {
  width: 400px;
  height: 400px;
}

.menu-navlink4 {
  color: var(--dl-color-primary-700);
  border-width: 0px;
  text-decoration: none;
  background-color: transparent;
}

.menu-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-custom-secondary1);
}

.menu-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.menu-logo {
  text-decoration: none;
}

.menu-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}

.menu-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.menu-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.menu-burger-menu {
  display: none;
}

.menu-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.menu-mobile-menu1 {
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

.menu-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.menu-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.menu-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.menu-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.menu-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.menu-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.menu-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.menu-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.menu-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.menu-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.menu-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.menu-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.menu-hero {
  width: 70%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 3px 3px gray;
}

.menu-hero1 {
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}

.menu-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.menu-hero-heading {
  color: var(--dl-color-gray-black);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}

.menu-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.menu-container3 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.menu-container4 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.menu-navlink {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}

.menu-navlink1 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}

.menu-navlink2 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}

.menu-navlink3 {
  width: 400px;
  height: 250px;
  transition: 0.5s;
  border-radius: 20px;
  color: white;
  background-color: #292929;
  margin-top: var(--dl-space-space-threeunits);
  margin-left: var(--dl-space-space-threeunits);
  margin-right: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-threeunits);
  text-decoration: none;
  display: flex;
  justify-content: center;

  align-items: center
}

.menu-navlink3:hover {
  color: var(--dl-color-gray-white);
  background-color: rgb(49, 144, 245);
}

.menu-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-footer1 {
  height: 246;
}

.menu-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.menu-logo2 {
  text-decoration: none;
}

.menu-separator {
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

.menu-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .menu-hero1 {
    flex-direction: column;
  }

  .menu-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .menu-hero-heading {
    text-align: center;
  }

  .menu-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}

@media(max-width: 767px) {
  .menu-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .menu-desktop-menu {
    display: none;
  }

  .menu-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .menu-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .menu-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .menu-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .menu-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .menu-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .menu-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu-text29 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .menu-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .menu-mobile-menu1 {
    padding: 16px;
  }

  .menu-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .menu-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .menu-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu-text29 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
