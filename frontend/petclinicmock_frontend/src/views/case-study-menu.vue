<template>
  <div class="case-study-menu-container">
    <Chatbot />
    <div class="case-study-menu-header">
      <header data-thq="thq-navbar" class="navbarContainer case-study-menu-navbar-interactive">
        <router-link to="/" class="case-study-menu-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <router-link to="/menu" class="head-router"> 菜单 </router-link>
          <router-link to="/virtual-tour" class="head-router"> 导览 </router-link>
          <router-link to="/case-study-menu" class="head-router-current"> 学习 </router-link>
          <router-link to="/role-play-menu" class="head-router"> 扮演 </router-link>
          <router-link to="/quiz-list" class="head-router"> 测试 </router-link>
        </div>
        <div>
          <div data-thq="thq-navbar-nav" class="case-study-menu-desktop-menu">
            <span>
              <span>
                登录用户：
              </span>
              <span class="case-study-menu-text02">{{ name }}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="case-study-menu-container1"></div>
    <div class="heroContainer">
      <div class="shadowContainer heroContainer">
        <div class="containerLeft">
          <div class="case-study-menu-hero-heading1 heading1">
            <span class="heading2">选择疾病类型</span>
          </div>
        </div>
        <div class="containerLeft">
          <div class="labelContainer">
            <router-link to="/menu" class="routerlink">>主菜单</router-link>
            <router-link to="/case-study-menu" class="routerlink">>病例学习</router-link>
          </div>
        </div>
        <div class="containerCenter" style="margin: 20px;">
          <input type="text" v-model="searchQuery" placeholder="输入以搜索" class="rounded-input">
        </div>
        <div class="case-study-menu-containerfix">
          <router-link v-for="(diseaseType, index) in filteredDiseaseTypes" :key="index"
            :to="{ path: '/case-study-list', query: { diseaseType: diseaseType } }"
            :class="`case-study-menu-navlink1 button-common`">
            <span class="heading3">{{ diseaseType }}</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="case-study-menu-footer">
      <footer class="case-study-menu-footer1 footerContainer">
        <div class="case-study-menu-container6">
          <router-link to="/menu" class="case-study-menu-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="case-study-menu-separator"></div>
        <div class="case-study-menu-container7">
          <span class="bodySmall case-study-menu-text24">
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

export default {
  name: 'CaseStudyMenu',
  props: {},
  components: {
    Chatbot,
  },
  data() {
    return {
      diseaseTypes: [],
      name: localStorage.getItem('username'),
      searchQuery: '',
    }
  },
  computed: {
    filteredDiseaseTypes() {
      return this.diseaseTypes.filter(diseaseType => 
        diseaseType.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    }
  },
  created() {
    axios
      .get(`/casestudy/disease/type`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`
          }
        })
      .then((response) => {
        if (response.data.status === 0) {
          this.diseaseTypes = response.data.diseaseTypes;
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
.rounded-input {
  border-radius: 2px;
  padding: 5px;
}

.case-study-menu-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.case-study-menu-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.case-study-menu-logo {
  text-decoration: none;
}

.case-study-menu-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.case-study-menu-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.case-study-menu-burger-menu {
  display: none;
}

.case-study-menu-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.case-study-menu-mobile-menu1 {
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

.case-study-menu-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.case-study-menu-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.case-study-menu-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-study-menu-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.case-study-menu-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.case-study-menu-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.case-study-menu-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.case-study-menu-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.case-study-menu-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.case-study-menu-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.case-study-menu-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.case-study-menu-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.case-study-menu-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.case-study-menu-container1 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.case-study-menu-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.case-study-menu-hero-heading {
  max-width: 800px;
  text-align: center;
}

.case-study-menu-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.case-study-menu-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.case-study-menu-navlink {
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

.case-study-menu-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-custom-secondary1);
}

.case-study-menu-hero-heading1 {
  color: var(--dl-color-gray-black);
  width: 100%;
  text-align: start;
  border-bottom-color:black;
  border-bottom-width: 1px;
}

.case-study-menu-container5 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.case-study-menu-containerfix {
  width: 80%;
  flex-wrap: wrap;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: baseline;
}
.case-study-menu-navlink1 {
  width: 180px;
  height: 100px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center
}

.case-study-menu-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-study-menu-footer1 {
  height: 246;
}

.case-study-menu-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.case-study-menu-logo2 {
  text-decoration: none;
}

.case-study-menu-separator {
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

.case-study-menu-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .case-study-menu-hero {
    flex-direction: column;
  }

  .case-study-menu-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .case-study-menu-hero-heading {
    text-align: center;
  }

  .case-study-menu-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .case-study-menu-hero1 {
    flex-direction: column;
  }

  .case-study-menu-hero-heading1 {
    text-align: center;
  }
}

@media(max-width: 767px) {
  .case-study-menu-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .case-study-menu-desktop-menu {
    display: none;
  }

  .case-study-menu-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .case-study-menu-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-menu-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-menu-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-menu-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-menu-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .case-study-menu-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .case-study-menu-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .case-study-menu-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .case-study-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .case-study-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .case-study-menu-text24 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .case-study-menu-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .case-study-menu-mobile-menu1 {
    padding: 16px;
  }

  .case-study-menu-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .case-study-menu-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-menu-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .case-study-menu-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .case-study-menu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .case-study-menu-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .case-study-menu-text24 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
