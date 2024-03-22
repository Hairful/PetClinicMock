<template>
  <div class="login-container">
    <div class="login-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer login-navbar-interactive"
      >
        <router-link to="/" class="login-logo logo">PETCLINICMock</router-link>
        <div data-thq="thq-navbar-nav" class="login-desktop-menu">
          <div class="login-buttons">
            <router-link to="/login" class="login-login buttonFlat">
              Login
            </router-link>
            <router-link to="/register" class="login-register buttonFilled">
              Register
            </router-link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="login-burger-menu">
          <svg viewBox="0 0 1024 1024" class="login-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="login-mobile-menu1 mobileMenu">
          <div class="login-nav">
            <div class="login-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="login-close-menu">
                <svg viewBox="0 0 1024 1024" class="login-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="login-links">
              <span class="login-nav12 bodySmall">Home</span>
              <span class="login-nav22 bodySmall">Services</span>
              <span class="login-nav32 bodySmall">Our Team</span>
              <span class="login-nav42 bodySmall">Contact</span>
            </nav>
            <div class="login-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="login-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="login-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="login-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="login-hero">
      <div class="login-hero1 heroContainer">
        <div class="login-container1">
          <h1 class="login-hero-heading heading1">LOGIN</h1>
          <h1 class="login-hero-heading1 heading1">Welcome Back!</h1>
          <span class="login-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>Caring for your furry friends</span>
                <span><span v-html="raweqtt"></span></span>
              </span>
              <span>
                <span><span v-html="rawm61n"></span></span>
                <span><span v-html="rawi3hz"></span></span>
              </span>
            </span>
            <span>
              <span>
                <span><span v-html="rawrvn4"></span></span>
                <span><span v-html="rawkeau"></span></span>
              </span>
              <span>
                <span><span v-html="rawa4n5"></span></span>
                <span><span v-html="rawyrlc"></span></span>
              </span>
            </span>
          </span>
        </div>
        <form class="login-form">
          <input
            type="text"
            placeholder="User Name"
            class="login-textinput input"
          />
          <input
            type="text"
            placeholder="Password"
            class="login-textinput1 input"
          />
          <button class="login-register2 buttonFilled">Register</button>
        </form>
      </div>
    </div>
    <div class="login-footer">
      <footer class="login-footer1 footerContainer">
        <div class="login-container2">
          <router-link to="/" class="login-logo2 logo">PETCLINICMOCK</router-link>
        </div>
        <div class="login-separator"></div>
        <div class="login-container3">
          <span class="bodySmall login-text14">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  data() {
    return {
      raweqtt: ' ',
      rawm61n: ' ',
      rawi3hz: ' ',
      rawrvn4: ' ',
      rawkeau: ' ',
      rawa4n5: ' ',
      rawyrlc: ' ',
    }
  },
  metaInfo: {
    title: 'Login - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'Login - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.login-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.login-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.login-logo {
  text-decoration: none;
}
.login-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.login-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.login-login {
  margin-right: 32px;
  text-decoration: none;
}
.login-register {
  text-decoration: none;
}
.login-burger-menu {
  display: none;
}
.login-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.login-mobile-menu1 {
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
.login-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.login-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.login-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.login-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.login-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.login-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.login-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.login-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.login-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.login-hero1 {
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.login-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}
.login-hero-heading {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
}
.login-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
}
.login-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.login-form {
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
  background-color: #D9D9D9;
}
.login-textinput {
  width: 300px;
  height: 44px;
  align-self: center;
  font-family: "Noto Sans";
  border-color: #191818;
  border-style: solid;
  border-width: 3px;
  margin-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}
.login-textinput1 {
  width: 300px;
  height: 44px;
  align-self: center;
  font-family: "Noto Sans";
  border-color: #191818;
  border-style: solid;
  border-width: 3px;
  margin-bottom: var(--dl-space-space-unit);
  background-color: transparent;
}
.login-register2 {
  height: 34px;
  align-self: center;
  background-color: var(--dl-color-custom-primary2);
}
.login-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-footer1 {
  height: 246px;
}
.login-container2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.login-logo2 {
  text-decoration: none;
}
.login-separator {
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
.login-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .login-hero1 {
    flex-direction: column;
  }
  .login-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .login-hero-heading {
    text-align: center;
  }
  .login-hero-heading1 {
    text-align: center;
  }
  .login-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .login-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .login-desktop-menu {
    display: none;
  }
  .login-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .login-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .login-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .login-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .login-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .login-text14 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .login-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .login-mobile-menu1 {
    padding: 16px;
  }
  .login-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .login-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .login-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .login-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .login-text14 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
