<template>
  <div class="register-container">
    <div class="register-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer register-navbar-interactive"
      >
        <router-link to="/" class="register-logo logo">PETCLINICMock</router-link>
        <div data-thq="thq-navbar-nav" class="register-desktop-menu">
          <span>
            <span>
              Logged in as
              <span v-html="rawmxia"></span>
            </span>
            <span class="register-text02">Allen</span>
          </span>
        </div>
        <div data-thq="thq-burger-menu" class="register-burger-menu">
          <svg viewBox="0 0 1024 1024" class="register-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="register-mobile-menu1 mobileMenu">
          <div class="register-nav">
            <div class="register-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="register-close-menu">
                <svg viewBox="0 0 1024 1024" class="register-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="register-links">
              <span class="register-nav12 bodySmall">Home</span>
              <span class="register-nav22 bodySmall">Services</span>
              <span class="register-nav32 bodySmall">Our Team</span>
              <span class="register-nav42 bodySmall">Contact</span>
            </nav>
            <div class="register-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="register-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="register-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="register-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="register-hero">
      <div class="register-hero1 heroContainer">
        <div class="register-container1">
          <h1 class="register-hero-heading heading1">
            <span>
              REGISTER For
              <span v-html="raw5ux6"></span>
            </span>
            <br />
            <span>A BRAND NEW Experience</span>
          </h1>
          <span class="register-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>Caring for your furry friends</span>
                <span><span v-html="rawedw7"></span></span>
              </span>
              <span>
                <span><span v-html="raw6caz"></span></span>
                <span><span v-html="raw4bel"></span></span>
              </span>
            </span>
            <span>
              <span>
                <span><span v-html="raw6thg"></span></span>
                <span><span v-html="rawdp9l"></span></span>
              </span>
              <span>
                <span><span v-html="rawlekl"></span></span>
                <span><span v-html="rawhyr8"></span></span>
              </span>
            </span>
          </span>
        </div>
        <form class="register-form">
          <input
            type="text"
            placeholder="User Name"
            class="register-textinput input"
          />
          <input
            type="text"
            placeholder="Password"
            class="register-textinput1 input"
          />
          <input
            type="text"
            placeholder="Repeat Password"
            class="register-textinput2 input"
          />
          <button class="register-register1 buttonFilled">Register</button>
        </form>
      </div>
    </div>
    <div class="register-footer">
      <footer class="register-footer1 footerContainer">
        <div class="register-container2">
          <router-link to="/" class="register-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="register-separator"></div>
        <div class="register-container3">
          <span class="bodySmall register-text20">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {},
  data() {
    return {
      rawmxia: ' ',
      raw5ux6: ' ',
      rawedw7: ' ',
      raw6caz: ' ',
      raw4bel: ' ',
      raw6thg: ' ',
      rawdp9l: ' ',
      rawlekl: ' ',
      rawhyr8: ' ',
    }
  },
  metaInfo: {
    title: 'Register - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'Register - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.register-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.register-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.register-logo {
  text-decoration: none;
}
.register-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.register-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.register-burger-menu {
  display: none;
}
.register-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.register-mobile-menu1 {
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
.register-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.register-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.register-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.register-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.register-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.register-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.register-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.register-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.register-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.register-hero1 {
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.register-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.register-hero-heading {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.register-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.register-form {
  width: 387px;
  height: 252px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-style: hidden;
  border-width: 1px;
  border-radius: 16px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-900);
}
.register-textinput {
  width: 300px;
  height: 44px;
  align-self: center;
  font-family: "Noto Sans";
  border-color: var(--dl-color-custom-neutral-dark);
  border-style: solid;
  border-width: 3px;
  margin-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}
.register-textinput1 {
  width: 300px;
  height: 44px;
  align-self: center;
  font-family: "Noto Sans";
  border-color: var(--dl-color-custom-neutral-dark);
  border-style: solid;
  border-width: 3px;
  margin-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}
.register-textinput2 {
  width: 300px;
  height: 44px;
  align-self: center;
  font-family: "Noto Sans";
  border-color: var(--dl-color-custom-neutral-dark);
  border-style: solid;
  border-width: 3px;
  margin-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}
.register-register1 {
  height: 34px;
  align-self: center;
  background-color: var(--dl-color-custom-primary1);
}
.register-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-footer1 {
  height: 246;
}
.register-container2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.register-logo2 {
  text-decoration: none;
}
.register-separator {
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
.register-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .register-hero1 {
    flex-direction: column;
  }
  .register-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .register-hero-heading {
    text-align: center;
  }
  .register-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .register-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .register-desktop-menu {
    display: none;
  }
  .register-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .register-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .register-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .register-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .register-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .register-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .register-text20 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .register-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .register-mobile-menu1 {
    padding: 16px;
  }
  .register-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .register-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .register-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .register-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .register-text20 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
