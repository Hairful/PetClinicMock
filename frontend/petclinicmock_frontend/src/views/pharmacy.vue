<template>
  <div class="pharmacy-container">
    <div class="pharmacy-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer pharmacy-navbar-interactive"
      >
        <router-link to="/" class="pharmacy-logo logo">PETCLINICMock</router-link>
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
        <div data-thq="thq-burger-menu" class="pharmacy-burger-menu">
          <svg viewBox="0 0 1024 1024" class="pharmacy-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="pharmacy-mobile-menu1 mobileMenu">
          <div class="pharmacy-nav">
            <div class="pharmacy-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="pharmacy-close-menu">
                <svg viewBox="0 0 1024 1024" class="pharmacy-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="pharmacy-links">
              <span class="pharmacy-nav12 bodySmall">Home</span>
              <span class="pharmacy-nav22 bodySmall">Services</span>
              <span class="pharmacy-nav32 bodySmall">Our Team</span>
              <span class="pharmacy-nav42 bodySmall">Contact</span>
            </nav>
            <div class="pharmacy-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="pharmacy-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="pharmacy-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="pharmacy-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
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
          <router-link to="/" class="pharmacy-logo2 logo">
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
  border: 2px dashed rgba(120, 120, 120, 0.4);
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
