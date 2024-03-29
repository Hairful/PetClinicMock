<template>
  <div class="role-play-detail-container">
    <div class="role-play-detail-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer role-play-detail-navbar-interactive"
      >
        <router-link to="/" class="role-play-detail-logo logo">
          PETCLINICMock
        </router-link>
        <div class="role-play-detail-container1">
          <div data-thq="thq-navbar-nav" class="role-play-detail-desktop-menu">
            <span>
              <span>
                Logged in as
                <span v-html="rawks35"></span>
              </span>
              <span class="role-play-detail-text02">{{name}}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> logout </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="role-play-detail-burger-menu">
          <svg viewBox="0 0 1024 1024" class="role-play-detail-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="role-play-detail-mobile-menu1 mobileMenu"
        >
          <div class="role-play-detail-nav">
            <div class="role-play-detail-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="role-play-detail-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  class="role-play-detail-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="role-play-detail-links">
              <span class="role-play-detail-nav12 bodySmall">Home</span>
              <span class="role-play-detail-nav22 bodySmall">Services</span>
              <span class="role-play-detail-nav32 bodySmall">Our Team</span>
              <span class="role-play-detail-nav42 bodySmall">Contact</span>
            </nav>
            <div class="role-play-detail-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="role-play-detail-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="role-play-detail-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="role-play-detail-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="role-play-detail-container2"></div>
    <div class="role-play-detail-hero heroContainer">
      <div class="role-play-detail-container3">
        <h1 class="role-play-detail-hero-heading">
          <span class="heading1">
            Role Play:
            <span v-html="raw1c3x"></span>
          </span>
          <span class="role-play-detail-text04"> {{ role }}</span>
        </h1>
      </div>
    </div>
    <div class="role-play-detail-container4">
      <router-link :to="{ path: '/role-play-list', query: { role: this.role } }" class="role-play-detail-navlink button">
        Choose Job
      </router-link>
      <router-link to="/role-play-menu" class="role-play-detail-navlink1 button">
        Choose Role
      </router-link>
      <router-link to="/menu" class="role-play-detail-navlink2 button">
        Menu
      </router-link>
    </div>
    <div class="role-play-detail-hero1 heroContainer">
      <h1 class="role-play-detail-hero-heading1">
        <span class="heading1"> {{ this.job }} </span>
        <br />
      </h1>
      <div class="role-play-detail-container5">
        <span class="role-play-detail-text21 bodyLarge">
          {{ this.jobDetail }}
        </span>
      </div>
    </div>
    <div class="role-play-detail-footer">
      <footer class="role-play-detail-footer1 footerContainer">
        <div class="role-play-detail-container6">
          <router-link to="/" class="role-play-detail-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="role-play-detail-separator"></div>
        <div class="role-play-detail-container7">
          <span class="bodySmall role-play-detail-text22">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RolePlayDetail',
  props: {},
  data() {
    return {
      rawks35: ' ',
      raw1c3x: ' ',
      raw2abd: ' ',
      raw39oh: ' ',
      raw1g6y: ' ',
      rawvzss: ' ',
      rawrfsl: ' ',
      rawybr1: ' ',
      rawuxqk: ' ',
      role: ' ',
      job: ' ',
      jobDetail: ' ',
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
    this.role = this.$route.query.role;
    this.job = this.$route.query.job;
    axios
      .get(`/roleplaying/detail?role=${this.role}&job=${this.job}`, 
        {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        if (response.data.status === 0) {
          this.jobDetail = response.data.jobDetail;
        } else if (response.data.status === 1) {
          console.log('No corresponding role');
        } else if (response.data.status === 2) {
          console.log('No corresponding job');
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  metaInfo: {
    title: 'RolePlayDetail - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'RolePlayDetail - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.role-play-detail-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.role-play-detail-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.role-play-detail-logo {
  text-decoration: none;
}
.role-play-detail-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.role-play-detail-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.role-play-detail-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.role-play-detail-burger-menu {
  display: none;
}
.role-play-detail-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.role-play-detail-mobile-menu1 {
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
.role-play-detail-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.role-play-detail-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.role-play-detail-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.role-play-detail-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.role-play-detail-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.role-play-detail-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.role-play-detail-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.role-play-detail-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.role-play-detail-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.role-play-detail-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.role-play-detail-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.role-play-detail-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.role-play-detail-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.role-play-detail-container2 {
  width: 200px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.role-play-detail-hero {
  padding-bottom: var(--dl-space-space-sixunits);
}
.role-play-detail-container3 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.role-play-detail-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.role-play-detail-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}
.role-play-detail-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.role-play-detail-container4 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.role-play-detail-navlink {
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
.role-play-detail-navlink1 {
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
.role-play-detail-navlink2 {
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
.role-play-detail-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.role-play-detail-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.role-play-detail-container5 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.role-play-detail-text21 {
  color: var(--dl-color-gray-white);
}
.role-play-detail-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.role-play-detail-footer1 {
  height: 246;
}
.role-play-detail-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.role-play-detail-logo2 {
  text-decoration: none;
}
.role-play-detail-separator {
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
.role-play-detail-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .role-play-detail-hero {
    flex-direction: column;
  }
  .role-play-detail-container3 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .role-play-detail-hero-heading {
    text-align: center;
  }
  .role-play-detail-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .role-play-detail-hero1 {
    flex-direction: column;
  }
  .role-play-detail-hero-heading1 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .role-play-detail-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .role-play-detail-desktop-menu {
    display: none;
  }
  .role-play-detail-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .role-play-detail-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-detail-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-detail-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-detail-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-detail-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .role-play-detail-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .role-play-detail-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .role-play-detail-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .role-play-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .role-play-detail-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .role-play-detail-text22 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .role-play-detail-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .role-play-detail-mobile-menu1 {
    padding: 16px;
  }
  .role-play-detail-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .role-play-detail-container3 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-detail-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .role-play-detail-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .role-play-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .role-play-detail-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .role-play-detail-text22 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
