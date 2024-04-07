<template>
  <div class="case-study-detail-container">
    <div class="case-study-detail-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer case-study-detail-navbar-interactive"
      >
        <router-link to="/menu" class="case-study-detail-logo logo">
          PETCLINICMock
        </router-link>
        <div class="case-study-detail-container01">
          <div data-thq="thq-navbar-nav" class="case-study-detail-desktop-menu">
            <span>
              <span>
                登录用户：
                <span v-html="rawfj20"></span>
              </span>
              <span class="case-study-detail-text02">{{name}}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="case-study-detail-container02"></div>
    <div class="case-study-detail-hero heroContainer">
      <div class="case-study-detail-container03">
        <h1 class="case-study-detail-hero-heading">
          <span class="heading1">
            病例学习：
            <span v-html="rawvn6p"></span>
          </span>
          <span class="case-study-detail-text04"> {{ diseaseName }} </span>
        </h1>
      </div>
    </div>
    <div class="case-study-detail-container04">
      <router-link :to="{path:'/case-study-list', query:{diseaseType:this.diseaseType}}" class="case-study-detail-navlink button">
        重选疾病
      </router-link>
      <router-link to="/role-play-menu" class="case-study-detail-navlink1 button">
        重选疾病类型
      </router-link>
      <router-link to="/menu" class="case-study-detail-navlink2 button">
        返回菜单
      </router-link>
    </div>
    <div class="case-study-detail-hero1 heroContainer">
      <div class="case-study-detail-container05">
        <h1 class="case-study-detail-hero-heading1 heading1">
          <span class="heading1">疾病介绍</span>
          <br />
        </h1>
        <div class="case-study-detail-container06">
          <span class="case-study-detail-text21 bodyLarge"> {{ diseaseIntro }} </span>
        </div>
      </div>
      <div class="case-study-detail-container09" v-for="(caseItem, index) in cases" :key="index">
        <h1 class="case-study-detail-hero-heading2 heading1">
          <span class="heading1">病例 {{ caseItem.caseID }}</span>
          <br />
        </h1>
        <div class="case-study-detail-container10">
          <span class="case-study-detail-text24 heading2">介绍</span>
          <span class="case-study-detail-text25 bodyLarge"> {{ caseItem.details.summary }} </span>
          <div class="case-study-detail-container11">
            <img
              v-for="(pic, picIndex) in caseItem.details.summaryPictures"
              :key="`summary-pic-${picIndex}`"
              alt="image"
              :src="pic"
              class="case-study-detail-image02"
            />
          </div>
          <div class="case-study-detail-container12">
            <video
              v-for="(vid, vidIndex) in caseItem.details.summaryVideos"
              :key="`summary-vid-${vidIndex}`"
              :src="vid"
              class="case-study-detail-video02"
              controls
            ></video>
          </div>
        </div>
        <div class="case-study-detail-container10">
          <span class="case-study-detail-text24 heading2">检查结果</span>
          <span class="case-study-detail-text25 bodyLarge"> {{ caseItem.details.examine }} </span>
          <div class="case-study-detail-container11">
            <img
              v-for="(pic, picIndex) in caseItem.details.examinePictures"
              :key="`examine-pic-${picIndex}`"
              alt="image"
              :src="pic"
              class="case-study-detail-image02"
            />
          </div>
          <div class="case-study-detail-container12">
            <video
              v-for="(vid, vidIndex) in caseItem.details.examineVideos"
              :key="`examine-vid-${vidIndex}`"
              :src="vid"
              class="case-study-detail-video02"
              controls
            ></video>
          </div>
        </div>
        <div class="case-study-detail-container10">
          <span class="case-study-detail-text24 heading2">临床诊断</span>
          <span class="case-study-detail-text25 bodyLarge"> {{ caseItem.details.diagnose }} </span>
          <div class="case-study-detail-container11">
            <img
              v-for="(pic, picIndex) in caseItem.details.diagnosePictures"
              :key="`diagnose-pic-${picIndex}`"
              alt="image"
              :src="pic"
              class="case-study-detail-image02"
            />
          </div>
          <div class="case-study-detail-container12">
            <video
              v-for="(vid, vidIndex) in caseItem.details.diagnoseVideos"
              :key="`diagnose-vid-${vidIndex}`"
              :src="vid"
              class="case-study-detail-video02"
              controls
            ></video>
          </div>
        </div>
        <div class="case-study-detail-container10">
          <span class="case-study-detail-text24 heading2">治疗方案</span>
          <span class="case-study-detail-text25 bodyLarge"> {{ caseItem.details.treatment }} </span>
          <div class="case-study-detail-container11">
            <img
              v-for="(pic, picIndex) in caseItem.details.treatmentPictures"
              :key="`treatment-pic-${picIndex}`"
              alt="image"
              :src="pic"
              class="case-study-detail-image02"
            />
          </div>
          <div class="case-study-detail-container12">
            <video
              v-for="(vid, vidIndex) in caseItem.details.treatmentVideos"
              :key="`treatment-vid-${vidIndex}`"
              :src="vid"
              class="case-study-detail-video02"
              controls
            ></video>
          </div>
        </div>
        <div class="case-study-detail-container22">
          <span class="case-study-detail-text32 heading2">药物使用</span>
          // todo link to pharmacy
          <router-link 
            v-for="(medicine, medIndex) in caseItem.details.medicines" 
            :key="`medicine-${medIndex}`" 
            to="/pharmacy" 
            class="case-study-detail-navlink3"
          >
            <span class="bodyLarge"> {{ medicine.medicineName }}, {{ medicine.medicineIntro }}</span>
            <br />
          </router-link>
        </div>
      </div>
    </div>
    <div class="case-study-detail-footer">
      <footer class="case-study-detail-footer1 footerContainer">
        <div class="case-study-detail-container23">
          <router-link to="/menu" class="case-study-detail-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="case-study-detail-separator"></div>
        <div class="case-study-detail-container24">
          <span class="bodySmall case-study-detail-text35">
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
  name: 'CaseStudyDetail',
  props: {},
  data() {
    return {
      rawfj20: ' ',
      rawvn6p: ' ',
      rawladw: ' ',
      rawavtc: ' ',
      rawa98j: ' ',
      raw1zgt: ' ',
      raw2v0y: ' ',
      raw4oma: ' ',
      rawlrae: ' ',
      diseaseID: ' ',
      diseaseName: ' ',
      diseaseType: ' fwfwfwef',
      name:localStorage.getItem('username'),
      diseaseIntro: ' ',
      cases: []
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/');
    }
  },
  created() {
    this.diseaseType = this.$route.query.diseaseType;
    this.diseaseID = this.$route.query.diseaseID;
    this.diseaseName = this.$route.query.diseaseName;

    const authToken = localStorage.getItem('authToken'); // replace 'authToken' with the key you used to store the token

    // Fetch disease details
    axios.get(`/disease/detail?diseaseID=${this.diseaseID}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(response => {
      if (response.data.status === 0) {
        this.diseaseIntro = response.data.diseaseDetail.diseaseIntro;
      } else if (response.data.status === 1) {
        console.log('No corresponding diseaseID');
      }
    });
    // Fetch case list
    axios.get(`/casestudy/case/list?diseaseID=${this.diseaseID}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(async response => {
      if (response.data.status === 0) {
        this.cases = response.data.cases;
        // Check if cases is not empty
        if (this.cases && this.cases.length > 0) {
          // Fetch details for each case
          const casePromises = this.cases.map(caseItem => {
            return axios.get(`/casestudy/case/detail?caseID=${caseItem.caseID}`, {
              headers: {
                'Authorization': `Bearer ${authToken}`
              }
            })
            .then(response => {
              if (response.data.status === 0) {
                return response.data;
              } else if (response.data.status === 1) {
                console.log('No corresponding caseID');
                return null;
              }
            });
          });

          const caseDetails = await Promise.all(casePromises);
          this.cases = this.cases.map((caseItem, index) => {
            caseItem.details = caseDetails[index];
            return caseItem;
          });
        }
      }
    })
    .catch(error => {
      console.error(error);
    });
  },
  metaInfo: {
    title: 'CaseStudyDetail - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'CaseStudyDetail - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.case-study-detail-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.case-study-detail-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.case-study-detail-logo {
  text-decoration: none;
}
.case-study-detail-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.case-study-detail-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.case-study-detail-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.case-study-detail-burger-menu {
  display: none;
}
.case-study-detail-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.case-study-detail-mobile-menu1 {
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
.case-study-detail-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.case-study-detail-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-study-detail-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.case-study-detail-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-detail-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-detail-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-detail-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.case-study-detail-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.case-study-detail-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.case-study-detail-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.case-study-detail-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.case-study-detail-container02 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-hero {
  padding-bottom: var(--dl-space-space-sixunits);
}
.case-study-detail-container03 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.case-study-detail-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.case-study-detail-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}
.case-study-detail-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.case-study-detail-container04 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.case-study-detail-navlink {
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
.case-study-detail-navlink1 {
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
.case-study-detail-navlink2 {
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
.case-study-detail-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.case-study-detail-container05 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.case-study-detail-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container06 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text21 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image01 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video01 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container09 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.case-study-detail-hero-heading2 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container10 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text24 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-text25 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image02 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image03 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video02 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video03 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container13 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text26 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-text27 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container14 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image04 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image05 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container15 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video04 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video05 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container16 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text28 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-text29 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container17 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image06 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image07 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container18 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video06 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video07 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container19 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text30 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-text31 {
  color: var(--dl-color-gray-white);
}
.case-study-detail-container20 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.case-study-detail-image08 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-image09 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container21 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-video08 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-video09 {
  width: 320px;
  height: 180px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.case-study-detail-container22 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.case-study-detail-text32 {
  color: var(--dl-color-gray-white);
  text-align: center;
}
.case-study-detail-navlink3 {
  color: var(--dl-color-gray-white);
  text-decoration: none;
}
.case-study-detail-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-study-detail-footer1 {
  height: 246;
}
.case-study-detail-container23 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.case-study-detail-logo2 {
  text-decoration: none;
}
.case-study-detail-separator {
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
.case-study-detail-container24 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .case-study-detail-hero {
    flex-direction: column;
  }
  .case-study-detail-container03 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .case-study-detail-hero-heading {
    text-align: center;
  }
  .case-study-detail-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .case-study-detail-hero1 {
    flex-direction: column;
  }
  .case-study-detail-hero-heading1 {
    text-align: center;
  }
  .case-study-detail-hero-heading2 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .case-study-detail-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-detail-desktop-menu {
    display: none;
  }
  .case-study-detail-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .case-study-detail-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-detail-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .case-study-detail-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-detail-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .case-study-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .case-study-detail-container24 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .case-study-detail-text35 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .case-study-detail-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .case-study-detail-mobile-menu1 {
    padding: 16px;
  }
  .case-study-detail-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .case-study-detail-container03 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .case-study-detail-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .case-study-detail-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .case-study-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .case-study-detail-container24 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .case-study-detail-text35 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>