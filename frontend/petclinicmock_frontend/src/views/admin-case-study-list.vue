<template>
  <div class="admin-case-study-list-container">
    <div class="admin-case-study-list-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer admin-case-study-list-navbar-interactive"
      >
        <router-link to="/" class="admin-case-study-list-logo logo">
          PETCLINICMock
        </router-link>
        <div data-thq="thq-navbar-nav" class="admin-case-study-list-desktop-menu">
          <span>
            <span>
              Logged in as
              <span v-html="rawol4e"></span>
            </span>
            <span class="admin-case-study-list-text02">Allen</span>
          </span>
        </div>
        <div data-thq="thq-burger-menu" class="admin-case-study-list-burger-menu">
          <svg
            viewBox="0 0 1024 1024"
            class="admin-case-study-list-icon socialIcons"
          >
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="admin-case-study-list-mobile-menu1 mobileMenu"
        >
          <div class="admin-case-study-list-nav">
            <div class="admin-case-study-list-top">
              <span class="logo">PETSCLINIC</span>
              <div
                data-thq="thq-close-menu"
                class="admin-case-study-list-close-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  class="admin-case-study-list-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="admin-case-study-list-links">
              <span class="admin-case-study-list-nav12 bodySmall">Home</span>
              <span class="admin-case-study-list-nav22 bodySmall">Services</span>
              <span class="admin-case-study-list-nav32 bodySmall">Our Team</span>
              <span class="admin-case-study-list-nav42 bodySmall">Contact</span>
            </nav>
            <div class="admin-case-study-list-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="admin-case-study-list-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="admin-case-study-list-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="admin-case-study-list-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-case-study-list-container01"></div>
    <div class="heroContainer admin-case-study-list-hero">
      <div class="admin-case-study-list-container02">
        <h1 class="admin-case-study-list-hero-heading">Manage Cases</h1>
        <span class="admin-case-study-list-hero-sub-heading bodyLarge">
          <span>
            <span>
              <span>Caring for your furry friends</span>
              <span><span v-html="raw6od9"></span></span>
            </span>
            <span>
              <span><span v-html="raw21fk"></span></span>
              <span><span v-html="rawczdr"></span></span>
            </span>
          </span>
          <span>
            <span>
              <span><span v-html="raw4irw"></span></span>
              <span><span v-html="rawx3jj"></span></span>
            </span>
            <span>
              <span><span v-html="raw96j1"></span></span>
              <span><span v-html="rawbwjf"></span></span>
            </span>
          </span>
        </span>
      </div>
    </div>
    <div class="admin-case-study-list-container03">
      <router-link to="/admin-menu" class="admin-case-study-list-navlink button">
        Admin Menu
      </router-link>
    </div>
    <div class="admin-case-study-list-hero1 heroContainer">
      <div class="admin-case-study-list-container04">
        <div class="admin-case-study-list-container05">
          <input type="text" placeholder="Disease Name" class="input" />
        </div>
        <div class="admin-case-study-list-container06">
          <input type="text" placeholder="Disease Type" class="input" />
        </div>
        <button type="button" class="admin-case-study-list-button button">
          Add Disease
        </button>
      </div>
      <div class="admin-case-study-list-container07">
        <ul class="admin-case-study-list-ul list">
          <li class="admin-case-study-list-li list-item Content">
            <div class="admin-case-study-list-container08">
              <div class="admin-case-study-list-container09">
                <span class="admin-case-study-list-text17 heading3">
                  Disease 1
                </span>
                <span class="heading3">Type 1</span>
              </div>
              <div class="admin-case-study-list-container10">
                <button
                  type="button"
                  class="admin-case-study-list-button1 button"
                >
                  Delete Disease
                </button>
                <router-link
                  to="/admin-case-study-detail"
                  class="admin-case-study-list-navlink1 button"
                >
                  Manage Cases
                </router-link>
              </div>
              <div class="admin-case-study-list-container11">
                <input type="text" placeholder="Disease Name" class="input" />
                <button
                  type="button"
                  class="admin-case-study-list-button2 button"
                >
                  <span class="admin-case-study-list-text19 bodyLarge">
                    <span>Rename Disease</span>
                    <br />
                  </span>
                </button>
              </div>
              <div class="admin-case-study-list-container12">
                <input type="text" placeholder="Disease Type" class="input" />
                <button
                  type="button"
                  class="admin-case-study-list-button3 button"
                >
                  <span class="admin-case-study-list-text22 bodyLarge">
                    Change Type
                  </span>
                </button>
              </div>
            </div>
          </li>
          <li class="admin-case-study-list-li1 list-item Content">
            <div class="admin-case-study-list-container13">
              <div class="admin-case-study-list-container14">
                <span class="admin-case-study-list-text23 heading3">
                  Disease 2
                </span>
                <span class="heading3">Type 2</span>
              </div>
              <div class="admin-case-study-list-container15">
                <button
                  type="button"
                  class="admin-case-study-list-button4 button"
                >
                  Delete Disease
                </button>
                <router-link
                  to="/admin-case-study-detail"
                  class="admin-case-study-list-navlink2 button"
                >
                  Manage Cases
                </router-link>
              </div>
              <div class="admin-case-study-list-container16">
                <input type="text" placeholder="Disease Name" class="input" />
                <button
                  type="button"
                  class="admin-case-study-list-button5 button"
                >
                  <span class="admin-case-study-list-text25 bodyLarge">
                    <span>Rename Disease</span>
                    <br />
                  </span>
                </button>
              </div>
              <div class="admin-case-study-list-container17">
                <input type="text" placeholder="Disease Type" class="input" />
                <button
                  type="button"
                  class="admin-case-study-list-button6 button"
                >
                  <span class="admin-case-study-list-text28 bodyLarge">
                    Change Type
                  </span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="admin-case-study-list-footer">
      <footer class="admin-case-study-list-footer1 footerContainer">
        <div class="admin-case-study-list-container18">
          <router-link to="/" class="admin-case-study-list-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="admin-case-study-list-separator"></div>
        <div class="admin-case-study-list-container19">
          <span class="bodySmall admin-case-study-list-text29">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminCaseStudyList',
  props: {},
  data() {
    return {
      rawol4e: ' ',
      raw6od9: ' ',
      raw21fk: ' ',
      rawczdr: ' ',
      raw4irw: ' ',
      rawx3jj: ' ',
      raw96j1: ' ',
      rawbwjf: ' ',
    }
  },
  metaInfo: {
    title: 'AdminCaseStudyList - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'AdminCaseStudyList - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.admin-case-study-list-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.admin-case-study-list-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.admin-case-study-list-logo {
  text-decoration: none;
}
.admin-case-study-list-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.admin-case-study-list-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.admin-case-study-list-burger-menu {
  display: none;
}
.admin-case-study-list-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-case-study-list-mobile-menu1 {
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
.admin-case-study-list-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-case-study-list-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.admin-case-study-list-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-case-study-list-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-case-study-list-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.admin-case-study-list-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-case-study-list-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-case-study-list-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-case-study-list-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-case-study-list-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.admin-case-study-list-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-case-study-list-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-case-study-list-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.admin-case-study-list-container01 {
  width: 200px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-case-study-list-container02 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-case-study-list-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.admin-case-study-list-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.admin-case-study-list-container03 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.admin-case-study-list-navlink {
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
.admin-case-study-list-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.admin-case-study-list-container04 {
  flex: 0 0 auto;
  width: 350px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-case-study-list-container05 {
  flex: 0 0 auto;
  width: auto;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-case-study-list-container06 {
  flex: 0 0 auto;
  width: auto;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-case-study-list-button {
  align-self: flex-start;
  background-color: var(--dl-color-success-700);
}
.admin-case-study-list-container07 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.admin-case-study-list-ul {
  width: 408px;
  position: relative;
}
.admin-case-study-list-li {
  color: var(--dl-color-gray-white);
  width: auto;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}
.admin-case-study-list-container08 {
  flex: 0 0 auto;
  width: 350px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-case-study-list-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}
.admin-case-study-list-text17 {
  margin-right: var(--dl-space-space-twounits);
}
.admin-case-study-list-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.admin-case-study-list-button1 {
  align-self: center;
  background-color: var(--dl-color-danger-700);
}
.admin-case-study-list-navlink1 {
  align-self: center;
  text-decoration: none;
  background-color: var(--dl-color-custom-primary1);
}
.admin-case-study-list-container11 {
  flex: 0 0 auto;
  width: auto;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-case-study-list-button2 {
  color: var(--dl-color-gray-white);
  width: 192px;
  height: 100%;
  align-self: center;
  text-align: center;
  background-color: var(--dl-color-custom-primary2);
}
.admin-case-study-list-text19 {
  text-align: center;
}
.admin-case-study-list-container12 {
  flex: 0 0 auto;
  width: auto;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-case-study-list-button3 {
  color: var(--dl-color-gray-white);
  width: 192px;
  height: 41px;
  align-self: center;
  text-align: center;
  background-color: var(--dl-color-custom-primary2);
}
.admin-case-study-list-text22 {
  text-align: center;
}
.admin-case-study-list-li1 {
  color: var(--dl-color-gray-white);
  width: auto;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}
.admin-case-study-list-container13 {
  flex: 0 0 auto;
  width: 350px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-case-study-list-container14 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}
.admin-case-study-list-text23 {
  margin-right: var(--dl-space-space-twounits);
}
.admin-case-study-list-container15 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.admin-case-study-list-button4 {
  align-self: center;
  background-color: var(--dl-color-danger-700);
}
.admin-case-study-list-navlink2 {
  align-self: center;
  text-decoration: none;
  background-color: var(--dl-color-custom-primary1);
}
.admin-case-study-list-container16 {
  flex: 0 0 auto;
  width: auto;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-case-study-list-button5 {
  color: var(--dl-color-gray-white);
  width: 192px;
  height: 100%;
  align-self: center;
  text-align: center;
  background-color: var(--dl-color-custom-primary2);
}
.admin-case-study-list-text25 {
  text-align: center;
}
.admin-case-study-list-container17 {
  flex: 0 0 auto;
  width: auto;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-case-study-list-button6 {
  color: var(--dl-color-gray-white);
  width: 192px;
  height: 41px;
  align-self: center;
  text-align: center;
  background-color: var(--dl-color-custom-primary2);
}
.admin-case-study-list-text28 {
  text-align: center;
}
.admin-case-study-list-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-case-study-list-footer1 {
  height: 246;
}
.admin-case-study-list-container18 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-case-study-list-logo2 {
  text-decoration: none;
}
.admin-case-study-list-separator {
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
.admin-case-study-list-container19 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .admin-case-study-list-hero {
    flex-direction: column;
  }
  .admin-case-study-list-container02 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .admin-case-study-list-hero-heading {
    text-align: center;
  }
  .admin-case-study-list-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .admin-case-study-list-hero1 {
    flex-direction: column;
  }
}
@media(max-width: 767px) {
  .admin-case-study-list-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-case-study-list-desktop-menu {
    display: none;
  }
  .admin-case-study-list-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .admin-case-study-list-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-case-study-list-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-case-study-list-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-case-study-list-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-case-study-list-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-case-study-list-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .admin-case-study-list-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-case-study-list-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-case-study-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-case-study-list-container19 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-case-study-list-text29 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .admin-case-study-list-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .admin-case-study-list-mobile-menu1 {
    padding: 16px;
  }
  .admin-case-study-list-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .admin-case-study-list-container02 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-case-study-list-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .admin-case-study-list-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .admin-case-study-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-case-study-list-container19 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-case-study-list-text29 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
