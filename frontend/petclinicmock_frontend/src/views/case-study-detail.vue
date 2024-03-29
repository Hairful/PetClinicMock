<template>
  <div class="case-study-detail-container">
    <div class="case-study-detail-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer case-study-detail-navbar-interactive"
      >
        <router-link to="/" class="case-study-detail-logo logo">
          PETCLINICMock
        </router-link>
        <div class="case-study-detail-container01">
          <div data-thq="thq-navbar-nav" class="case-study-detail-desktop-menu">
            <span>
              <span>
                Logged in as
                <span v-html="rawfj20"></span>
              </span>
              <span class="case-study-detail-text02">{{name}}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> logout </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="case-study-detail-burger-menu">
          <svg viewBox="0 0 1024 1024" class="case-study-detail-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="case-study-detail-mobile-menu1 mobileMenu"
        >
          <div class="case-study-detail-nav">
            <div class="case-study-detail-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="case-study-detail-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  class="case-study-detail-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="case-study-detail-links">
              <span class="case-study-detail-nav12 bodySmall">Home</span>
              <span class="case-study-detail-nav22 bodySmall">Services</span>
              <span class="case-study-detail-nav32 bodySmall">Our Team</span>
              <span class="case-study-detail-nav42 bodySmall">Contact</span>
            </nav>
            <div class="case-study-detail-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="case-study-detail-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="case-study-detail-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="case-study-detail-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="case-study-detail-container02"></div>
    <div class="case-study-detail-hero heroContainer">
      <div class="case-study-detail-container03">
        <h1 class="case-study-detail-hero-heading">
          <span class="heading1">
            Case Study:
            <span v-html="rawvn6p"></span>
          </span>
          <span class="case-study-detail-text04">Disease 1</span>
        </h1>
      </div>
    </div>
    <div class="case-study-detail-container04">
      <router-link to="/role-play-list" class="case-study-detail-navlink button">
        Choose Disease
      </router-link>
      <router-link to="/role-play-menu" class="case-study-detail-navlink1 button">
        Choose Disease Type
      </router-link>
      <router-link to="/menu" class="case-study-detail-navlink2 button">
        Menu
      </router-link>
    </div>
    <div class="case-study-detail-hero1 heroContainer">
      <div class="case-study-detail-container05">
        <h1 class="case-study-detail-hero-heading1 heading1">
          <span class="heading1">Introduction</span>
          <br />
        </h1>
        <div class="case-study-detail-container06">
          <span class="case-study-detail-text21 bodyLarge">xxx</span>
          <div class="case-study-detail-container07">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image"
            />
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image01"
            />
          </div>
          <div class="case-study-detail-container08">
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video"
            ></video>
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video01"
            ></video>
          </div>
        </div>
      </div>
      <div class="case-study-detail-container09">
        <h1 class="case-study-detail-hero-heading2 heading1">
          <span class="heading1">Case 1</span>
          <br />
        </h1>
        <div class="case-study-detail-container10">
          <span class="case-study-detail-text24 heading2">Summary</span>
          <span class="case-study-detail-text25 bodyLarge">xxx</span>
          <div class="case-study-detail-container11">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image02"
            />
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image03"
            />
          </div>
          <div class="case-study-detail-container12">
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video02"
            ></video>
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video03"
            ></video>
          </div>
        </div>
        <div class="case-study-detail-container13">
          <span class="case-study-detail-text26 heading2">Examine</span>
          <span class="case-study-detail-text27 bodyLarge">xxx</span>
          <div class="case-study-detail-container14">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image04"
            />
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image05"
            />
          </div>
          <div class="case-study-detail-container15">
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video04"
            ></video>
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video05"
            ></video>
          </div>
        </div>
        <div class="case-study-detail-container16">
          <span class="case-study-detail-text28 heading2">Diagnose</span>
          <span class="case-study-detail-text29 bodyLarge">xxx</span>
          <div class="case-study-detail-container17">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image06"
            />
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image07"
            />
          </div>
          <div class="case-study-detail-container18">
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video06"
            ></video>
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video07"
            ></video>
          </div>
        </div>
        <div class="case-study-detail-container19">
          <span class="case-study-detail-text30 heading2">Treatment</span>
          <span class="case-study-detail-text31 bodyLarge">xxx</span>
          <div class="case-study-detail-container20">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image08"
            />
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="case-study-detail-image09"
            />
          </div>
          <div class="case-study-detail-container21">
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video08"
            ></video>
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              class="case-study-detail-video09"
            ></video>
          </div>
        </div>
        <div class="case-study-detail-container22">
          <span class="case-study-detail-text32 heading2">Pharmacy</span>
          <router-link to="/pharmacy" class="case-study-detail-navlink3">
            <span class="bodyLarge">1. Name, Dosage</span>
            <br />
          </router-link>
        </div>
      </div>
    </div>
    <div class="case-study-detail-footer">
      <footer class="case-study-detail-footer1 footerContainer">
        <div class="case-study-detail-container23">
          <router-link to="/" class="case-study-detail-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="case-study-detail-separator"></div>
        <div class="case-study-detail-container24">
          <span class="bodySmall case-study-detail-text35">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyDetail',
  props: {},
  data() {
    return {
      rawfj20: ' ',
      rawvn6p: ' ',
      rawladw: ' ',
      rawavtc: ' ',
      rawa98j: ' ',
      raw1zgt: ' ',
      raw2v0y: ' ',
      raw4oma: ' ',
      rawlrae: ' ',
      diseaseID: ' ',
      diseaseName: ' ',
      name:localStorage.getItem('username'),
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/');
    }
  },
  created() {
    this.diseaseID = this.$route.query.diseaseID;
    this.diseaseName = this.$route.query.diseaseName;
  },
  metaInfo: {
    title: 'CaseStudyDetail - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'CaseStudyDetail - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.case-study-detail-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.case-study-detail-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.case-study-detail-logo {
  text-decoration: none;
}
.case-study-detail-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.case-study-detail-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.case-study-detail-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.case-study-detail-burger-menu {
  display: none;
}
.case-study-detail-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.case-study-detail-mobile-menu1 {
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
.case-study-detail-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.case-study-detail-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-study-detail-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.case-study-detail-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-detail-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-detail-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-detail-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-detail-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.case-study-detail-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.case-study-detail-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.case-study-detail-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.case-study-detail-container02 {
  width: 200px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-hero {
  padding-bottom: var(--dl-space-space-sixunits);
}
.case-study-detail-container03 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.case-study-detail-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.case-study-detail-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}
.case-study-detail-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.case-study-detail-container04 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.case-study-detail-navlink {
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
.case-study-detail-navlink1 {
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
.case-study-detail-navlink2 {
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
.case-study-detail-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.case-study-detail-container05 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.case-study-detail-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container06 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text21 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image01 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video01 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container09 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.case-study-detail-hero-heading2 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container10 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text24 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-text25 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image02 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image03 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video02 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video03 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container13 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text26 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-text27 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container14 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image04 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image05 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container15 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video04 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video05 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container16 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text28 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-text29 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container17 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image06 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image07 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container18 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video06 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video07 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container19 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text30 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-text31 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container20 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image08 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image09 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container21 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video08 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video09 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container22 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text32 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-navlink3 {
  color: var(--dl-color-gray-white);
  text-decoration: none;
}
.case-study-detail-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-study-detail-footer1 {
  height: 246;
}
.case-study-detail-container23 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.case-study-detail-logo2 {
  text-decoration: none;
}
.case-study-detail-separator {
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
.case-study-detail-container24 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .case-study-detail-hero {
    flex-direction: column;
  }
  .case-study-detail-container03 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .case-study-detail-hero-heading {
    text-align: center;
  }
  .case-study-detail-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .case-study-detail-hero1 {
    flex-direction: column;
  }
  .case-study-detail-hero-heading1 {
    text-align: center;
  }
  .case-study-detail-hero-heading2 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .case-study-detail-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-detail-desktop-menu {
    display: none;
  }
  .case-study-detail-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .case-study-detail-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-detail-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .case-study-detail-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-detail-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .case-study-detail-container24 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .case-study-detail-text35 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .case-study-detail-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .case-study-detail-mobile-menu1 {
    padding: 16px;
  }
  .case-study-detail-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .case-study-detail-container03 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .case-study-detail-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .case-study-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .case-study-detail-container24 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .case-study-detail-text35 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
