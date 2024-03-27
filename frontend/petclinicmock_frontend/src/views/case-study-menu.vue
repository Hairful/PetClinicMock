<template>
  <div class="case-study-menu-container">
    <div class="case-study-menu-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer case-study-menu-navbar-interactive"
      >
        <router-link to="/" class="case-study-menu-logo logo">
          PETCLINICMock
        </router-link>
        <div data-thq="thq-navbar-nav" class="case-study-menu-desktop-menu">
          <span>
            <span>
              Logged in as
              <span v-html="rawf7m2"></span>
            </span>
            <span class="case-study-menu-text02">Allen</span>
          </span>
        </div>
        <div data-thq="thq-burger-menu" class="case-study-menu-burger-menu">
          <svg viewBox="0 0 1024 1024" class="case-study-menu-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="case-study-menu-mobile-menu1 mobileMenu"
        >
          <div class="case-study-menu-nav">
            <div class="case-study-menu-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="case-study-menu-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  class="case-study-menu-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="case-study-menu-links">
              <span class="case-study-menu-nav12 bodySmall">Home</span>
              <span class="case-study-menu-nav22 bodySmall">Services</span>
              <span class="case-study-menu-nav32 bodySmall">Our Team</span>
              <span class="case-study-menu-nav42 bodySmall">Contact</span>
            </nav>
            <div class="case-study-menu-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="case-study-menu-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="case-study-menu-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="case-study-menu-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="case-study-menu-container1"></div>
    <div class="heroContainer case-study-menu-hero">
      <div class="case-study-menu-container2">
        <h1 class="case-study-menu-hero-heading heading1">Case Study</h1>
      </div>
    </div>
    <div class="case-study-menu-container3">
      <router-link to="/menu" class="case-study-menu-navlink button">
        Menu
      </router-link>
    </div>
    <div class="case-study-menu-hero1 heroContainer">
      <h1 class="case-study-menu-hero-heading1 heading1">
        <span class="heading1">Choose a Type of Disease</span>
        <br />
      </h1>
      <div class="case-study-menu-container4">
        <div class="case-study-menu-container5">
          <router-link
            to="/case-study-list"
            class="case-study-menu-navlink1 button"
          >
            <span class="heading3">Type 1</span>
          </router-link>
          <router-link
            to="/case-study-list"
            class="case-study-menu-navlink2 button"
          >
            <span class="heading3">
              <span>Type 2</span>
              <br />
            </span>
          </router-link>
          <router-link
            to="/case-study-list"
            class="case-study-menu-navlink3 button"
          >
            <span class="heading3">Type 3</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="case-study-menu-footer">
      <footer class="case-study-menu-footer1 footerContainer">
        <div class="case-study-menu-container6">
          <router-link to="/" class="case-study-menu-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="case-study-menu-separator"></div>
        <div class="case-study-menu-container7">
          <span class="bodySmall case-study-menu-text24">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyMenu',
  props: {},
  data() {
    return {
      rawf7m2: ' ',
      rawb3zd: ' ',
      rawjekz: ' ',
      rawh8ql: ' ',
      raw1b3v: ' ',
      raw5sv7: ' ',
      raw2f87: ' ',
      rawll5g: ' ',
    }
  },
  metaInfo: {
    title: 'CaseStudyMenu - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'CaseStudyMenu - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.case-study-menu-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.case-study-menu-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.case-study-menu-logo {
  text-decoration: none;
}
.case-study-menu-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.case-study-menu-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.case-study-menu-burger-menu {
  display: none;
}
.case-study-menu-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.case-study-menu-mobile-menu1 {
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
.case-study-menu-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-menu-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.case-study-menu-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-study-menu-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.case-study-menu-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-menu-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-menu-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-menu-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-menu-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-menu-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.case-study-menu-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.case-study-menu-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.case-study-menu-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.case-study-menu-container1 {
  width: 200px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-menu-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.case-study-menu-hero-heading {
  max-width: 800px;
  text-align: center;
}
.case-study-menu-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.case-study-menu-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.case-study-menu-navlink {
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
.case-study-menu-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.case-study-menu-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.case-study-menu-container4 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.case-study-menu-container5 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.case-study-menu-navlink1 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.case-study-menu-navlink2 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.case-study-menu-navlink3 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.case-study-menu-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-study-menu-footer1 {
  height: 246;
}
.case-study-menu-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.case-study-menu-logo2 {
  text-decoration: none;
}
.case-study-menu-separator {
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
.case-study-menu-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .case-study-menu-hero {
    flex-direction: column;
  }
  .case-study-menu-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .case-study-menu-hero-heading {
    text-align: center;
  }
  .case-study-menu-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .case-study-menu-hero1 {
    flex-direction: column;
  }
  .case-study-menu-hero-heading1 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .case-study-menu-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-menu-desktop-menu {
    display: none;
  }
  .case-study-menu-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .case-study-menu-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-menu-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-menu-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-menu-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-menu-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-menu-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .case-study-menu-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-menu-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .case-study-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .case-study-menu-text24 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .case-study-menu-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .case-study-menu-mobile-menu1 {
    padding: 16px;
  }
  .case-study-menu-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .case-study-menu-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-menu-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .case-study-menu-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .case-study-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .case-study-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .case-study-menu-text24 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
