<template>
  <div class="pharmacy-container">
    <div class="pharmacy-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer pharmacy-navbar-interactive"
      >
        <router-link to="/menu" class="pharmacy-logo logo">PETCLINICMock</router-link>
        <div class="pharmacy-container1">
          <div data-thq="thq-navbar-nav" class="pharmacy-desktop-menu">
            <span>
              <span>
                Logged in as
              </span>
              <span class="pharmacy-text02">{{name}}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> logout </button>
          </div>
        </div>
      </header>
    </div>
    <div class="pharmacy-container2"></div>
    <div class="pharmacy-hero heroContainer">
      <div class="pharmacy-container3">
        <h1 class="pharmacy-hero-heading">
          <span class="heading1">
            Pharmacy:
          </span>
          <span class="pharmacy-text04">Medicine 1</span>
        </h1>
      </div>
    </div>
    <div class="pharmacy-hero1 heroContainer">
      <h1 class="pharmacy-hero-heading1">
        <span class="heading1">Introduction</span>
        <br />
      </h1>
      <div class="pharmacy-container4">
        <span class="pharmacy-text21 bodyLarge">
          准备药物，选择注射部位，进行注射操作。
        </span>
      </div>
    </div>
    <div class="pharmacy-footer">
      <footer class="pharmacy-footer1 footerContainer">
        <div class="pharmacy-container5">
          <router-link to="/menu" class="pharmacy-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="pharmacy-separator"></div>
        <div class="pharmacy-container6">
          <span class="bodySmall pharmacy-text22">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pharmacy',
  props: {},
  data() {
    return {
      raw0scw: ' ',
      name:localStorage.getItem('username'),
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/');
    }
  },
  metaInfo: {
    title: 'Pharmacy - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'Pharmacy - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.pharmacy-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.pharmacy-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.pharmacy-logo {
  text-decoration: none;
}
.pharmacy-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.pharmacy-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.pharmacy-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.pharmacy-burger-menu {
  display: none;
}
.pharmacy-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.pharmacy-mobile-menu1 {
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
.pharmacy-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.pharmacy-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.pharmacy-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pharmacy-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.pharmacy-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.pharmacy-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.pharmacy-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.pharmacy-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.pharmacy-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.pharmacy-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.pharmacy-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.pharmacy-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.pharmacy-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.pharmacy-container2 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.pharmacy-hero {
  padding-bottom: var(--dl-space-space-sixunits);
}
.pharmacy-container3 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.pharmacy-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.pharmacy-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}
.pharmacy-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.pharmacy-hero1 {
  padding-top: var(--dl-space-space-sixunits);
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.pharmacy-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.pharmacy-container4 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.pharmacy-text21 {
  color: var(--dl-color-gray-white);
}
.pharmacy-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pharmacy-footer1 {
  height: 246;
}
.pharmacy-container5 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.pharmacy-logo2 {
  text-decoration: none;
}
.pharmacy-separator {
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
.pharmacy-container6 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .pharmacy-hero {
    flex-direction: column;
  }
  .pharmacy-container3 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .pharmacy-hero-heading {
    text-align: center;
  }
  .pharmacy-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .pharmacy-hero1 {
    flex-direction: column;
  }
  .pharmacy-hero-heading1 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .pharmacy-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .pharmacy-desktop-menu {
    display: none;
  }
  .pharmacy-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pharmacy-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .pharmacy-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .pharmacy-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .pharmacy-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .pharmacy-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .pharmacy-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .pharmacy-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .pharmacy-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .pharmacy-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .pharmacy-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .pharmacy-text22 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .pharmacy-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .pharmacy-mobile-menu1 {
    padding: 16px;
  }
  .pharmacy-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .pharmacy-container3 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .pharmacy-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .pharmacy-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .pharmacy-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .pharmacy-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .pharmacy-text22 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
