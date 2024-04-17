<template>
  <div class="case-study-list-container">
    <Chatbot />
    <div class="case-study-list-header">
      <header data-thq="thq-navbar" class="navbarContainer case-study-list-navbar-interactive">
        <router-link to="/menu" class="case-study-list-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <div data-thq="thq-navbar-nav" class="case-study-list-desktop-menu">
            <span>
              <span>
                登录用户：
              </span>
              <span class="case-study-list-text02">{{ name }}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="case-study-list-container1"></div>
    <div class="heroContainer case-study-list-hero">
      <div class="case-study-list-container2">
        <h1 class="case-study-list-hero-heading">
          <span class="heading1">
            病例学习：
          </span>
          <span class="case-study-list-text04"> {{ this.diseaseType }} </span>
        </h1>
      </div>
    </div>
    <div class="case-study-list-container3">
      <router-link to="/case-study-menu" class="case-study-list-navlink button">
        重选疾病类型
      </router-link>
      <router-link to="/menu" class="case-study-list-navlink1 button">
        返回菜单
      </router-link>
    </div>
    <div class="case-study-list-hero1 heroContainer">
      <h1 class="case-study-list-hero-heading1">
        <span class="heading1">选择疾病</span>
        <br />
      </h1>
      <div class="case-study-list-container4">
        <!-- <ul class="case-study-list-ul list">
          <li v-for="(disease, index) in diseases" :key="disease.diseaseID"
            :class="`case-study-list-li Content list-item`">
            <router-link
              :to="`/case-study-detail?diseaseID=${disease.diseaseID}&diseaseName=${disease.diseaseName}&diseaseType=${diseaseType}`"
              :class="`case-study-list-navlink2 bodyLarge button`">
              {{ disease.diseaseName }}
            </router-link>
          </li>
        </ul> -->
        <div v-for="(disease, index) in diseases" :key="disease.diseaseID"
            :class="`case-study-list-li Content list-item`">
            <router-link
              :to="`/case-study-detail?diseaseID=${disease.diseaseID}&diseaseName=${disease.diseaseName}&diseaseType=${diseaseType}`"
              :class="`case-study-list-navlink2 bodyLarge button`">
              {{ disease.diseaseName }}
            </router-link>
          </div>
      </div>
    </div>
    <div class="case-study-list-footer">
      <footer class="case-study-list-footer1 footerContainer">
        <div class="case-study-list-container5">
          <router-link to="/menu" class="case-study-list-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="case-study-list-separator"></div>
        <div class="case-study-list-container6">
          <span class="bodySmall case-study-list-text21">
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
  name: 'CaseStudyList',
  props: {},
  components: {
    Chatbot,
  },
  data() {
    return {
      diseaseType: ' ',
      diseases: [],
      name: localStorage.getItem('username'),
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    }
  },
  created() {
    this.diseaseType = this.$route.query.diseaseType;
    axios
      .get(`/casestudy/disease/list?diseaseType=${this.diseaseType}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`
          }
        })
      .then((response) => {
        if (response.data.status === 0) {
          this.diseases = response.data.diseases;
        } else if (response.data.status === 1) {
          console.log('No corresponding diseaseType');
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  metaInfo: {
    title: 'CaseStudyList - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'CaseStudyList - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.case-study-list-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.case-study-list-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.case-study-list-logo {
  text-decoration: none;
}

.case-study-list-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.case-study-list-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.case-study-list-burger-menu {
  display: none;
}

.case-study-list-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.case-study-list-mobile-menu1 {
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

.case-study-list-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.case-study-list-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.case-study-list-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-study-list-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.case-study-list-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.case-study-list-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.case-study-list-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.case-study-list-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.case-study-list-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.case-study-list-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.case-study-list-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.case-study-list-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.case-study-list-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.case-study-list-container1 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.case-study-list-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.case-study-list-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}

.case-study-list-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}

.case-study-list-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.case-study-list-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.case-study-list-navlink {
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

.case-study-list-navlink1 {
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

.case-study-list-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}

.case-study-list-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}

.case-study-list-container4 {
  flex-wrap: wrap;
  width: 75%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: baseline;
}

.case-study-list-ul {
  width: 285px;
  position: relative;
}

.case-study-list-li {
  color: var(--dl-color-gray-white);
  width: 23%;
  margin-right: 5%;
  margin-left: 5%;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  background-color: var(--dl-color-custom-primary2);
  list-style-image: none;
  list-style-position: outside;
}

.case-study-list-navlink2 {
  color: var(--dl-color-gray-white);
  text-align: left;
  border-color: var(--dl-color-gray-white);
  border-width: 0px;
  border-radius: 0px;
  text-decoration: none;
  background-color: transparent;
}

.case-study-list-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-study-list-footer1 {
  height: 246;
}

.case-study-list-container5 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.case-study-list-logo2 {
  text-decoration: none;
}

.case-study-list-separator {
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

.case-study-list-container6 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .case-study-list-hero {
    flex-direction: column;
  }

  .case-study-list-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .case-study-list-hero-heading {
    text-align: center;
  }

  .case-study-list-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .case-study-list-hero1 {
    flex-direction: column;
  }

  .case-study-list-hero-heading1 {
    text-align: center;
  }
}

@media(max-width: 767px) {
  .case-study-list-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .case-study-list-desktop-menu {
    display: none;
  }

  .case-study-list-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .case-study-list-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-list-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-list-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-list-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-list-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .case-study-list-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .case-study-list-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .case-study-list-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .case-study-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .case-study-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .case-study-list-text21 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .case-study-list-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .case-study-list-mobile-menu1 {
    padding: 16px;
  }

  .case-study-list-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .case-study-list-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .case-study-list-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .case-study-list-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .case-study-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .case-study-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .case-study-list-text21 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
