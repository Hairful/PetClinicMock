<template>
  <div class="role-play-list-container">
    <Chatbot />
    <div class="role-play-list-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer role-play-list-navbar-interactive"
      >
        <router-link to="/menu" class="role-play-list-logo logo">
          PETCLINICMock
        </router-link>
        <div>
        <div data-thq="thq-navbar-nav" class="role-play-list-desktop-menu">
          <span>
            <span>
              登录用户：
              <span v-html="rawiv06"></span>
              <span class="role-play-list-text02">{{name}}</span>
            </span>
          </span>
        </div>
        <div>
          <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
        </div>
        </div>
      </header>
    </div>
    <div class="role-play-list-container1"></div>
    <div class="heroContainer role-play-list-hero">
      <div class="role-play-list-container2">
        <h1 class="role-play-list-hero-heading">
          <span class="heading1">
            角色扮演：
          </span>
          <span class="role-play-list-text04">{{ this.role }}</span>
        </h1>
      </div>
    </div>
    <div class="role-play-list-container3">
      <router-link to="/role-play-menu" class="role-play-list-navlink button">
        重选角色
      </router-link>
      <router-link to="/menu" class="role-play-list-navlink button">
        返回菜单
      </router-link>
    </div>
    <div class="role-play-list-hero1 heroContainer">
      <h1 class="role-play-list-hero-heading1">
        <span class="heading1">选择职责</span>
        <br />
      </h1>
      <div class="role-play-list-container4">
        <ul class="role-play-list-ul list">
          <li 
            v-for="(job, index) in jobs"
            :key="index"
            class="role-play-list=li list-item Content">
            <router-link
              :to="{path:'/role-play-detail', query:{ role: role, job: job } }"
              class="role-play-list-navlink2 button bodyLarge"
            >
              {{ job }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="role-play-list-footer">
      <footer class="role-play-list-footer1 footerContainer">
        <div class="role-play-list-container5">
          <router-link to="/menu" class="role-play-list-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="role-play-list-separator"></div>
        <div class="role-play-list-container6">
          <span class="bodySmall role-play-list-text21">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Chatbot from '../components/Chatbot.vue';
export default {
  name: 'RolePlayList',
  components: {
    Chatbot,
  },
  data() {
    return {
      raw9ci3: ' ',
      rawulc0: ' ',
      raw1sis: ' ',
      rawznbn: ' ',
      rawksgs: ' ',
      rawdhhu: ' ',
      rawszzz: ' ',
      rawh591: ' ',
      raws6fs: ' ',
      role: ' ',
      jobs: [],
      name:localStorage.getItem('username'),
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/');
    },
    role2number(role) {
      switch (role) {
        case '前台':
          return 0;
        case '医助':
          return 1;
        case '医生':
          return 2;
        default:
          return -1;
      }
    }
  },
  metaInfo: {
    title: 'RolePlayList - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'RolePlayList - Roasted Rusty Swallow',
      },
    ],
  },
  created() {
    this.role = this.$route.query.role;
    axios
      .get(`/roleplaying/list?role=${this.role2number(this.role)}`, 
        {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`
        }
      })
      .then((response) => {
        if (response.data.status === 0) {
          this.jobs = response.data.jobs;
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
</script>

<style scoped>
.role-play-list-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.role-play-list-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.role-play-list-logo {
  text-decoration: none;
}
.role-play-list-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.role-play-list-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.role-play-list-burger-menu {
  display: none;
}
.role-play-list-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.role-play-list-mobile-menu1 {
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
.role-play-list-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.role-play-list-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.role-play-list-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.role-play-list-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.role-play-list-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.role-play-list-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.role-play-list-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.role-play-list-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.role-play-list-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.role-play-list-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.role-play-list-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.role-play-list-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.role-play-list-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.role-play-list-container1 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.role-play-list-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.role-play-list-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.role-play-list-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}
.role-play-list-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.role-play-list-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.role-play-list-navlink {
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
.role-play-list-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.role-play-list-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.role-play-list-container4 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.role-play-list-ul {
  width: 285px;
  position: relative;
}
.role-play-list-li {
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
.role-play-list-navlink2 {
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
  margin-bottom: var(--dl-space-space-unit);
}
.role-play-list-li1 {
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
.role-play-list-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.role-play-list-footer1 {
  height: 246;
}
.role-play-list-container5 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.role-play-list-logo2 {
  text-decoration: none;
}
.role-play-list-separator {
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
.role-play-list-container6 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .role-play-list-hero {
    flex-direction: column;
  }
  .role-play-list-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .role-play-list-hero-heading {
    text-align: center;
  }
  .role-play-list-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .role-play-list-hero1 {
    flex-direction: column;
  }
  .role-play-list-hero-heading1 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .role-play-list-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .role-play-list-desktop-menu {
    display: none;
  }
  .role-play-list-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .role-play-list-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-list-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-list-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-list-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-list-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .role-play-list-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .role-play-list-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .role-play-list-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .role-play-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .role-play-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .role-play-list-text21 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .role-play-list-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .role-play-list-mobile-menu1 {
    padding: 16px;
  }
  .role-play-list-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .role-play-list-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .role-play-list-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .role-play-list-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .role-play-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .role-play-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .role-play-list-text21 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
