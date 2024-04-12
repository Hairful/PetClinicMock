<template>
  <div class="admin-role-play-menu-container">
    <div class="admin-role-play-menu-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer admin-role-play-menu-navbar-interactive"
      >
        <router-link to="/menu" class="admin-role-play-menu-logo logo">
          PETCLINICMock
        </router-link>
        <div>
        <div data-thq="thq-navbar-nav" class="admin-role-play-menu-desktop-menu">
          <span>
            <span>
              登录用户：
              <span v-html="rawl4zz"></span>
            </span>
            <span class="admin-role-play-menu-text02">{{ name }}</span>
          </span>
        </div>
        <div>
          <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
        </div>
        </div>
      </header>
    </div>
    <div class="admin-role-play-menu-container1"></div>
    <div class="heroContainer admin-role-play-menu-hero">
      <div class="admin-role-play-menu-container2">
        <h1 class="admin-role-play-menu-hero-heading heading1">
          角色扮演管理
        </h1>
      </div>
    </div>
    <div class="admin-role-play-menu-container3">
      <router-link to="/admin-menu" class="admin-role-play-menu-navlink button">
        返回管理员菜单
      </router-link>
    </div>
    <div class="admin-role-play-menu-hero1 heroContainer">
      <h1 class="admin-role-play-menu-hero-heading1">
        <span class="heading1">选择角色</span>
        <br />
      </h1>
      <div class="admin-role-play-menu-container4">
        <div class="admin-role-play-menu-container5">
          <router-link
          :to="{ path: '/admin-role-play-list', query: { role: '前台' } }"
            class="admin-role-play-menu-navlink3 button"
          >
            <span class="heading3">前台</span>
          </router-link>
          <router-link
            :to="{ path: '/admin-role-play-list', query: { role: '医助' } }"
            class="admin-role-play-menu-navlink3 button"
          >
            <span class="heading3">
              <span>医助</span>
              <br />
            </span>
          </router-link>
          <router-link
          :to="{ path: '/admin-role-play-list', query: { role: '医生' } }"
            class="admin-role-play-menu-navlink3 button"
          >
            <span class="heading3">医生</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="admin-role-play-menu-footer">
      <footer class="admin-role-play-menu-footer1 footerContainer">
        <div class="admin-role-play-menu-container6">
          <router-link to="/menu" class="admin-role-play-menu-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="admin-role-play-menu-separator"></div>
        <div class="admin-role-play-menu-container7">
          <span class="bodySmall admin-role-play-menu-text24">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminRolePlayMenu',
  props: {},
  data() {
    return {
      rawl4zz: ' ',
      rawdfv6: ' ',
      raw64ur: ' ',
      rawza51: ' ',
      rawpc08: ' ',
      rawupn0: ' ',
      rawbggx: ' ',
      raw4mlw: ' ',
      name:localStorage.getItem('username'),
    }
  },
  metaInfo: {
    title: 'AdminRolePlayMenu - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'AdminRolePlayMenu - PetClinicMock',
      },
    ],
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push('/');
    },
  },
}
</script>

<style scoped>
.admin-role-play-menu-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.admin-role-play-menu-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.admin-role-play-menu-logo {
  text-decoration: none;
}
.admin-role-play-menu-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.admin-role-play-menu-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.admin-role-play-menu-burger-menu {
  display: none;
}
.admin-role-play-menu-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-role-play-menu-mobile-menu1 {
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
.admin-role-play-menu-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-role-play-menu-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.admin-role-play-menu-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-role-play-menu-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-role-play-menu-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.admin-role-play-menu-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-role-play-menu-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-role-play-menu-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-role-play-menu-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-role-play-menu-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.admin-role-play-menu-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-role-play-menu-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-role-play-menu-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.admin-role-play-menu-container1 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-role-play-menu-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-role-play-menu-hero-heading {
  max-width: 800px;
  text-align: center;
}
.admin-role-play-menu-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.admin-role-play-menu-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.admin-role-play-menu-navlink {
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
.admin-role-play-menu-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.admin-role-play-menu-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.admin-role-play-menu-container4 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.admin-role-play-menu-container5 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.admin-role-play-menu-navlink1 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.admin-role-play-menu-navlink2 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.admin-role-play-menu-navlink3 {
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
.admin-role-play-menu-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-role-play-menu-footer1 {
  height: 246;
}
.admin-role-play-menu-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-role-play-menu-logo2 {
  text-decoration: none;
}
.admin-role-play-menu-separator {
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
.admin-role-play-menu-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .admin-role-play-menu-hero {
    flex-direction: column;
  }
  .admin-role-play-menu-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .admin-role-play-menu-hero-heading {
    text-align: center;
  }
  .admin-role-play-menu-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .admin-role-play-menu-hero1 {
    flex-direction: column;
  }
  .admin-role-play-menu-hero-heading1 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .admin-role-play-menu-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-desktop-menu {
    display: none;
  }
  .admin-role-play-menu-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .admin-role-play-menu-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-role-play-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-role-play-menu-text24 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .admin-role-play-menu-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-mobile-menu1 {
    padding: 16px;
  }
  .admin-role-play-menu-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-role-play-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-role-play-menu-text24 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
