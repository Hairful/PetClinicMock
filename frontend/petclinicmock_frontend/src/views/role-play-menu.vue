<template>
  <div class="role-play-menu-container">
    <Chatbot />
    <div class="role-play-menu-header">
      <header data-thq="thq-navbar" class="navbarContainer role-play-menu-navbar-interactive">
        <router-link to="/menu" class="role-play-menu-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <router-link to="/menu" class="head-router"> 菜单 </router-link>
          <router-link to="/virtual-tour" class="head-router"> 导览 </router-link>
          <router-link to="/case-study-menu" class="head-router"> 学习 </router-link>
          <router-link to="/role-play-menu" class="head-router-current"> 扮演 </router-link>
          <router-link to="/quiz-list" class="head-router"> 测试 </router-link>
        </div>
        <div>
          <div data-thq="thq-navbar-nav" class="role-play-menu-desktop-menu">
            <span>
              <span>
                登录用户：
              </span>
              <span class="role-play-menu-text02">{{ name }}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="heroContainer">
      <div class="shadowContainer">
        <div class="containerLeft underLine">
          <div class="heading1">
            <span class="heading2">选择一个角色</span>
          </div>
        </div>
        <div class="containerLeft">
          <div class="labelContainer">
            <router-link to="/menu" class="routerlink">>主菜单</router-link>
            <router-link to="/role-play-menu" class="routerlink">>角色扮演</router-link>
          </div>
        </div>
        <div class="containerCenter">
          <div class="role-play-menu-container5">
            <router-link :to="{ path: '/role-play-list', query: { role: '前台' } }"
              class="role-play-menu-navlink1 button-common">
              <img src="@/assets/qiantai_1.png" style="width: 100px; height: 100px; margin-right: 50px;" />
              <span class="heading3">前台</span>
            </router-link>
            <router-link :to="{ path: '/role-play-list', query: { role: '医助' } }"
              class="role-play-menu-navlink1 button-common">
              <img src="@/assets/hushi-01.png" style="width: 100px; height: 100px; margin-right: 50px;" />
              <span class="heading3">医助</span>
            </router-link>
            <router-link :to="{ path: '/role-play-list', query: { role: '医生' } }"
              class="role-play-menu-navlink1 button-common">
              <img src="@/assets/yisheng.png" style="width: 100px; height: 100px; margin-right: 50px;" />
              <span class="heading3">医生</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="role-play-menu-footer">
      <footer class="role-play-menu-footer1 footerContainer">
        <div class="role-play-menu-container6">
          <router-link to="/menu" class="role-play-menu-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="role-play-menu-separator"></div>
        <div class="role-play-menu-container7">
          <span class="bodySmall role-play-menu-text24">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Chatbot from '../components/Chatbot.vue';

export default {
  name: 'RolePlayMenu',
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
    title: 'RolePlayMenu - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'RolePlayMenu - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.head-router {
  width: 50px;
  height: auto;
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
  width: 50px;
  height: auto;
  font-size: 24px;
  font-family: STIX Two Text;
  font-weight: 600;
  line-height: 150%;
  margin-left: 20px;
  border-bottom-color: var(--dl-color-custom-primary1);
  border-bottom-width: 4px;
}

.role-play-menu-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.role-play-menu-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.role-play-menu-logo {
  text-decoration: none;
}

.role-play-menu-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.role-play-menu-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.role-play-menu-burger-menu {
  display: none;
}

.role-play-menu-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.role-play-menu-mobile-menu1 {
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

.role-play-menu-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.role-play-menu-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.role-play-menu-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.role-play-menu-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.role-play-menu-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.role-play-menu-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.role-play-menu-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.role-play-menu-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.role-play-menu-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.role-play-menu-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.role-play-menu-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.role-play-menu-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.role-play-menu-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.role-play-menu-container1 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.role-play-menu-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.role-play-menu-hero-heading {
  max-width: 800px;
  text-align: center;
}

.role-play-menu-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.role-play-menu-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.role-play-menu-navlink {
  color: var(--dl-color-gray-white);
  font-size: 20px;
  align-self: center;
  font-style: normal;
  font-weight: 600;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  text-decoration: none;
  background-color: var(--dl-color-custom-primary2);
}

.role-play-menu-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}

.role-play-menu-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}

.role-play-menu-container4 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.role-play-menu-container5 {
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.role-play-menu-navlink1 {
  width: 500px;
  height: 120px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center
}

.role-play-menu-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.role-play-menu-footer1 {
  height: 246;
}

.role-play-menu-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.role-play-menu-logo2 {
  text-decoration: none;
}

.role-play-menu-separator {
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

.role-play-menu-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .role-play-menu-hero {
    flex-direction: column;
  }

  .role-play-menu-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .role-play-menu-hero-heading {
    text-align: center;
  }

  .role-play-menu-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .role-play-menu-hero1 {
    flex-direction: column;
  }

  .role-play-menu-hero-heading1 {
    text-align: center;
  }
}

@media(max-width: 767px) {
  .role-play-menu-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .role-play-menu-desktop-menu {
    display: none;
  }

  .role-play-menu-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .role-play-menu-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .role-play-menu-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .role-play-menu-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .role-play-menu-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .role-play-menu-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .role-play-menu-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .role-play-menu-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .role-play-menu-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .role-play-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .role-play-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .role-play-menu-text24 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .role-play-menu-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .role-play-menu-mobile-menu1 {
    padding: 16px;
  }

  .role-play-menu-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .role-play-menu-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .role-play-menu-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .role-play-menu-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .role-play-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .role-play-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .role-play-menu-text24 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
