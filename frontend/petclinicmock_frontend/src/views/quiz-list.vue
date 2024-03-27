<template>
  <div class="quiz-list-container">
    <div class="quiz-list-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer quiz-list-navbar-interactive"
      >
        <router-link to="/" class="quiz-list-logo logo">
          PETCLINICMock
        </router-link>
        <div data-thq="thq-navbar-nav" class="quiz-list-desktop-menu">
          <span>
            <span>
              Logged in as
              <span v-html="rawqwc5"></span>
            </span>
            <span class="quiz-list-text02">Allen</span>
          </span>
        </div>
        <div data-thq="thq-burger-menu" class="quiz-list-burger-menu">
          <svg viewBox="0 0 1024 1024" class="quiz-list-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="quiz-list-mobile-menu1 mobileMenu">
          <div class="quiz-list-nav">
            <div class="quiz-list-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="quiz-list-close-menu">
                <svg viewBox="0 0 1024 1024" class="quiz-list-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="quiz-list-links">
              <span class="quiz-list-nav12 bodySmall">Home</span>
              <span class="quiz-list-nav22 bodySmall">Services</span>
              <span class="quiz-list-nav32 bodySmall">Our Team</span>
              <span class="quiz-list-nav42 bodySmall">Contact</span>
            </nav>
            <div class="quiz-list-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="quiz-list-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="quiz-list-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="quiz-list-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="quiz-list-container1"></div>
    <div class="heroContainer quiz-list-hero">
      <div class="quiz-list-container2">
        <h1 class="quiz-list-hero-heading">Quiz</h1>
      </div>
    </div>
    <div class="quiz-list-container3">
      <router-link to="/menu" class="quiz-list-navlink button">Menu</router-link>
    </div>
    <div class="quiz-list-hero1 heroContainer">
      <h1 class="quiz-list-hero-heading1">
        <span class="heading1">Choose a Quiz</span>
        <br />
      </h1>
      <div class="quiz-list-container4">
        <ul class="quiz-list-ul list">
          <li class="quiz-list-li list-item Content">
            <router-link
              to="/quiz-detail"
              class="quiz-list-navlink1 button bodyLarge"
            >
              Quiz 1
            </router-link>
            <span class="quiz-list-text19 bodyLarge">Total Credits: 40</span>
            <span class="quiz-list-text20 bodyLarge">Last Try: 40</span>
            <span>
              <span class="bodyLarge">Last Try Time: </span>
              <span>2024年11月20日 11:59PM</span>
            </span>
          </li>
          <li class="quiz-list-li1 list-item Content">
            <router-link
              to="/quiz-detail"
              class="quiz-list-navlink2 button bodyLarge"
            >
              Quiz 2
            </router-link>
            <span class="quiz-list-text24 bodyLarge">Total Credits: 40</span>
            <span class="quiz-list-text25 bodyLarge">Last Try: 40</span>
            <span>
              <span class="bodyLarge">Last Try Time: </span>
              <span>2024年11月20日 11:59PM</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="quiz-list-footer">
      <footer class="quiz-list-footer1 footerContainer">
        <div class="quiz-list-container5">
          <router-link to="/" class="quiz-list-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="quiz-list-separator"></div>
        <div class="quiz-list-container6">
          <span class="bodySmall quiz-list-text29">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizList',
  props: {},
  data() {
    return {
      rawqwc5: ' ',
      rawlux5: ' ',
      rawunzv: ' ',
      rawa1tx: ' ',
      rawjbth: ' ',
      rawh3c5: ' ',
      raw73rk: ' ',
      rawciux: ' ',
    }
  },
  metaInfo: {
    title: 'QuizList - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'QuizList - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.quiz-list-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.quiz-list-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.quiz-list-logo {
  text-decoration: none;
}
.quiz-list-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.quiz-list-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.quiz-list-burger-menu {
  display: none;
}
.quiz-list-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.quiz-list-mobile-menu1 {
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
.quiz-list-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz-list-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.quiz-list-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz-list-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.quiz-list-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.quiz-list-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.quiz-list-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.quiz-list-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.quiz-list-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.quiz-list-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.quiz-list-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.quiz-list-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.quiz-list-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.quiz-list-container1 {
  width: 200px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz-list-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.quiz-list-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.quiz-list-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.quiz-list-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.quiz-list-navlink {
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
.quiz-list-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.quiz-list-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.quiz-list-container4 {
  flex: 0 0 auto;
  width: 983px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.quiz-list-ul {
  flex: 1;
  width: auto;
  position: relative;
  margin-right: 639px;
}
.quiz-list-li {
  color: var(--dl-color-gray-white);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}
.quiz-list-navlink1 {
  color: var(--dl-color-gray-white);
  width: 148px;
  text-align: left;
  border-color: var(--dl-color-gray-white);
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  text-decoration: none;
  background-color: var(--dl-color-custom-primary2);
}
.quiz-list-text19 {
  margin-right: var(--dl-space-space-twounits);
}
.quiz-list-text20 {
  margin-right: var(--dl-space-space-twounits);
}
.quiz-list-li1 {
  color: var(--dl-color-gray-white);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}
.quiz-list-navlink2 {
  color: var(--dl-color-gray-white);
  width: 148px;
  text-align: left;
  border-color: var(--dl-color-gray-white);
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  text-decoration: none;
  background-color: var(--dl-color-custom-primary2);
}
.quiz-list-text24 {
  margin-right: var(--dl-space-space-twounits);
}
.quiz-list-text25 {
  margin-right: var(--dl-space-space-twounits);
}
.quiz-list-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz-list-footer1 {
  height: 246;
}
.quiz-list-container5 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.quiz-list-logo2 {
  text-decoration: none;
}
.quiz-list-separator {
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
.quiz-list-container6 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .quiz-list-hero {
    flex-direction: column;
  }
  .quiz-list-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .quiz-list-hero-heading {
    text-align: center;
  }
  .quiz-list-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .quiz-list-hero1 {
    flex-direction: column;
  }
  .quiz-list-hero-heading1 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .quiz-list-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .quiz-list-desktop-menu {
    display: none;
  }
  .quiz-list-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .quiz-list-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-list-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-list-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-list-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-list-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .quiz-list-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .quiz-list-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .quiz-list-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .quiz-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .quiz-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .quiz-list-text29 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .quiz-list-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .quiz-list-mobile-menu1 {
    padding: 16px;
  }
  .quiz-list-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .quiz-list-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-list-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .quiz-list-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .quiz-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .quiz-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .quiz-list-text29 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
