<template>
  <div class="home-container">
    <div class="home-header">
      <header data-thq="thq-navbar" class="home-navbar-interactive navbarContainer">
        <span class="logo">PETCLINICMOCK</span>
        <div data-thq="thq-navbar-nav" class="home-desktop-menu">
          <div v-if="name" class="menu-container1">
          <div data-thq="thq-navbar-nav" class="menu-desktop-menu">
              <span>
                登录用户：
              </span>
              <span class="menu-text02">{{ name }}</span>
          </div>
            <router-link style="margin-top: 10px;" class="home-login buttonFilled" to="/menu"> 进入菜单 </router-link>
            <button style="margin-top: 10px;" class="home-login buttonFilled" @click="logout"> 登出系统 </button>
        </div>
          <div v-else class="home-buttons">
            <router-link to="/login" class="home-login buttonFlat">
              登录
            </router-link>
            <router-link to="/register" class="home-register buttonFilled">
              注册
            </router-link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="home-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z">
            </path>
          </svg>
        </div>
      </header>
    </div>
    <div class="home-hero">
      <div class="home-hero1 heroContainer">
        <div class="home-container1">
          <h1 class="home-hero-heading heading1">
            <vue-typer :text='["PetClinicMock", "以全新的方式，定义宠物医疗培训"]' :repeat='Infinity' :shuffle='false'
              initial-action='typing' :pre-type-delay='70' :type-delay='70' :pre-erase-delay='2000' :erase-delay='250'
              erase-style='select-all' :erase-on-complete='false' caret-animation='smooth'></vue-typer>
          </h1>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <footer class="home-footer1 footerContainer">
        <div class="home-container2">
          <span class="logo">PETCLINICMOCK</span>
        </div>
        <div class="home-separator"></div>
        <div class="home-container3">
          <span class="bodySmall home-text14">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {},
  data() {
    return {
      name:localStorage.getItem('username'),

    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.name = '';
    }
  },
  metaInfo: {
    title: 'PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.menu-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.menu-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display:flex;
  align-items: space-between;
  flex-direction: column;
}
.menu-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.home-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.home-navbar-interactive {
  justify-content: space-between;
}

.home-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.home-buttons {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-end;
}

.home-login {
  margin-right: 32px;
  text-decoration: none;
}

.home-register {
  text-decoration: none;
}

.home-burger-menu {
  display: none;
}

.home-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.home-mobile-menu1 {
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

.home-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.home-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.home-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.home-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.home-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}

.home-hero1 {
  height: 667px;
}

.home-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.home-hero-heading {
  max-width: 800px;
  text-align: center;
}

.home-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.home-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-footer1 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-radius: var(--dl-radius-radius-radius4);
}

.home-container2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.home-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}

.home-nav321 {
  margin-left: var(--dl-space-space-unit);
}

.home-nav421 {
  margin-left: var(--dl-space-space-unit);
}

.home-separator {
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

.home-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.home-navlink {
  color: var(--dl-color-primary-700);
  border-width: 0px;
  text-decoration: none;
  background-color: transparent;
}

@media(max-width: 991px) {
  .home-hero1 {
    flex-direction: column;
  }

  .home-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .home-hero-heading {
    text-align: center;
  }

  .home-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}

@media(max-width: 767px) {
  .home-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .home-desktop-menu {
    display: none;
  }

  .home-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .home-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .home-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .home-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .home-text14 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .home-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .home-mobile-menu1 {
    padding: 16px;
  }

  .home-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .home-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .home-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .home-text14 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
