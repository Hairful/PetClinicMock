<template>
  <div class="admin-role-play-menu-container">
    <div class="admin-role-play-menu-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer admin-role-play-menu-navbar-interactive"
      >
        <router-link to="/" class="admin-role-play-menu-logo logo">
          PETCLINICMock
        </router-link>
        <div data-thq="thq-navbar-nav" class="admin-role-play-menu-desktop-menu">
          <span>
            <span>
              Logged in as
              <span v-html="rawl4zz"></span>
            </span>
            <span class="admin-role-play-menu-text02">Allen</span>
          </span>
        </div>
        <div data-thq="thq-burger-menu" class="admin-role-play-menu-burger-menu">
          <svg
            viewBox="0 0 1024 1024"
            class="admin-role-play-menu-icon socialIcons"
          >
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="admin-role-play-menu-mobile-menu1 mobileMenu"
        >
          <div class="admin-role-play-menu-nav">
            <div class="admin-role-play-menu-top">
              <span class="logo">PETSCLINIC</span>
              <div
                data-thq="thq-close-menu"
                class="admin-role-play-menu-close-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  class="admin-role-play-menu-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="admin-role-play-menu-links">
              <span class="admin-role-play-menu-nav12 bodySmall">Home</span>
              <span class="admin-role-play-menu-nav22 bodySmall">Services</span>
              <span class="admin-role-play-menu-nav32 bodySmall">Our Team</span>
              <span class="admin-role-play-menu-nav42 bodySmall">Contact</span>
            </nav>
            <div class="admin-role-play-menu-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="admin-role-play-menu-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="admin-role-play-menu-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="admin-role-play-menu-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-role-play-menu-container1"></div>
    <div class="heroContainer admin-role-play-menu-hero">
      <div class="admin-role-play-menu-container2">
        <h1 class="admin-role-play-menu-hero-heading heading1">
          Manage Role Play
        </h1>
      </div>
    </div>
    <div class="admin-role-play-menu-container3">
      <router-link to="/admin-menu" class="admin-role-play-menu-navlink button">
        Admin Menu
      </router-link>
    </div>
    <div class="admin-role-play-menu-hero1 heroContainer">
      <h1 class="admin-role-play-menu-hero-heading1">
        <span class="heading1">Choose a Role</span>
        <br />
      </h1>
      <div class="admin-role-play-menu-container4">
        <div class="admin-role-play-menu-container5">
          <router-link
          :to="{ path: '/admin-role-play-list', query: { role: 'Front Desk' } }"
            class="admin-role-play-menu-navlink1 button"
          >
            <span class="heading3">Front Desk</span>
          </router-link>
          <router-link
            :to="{ path: '/admin-role-play-list', query: { role: 'Medical Assistant' } }"
            class="admin-role-play-menu-navlink2 button"
          >
            <span class="heading3">
              <span>Medical Assistant</span>
              <br />
            </span>
          </router-link>
          <router-link
          :to="{ path: '/admin-role-play-list', query: { role: 'Doctor' } }"
            class="admin-role-play-menu-navlink3 button"
          >
            <span class="heading3">Doctor</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="admin-role-play-menu-footer">
      <footer class="admin-role-play-menu-footer1 footerContainer">
        <div class="admin-role-play-menu-container6">
          <router-link to="/" class="admin-role-play-menu-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="admin-role-play-menu-separator"></div>
        <div class="admin-role-play-menu-container7">
          <span class="bodySmall admin-role-play-menu-text24">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminRolePlayMenu',
  props: {},
  data() {
    return {
      rawl4zz: ' ',
      rawdfv6: ' ',
      raw64ur: ' ',
      rawza51: ' ',
      rawpc08: ' ',
      rawupn0: ' ',
      rawbggx: ' ',
      raw4mlw: ' ',
    }
  },
  metaInfo: {
    title: 'AdminRolePlayMenu - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'AdminRolePlayMenu - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.admin-role-play-menu-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.admin-role-play-menu-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.admin-role-play-menu-logo {
  text-decoration: none;
}
.admin-role-play-menu-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.admin-role-play-menu-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.admin-role-play-menu-burger-menu {
  display: none;
}
.admin-role-play-menu-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-role-play-menu-mobile-menu1 {
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
.admin-role-play-menu-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-role-play-menu-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.admin-role-play-menu-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-role-play-menu-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-role-play-menu-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.admin-role-play-menu-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-role-play-menu-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-role-play-menu-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-role-play-menu-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-role-play-menu-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.admin-role-play-menu-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-role-play-menu-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-role-play-menu-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.admin-role-play-menu-container1 {
  width: 200px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-role-play-menu-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-role-play-menu-hero-heading {
  max-width: 800px;
  text-align: center;
}
.admin-role-play-menu-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.admin-role-play-menu-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.admin-role-play-menu-navlink {
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
.admin-role-play-menu-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.admin-role-play-menu-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.admin-role-play-menu-container4 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.admin-role-play-menu-container5 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.admin-role-play-menu-navlink1 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.admin-role-play-menu-navlink2 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.admin-role-play-menu-navlink3 {
  width: 515px;
  height: 91px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
.admin-role-play-menu-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-role-play-menu-footer1 {
  height: 246;
}
.admin-role-play-menu-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-role-play-menu-logo2 {
  text-decoration: none;
}
.admin-role-play-menu-separator {
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
.admin-role-play-menu-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .admin-role-play-menu-hero {
    flex-direction: column;
  }
  .admin-role-play-menu-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .admin-role-play-menu-hero-heading {
    text-align: center;
  }
  .admin-role-play-menu-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .admin-role-play-menu-hero1 {
    flex-direction: column;
  }
  .admin-role-play-menu-hero-heading1 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .admin-role-play-menu-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-desktop-menu {
    display: none;
  }
  .admin-role-play-menu-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .admin-role-play-menu-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-role-play-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-role-play-menu-text24 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .admin-role-play-menu-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-mobile-menu1 {
    padding: 16px;
  }
  .admin-role-play-menu-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .admin-role-play-menu-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .admin-role-play-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-role-play-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-role-play-menu-text24 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
