<template>
  <div class="role-play-detail-container">
    <Chatbot />
    <div class="role-play-detail-header">
      <header data-thq="thq-navbar" class="navbarContainer role-play-detail-navbar-interactive">
        <router-link to="/menu" class="role-play-detail-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <router-link to="/menu" class="head-router"> 菜单 </router-link>
          <router-link to="/virtual-tour" class="head-router"> 导览 </router-link>
          <router-link to="/case-study-menu" class="head-router"> 学习 </router-link>
          <router-link to="/role-play-menu" class="head-router-current"> 扮演 </router-link>
          <router-link to="/quiz-list" class="head-router"> 测试 </router-link>
        </div>
        <div class="role-play-detail-container1">
          <div data-thq="thq-navbar-nav" class="role-play-detail-desktop-menu">
            <span>
              <span>
                登录用户：
              </span>
              <span class="role-play-detail-text02">{{ name }}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="heroContainer">
      <div class="shadowContainer">
        <div class="containerLeft underLine">
          <div class="heading1">
            <span class="heading2"> 角色扮演：</span>
            <span class="role-play-detail-text04 heading2"> {{ role }}</span>
          </div>
        </div>
        <div class="containerLeft">
          <div class="labelContainer">
            <router-link to="/menu" class="routerlink">>主菜单</router-link>
            <router-link to="/role-play-menu" class="routerlink">>角色扮演</router-link>
            <router-link :to="`/role-play-list?role=${this.role}`" class="routerlink">>{{role}}</router-link>
            <span class="routerlink">>{{job}}</span>
          </div>
        </div>
        <div class="containerCenter">
          <div class="role-play-detail-container5" >
            <span class="heading2"> 工作名: {{ this.job }} </span>
          </div>
          <div class="role-play-detail-container5">
            <span class="bodyLarge">
              {{ this.jobDetail }}
            </span>      
          </div>
          <div class="role-play-detail-container5" >
            <router-link class="buttonFilled" :to="`/virtual-tour?roomID=${this.roomID}`"> 查看细节 </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="role-play-detail-footer">
      <footer class="role-play-detail-footer1 footerContainer">
        <div class="role-play-detail-container6">
          <router-link to="/menu" class="role-play-detail-logo2 logo">
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
import Chatbot from '../components/Chatbot.vue';
import router from '../router';

export default {
  name: 'RolePlayDetail',
  props: {},
  components: {
    Chatbot,
  },
  data() {
    return {
      role: ' ',
      job: ' ',
      jobDetail: ' ',
      roomID:'',
      name: localStorage.getItem('username'),
    }
  },
  methods: {
    logout() {
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
  created() {
    this.role = this.$route.query.role;
    this.job = this.$route.query.job;
    axios
      .get(`/roleplaying/detail?role=${this.role2number(this.role)}&job=${this.job}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`
          }
        })
      .then((response) => {
        if (response.data.status === 0) {
          //console.log(response.data);
          this.jobDetail = response.data.jobDetail;
          this.roomID = response.data.roomID;
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
    title: 'RolePlayDetail - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'RolePlayDetail - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.head-router{
  width: 50px;
  height: auto;
  font-size: 24px;
  text-align: center;
  font-family: STIX Two Text;
  font-weight: 400;
  line-height: 150%;
  margin-left: 20px;
}
.head-router:hover{
  color: gray;
}
.head-router-current{
  width: 50px;
  height: auto;
  font-size: 24px;
  font-family: STIX Two Text;
  font-weight: 600;
  line-height: 150%;
  margin-left: 20px;
  border-bottom-color: var(--dl-color-custom-primary1);
  border-bottom-width: 4px;
}
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
  background-color: var(--dl-color-custom-secondary1);
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
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 5%;
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
