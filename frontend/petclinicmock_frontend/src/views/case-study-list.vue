<template>
  <div class="case-study-list-container">
    <div class="case-study-list-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer case-study-list-navbar-interactive"
      >
        <router-link to="/" class="case-study-list-logo logo">
          PETCLINICMock
        </router-link>
        <div>
        <div data-thq="thq-navbar-nav" class="case-study-list-desktop-menu">
          <span>
            <span>
              Logged in as
              <span v-html="raw04s3"></span>
            </span>
            <span class="case-study-list-text02">{{name}}</span>
          </span>
        </div>
        <div>
          <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> logout </button>
        </div>
        </div>
        <div data-thq="thq-burger-menu" class="case-study-list-burger-menu">
          <svg viewBox="0 0 1024 1024" class="case-study-list-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="case-study-list-mobile-menu1 mobileMenu"
        >
          <div class="case-study-list-nav">
            <div class="case-study-list-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="case-study-list-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  class="case-study-list-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="case-study-list-links">
              <span class="case-study-list-nav12 bodySmall">Home</span>
              <span class="case-study-list-nav22 bodySmall">Services</span>
              <span class="case-study-list-nav32 bodySmall">Our Team</span>
              <span class="case-study-list-nav42 bodySmall">Contact</span>
            </nav>
            <div class="case-study-list-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="case-study-list-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="case-study-list-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="case-study-list-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="case-study-list-container1"></div>
    <div class="heroContainer case-study-list-hero">
      <div class="case-study-list-container2">
        <h1 class="case-study-list-hero-heading">
          <span class="heading1">
            Case Study:
            <span v-html="rawndcw"></span>
          </span>
          <span class="case-study-list-text04">Type 1</span>
        </h1>
      </div>
    </div>
    <div class="case-study-list-container3">
      <router-link to="/role-play-menu" class="case-study-list-navlink button">
        Choose Disease Type
      </router-link>
      <router-link to="/menu" class="case-study-list-navlink1 button">
        Menu
      </router-link>
    </div>
    <div class="case-study-list-hero1 heroContainer">
      <h1 class="case-study-list-hero-heading1">
        <span class="heading1">Choose a Disease</span>
        <br />
      </h1>
      <div class="case-study-list-container4">
        <ul class="case-study-list-ul list">
          <li class="case-study-list-li list-item Content">
            <router-link
              to="/case-study-detail"
              class="case-study-list-navlink2 bodyLarge button"
            >
              Disease 1
            </router-link>
          </li>
          <li class="case-study-list-li1 Content list-item">
            <router-link
              to="/case-study-detail"
              class="case-study-list-navlink3 button bodyLarge"
            >
              Disease 2
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="case-study-list-footer">
      <footer class="case-study-list-footer1 footerContainer">
        <div class="case-study-list-container5">
          <router-link to="/" class="case-study-list-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="case-study-list-separator"></div>
        <div class="case-study-list-container6">
          <span class="bodySmall case-study-list-text21">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyList',
  props: {},
  data() {
    return {
      raw04s3: ' ',
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
    title: 'CaseStudyList - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'CaseStudyList - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.case-study-list-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.case-study-list-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.case-study-list-logo {
  text-decoration: none;
}
.case-study-list-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.case-study-list-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.case-study-list-burger-menu {
  display: none;
}
.case-study-list-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.case-study-list-mobile-menu1 {
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
.case-study-list-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-list-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.case-study-list-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-study-list-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.case-study-list-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-list-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-list-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-list-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-list-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-list-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.case-study-list-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.case-study-list-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.case-study-list-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.case-study-list-container1 {
  width: 200px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-list-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.case-study-list-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.case-study-list-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}
.case-study-list-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.case-study-list-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.case-study-list-navlink {
  color: var(--dl-color-gray-white);
  font-size: 20px;
  align-self: center;
  font-style: normal;
  font-weight: 600;
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  border-radius: var(--dl-radius-radius-radius8);
  text-decoration: none;
  background-color: var(--dl-color-custom-primary2);
}
.case-study-list-navlink1 {
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
.case-study-list-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.case-study-list-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.case-study-list-container4 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.case-study-list-ul {
  width: 285px;
  position: relative;
}
.case-study-list-li {
  color: var(--dl-color-gray-white);
  width: auto;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  background-color: var(--dl-color-custom-primary2);
  list-style-image: none;
  list-style-position: outside;
}
.case-study-list-navlink2 {
  color: var(--dl-color-gray-white);
  text-align: left;
  border-color: var(--dl-color-gray-white);
  border-width: 0px;
  border-radius: 0px;
  text-decoration: none;
  background-color: transparent;
}
.case-study-list-li1 {
  color: var(--dl-color-gray-white);
  width: auto;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  background-color: var(--dl-color-custom-primary2);
  list-style-image: none;
  list-style-position: outside;
}
.case-study-list-navlink3 {
  color: var(--dl-color-gray-white);
  text-align: left;
  border-color: var(--dl-color-gray-white);
  border-width: 0px;
  border-radius: 0px;
  text-decoration: none;
  background-color: transparent;
}
.case-study-list-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-study-list-footer1 {
  height: 246;
}
.case-study-list-container5 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.case-study-list-logo2 {
  text-decoration: none;
}
.case-study-list-separator {
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
.case-study-list-container6 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .case-study-list-hero {
    flex-direction: column;
  }
  .case-study-list-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .case-study-list-hero-heading {
    text-align: center;
  }
  .case-study-list-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .case-study-list-hero1 {
    flex-direction: column;
  }
  .case-study-list-hero-heading1 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .case-study-list-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-list-desktop-menu {
    display: none;
  }
  .case-study-list-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .case-study-list-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-list-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-list-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-list-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-list-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-list-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .case-study-list-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-list-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .case-study-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .case-study-list-text21 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .case-study-list-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .case-study-list-mobile-menu1 {
    padding: 16px;
  }
  .case-study-list-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .case-study-list-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-list-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .case-study-list-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .case-study-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .case-study-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .case-study-list-text21 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
