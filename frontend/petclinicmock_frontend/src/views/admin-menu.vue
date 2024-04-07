<template>
  <div class="admin-menu-container">
    <div class="admin-menu-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer admin-menu-navbar-interactive"
      >
        <router-link to="/menu" class="admin-menu-logo logo">
          PETCLINICMock
        </router-link>
        <div class="admin-menu-container1">
          <div data-thq="thq-navbar-nav" class="admin-menu-desktop-menu">
            <span>
              <span>
                Logged in as
              </span>
              <span class="admin-menu-text02">Allen</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> logout </button>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-menu-hero">
      <div class="admin-menu-hero1 heroContainer">
        <div class="admin-menu-container2">
          <h1 class="admin-menu-hero-heading">
            <span class="heading1">管理员菜单</span>
            <br />
          </h1>
        </div>
        <div class="admin-menu-container3">
          <div class="admin-menu-container4">
            <router-link
              to="/admin-user"
              class="admin-menu-navlink3 button"
            >
              <span class="heading3">
                <span>用户</span>
                <br />
              </span>
            </router-link>
            <router-link
              to="/admin-virtual-tour"
              class="admin-menu-navlink3 button"
            >
              <span class="heading3">
                <span>3D虚拟导览</span>
                <br />
              </span>
            </router-link>
          </div>
          <div class="admin-menu-container5">
            <router-link
              to="/admin-case-study-list"
              class="admin-menu-navlink3 button"
            >
              <span class="heading3">
                <span>病例学习</span>
                <br />
              </span>
            </router-link>
            <router-link to="/admin-quiz-list" class="admin-menu-navlink3 button">
              <span class="heading3">测试</span>
            </router-link>
          </div>
          <div class="admin-menu-container5">
            <router-link
              to="/admin-role-play-menu"
              class="admin-menu-navlink3 button"
            >
              <span class="heading3">
                <span>角色扮演</span>
                <br />
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="admin-menu-footer">
      <footer class="admin-menu-footer1 footerContainer">
        <div class="admin-menu-container6">
          <router-link to="/menu" class="admin-menu-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="admin-menu-separator"></div>
        <div class="admin-menu-container7">
          <span class="bodySmall admin-menu-text29">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMenu',
  props: {},
  data() {
    return {
      rawvio9: ' ',
      raw6qpn: ' ',
      rawuosz: ' ',
      raw5klp: ' ',
      rawrxqo: ' ',
      raw7b52: ' ',
      rawi76z: ' ',
      rawufkj: ' ',
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/');
    }
  },
  metaInfo: {
    title: 'AdminMenu - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'AdminMenu - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.admin-menu-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.admin-menu-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.admin-menu-logo {
  text-decoration: none;
}
.admin-menu-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.admin-menu-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.admin-menu-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.admin-menu-burger-menu {
  display: none;
}
.admin-menu-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-menu-mobile-menu1 {
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
.admin-menu-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-menu-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.admin-menu-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-menu-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-menu-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.admin-menu-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-menu-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-menu-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-menu-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-menu-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.admin-menu-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-menu-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-menu-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.admin-menu-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.admin-menu-hero1 {
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.admin-menu-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-menu-hero-heading {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.admin-menu-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.admin-menu-container3 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.admin-menu-container4 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.admin-menu-navlink {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.admin-menu-navlink1 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.admin-menu-container5 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.admin-menu-navlink2 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.admin-menu-navlink3 {
  width: 180px;
  height: 100px;
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
.admin-menu-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-menu-footer1 {
  height: 246;
}
.admin-menu-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-menu-logo2 {
  text-decoration: none;
}
.admin-menu-separator {
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
.admin-menu-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .admin-menu-hero1 {
    flex-direction: column;
  }
  .admin-menu-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .admin-menu-hero-heading {
    text-align: center;
  }
  .admin-menu-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .admin-menu-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-menu-desktop-menu {
    display: none;
  }
  .admin-menu-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .admin-menu-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-menu-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-menu-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-menu-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-menu-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-menu-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .admin-menu-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-menu-text29 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .admin-menu-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .admin-menu-mobile-menu1 {
    padding: 16px;
  }
  .admin-menu-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .admin-menu-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-menu-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .admin-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-menu-text29 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
