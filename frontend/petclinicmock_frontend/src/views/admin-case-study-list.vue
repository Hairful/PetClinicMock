<template>
  <div class="admin-case-study-list-container">
    <div class="admin-case-study-list-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer admin-case-study-list-navbar-interactive"
      >
        <router-link to="/menu" class="admin-case-study-list-logo logo">
          PETCLINICMock
        </router-link>
        <div>
        <div data-thq="thq-navbar-nav" class="admin-case-study-list-desktop-menu">
          <span>
            <span>
              登录用户：
              <span v-html="rawol4e"></span>
            </span>
            <span class="admin-case-study-list-text02">{{ name }}</span>
          </span>
        </div>
        <div>
          <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
        </div>
        </div>
      </header>
    </div>
    <div class="admin-case-study-list-container01"></div>
    <div class="heroContainer admin-case-study-list-hero">
      <div class="admin-case-study-list-container02">
        <h1 class="admin-case-study-list-hero-heading">Manage Cases</h1>
      </div>
    </div>
    <div class="admin-case-study-list-container03">
      <router-link to="/admin-menu" class="admin-case-study-list-navlink button">
        Admin Menu
      </router-link>
    </div>
    <div class="admin-case-study-list-hero1 heroContainer">
      <div class="admin-case-study-list-title" >新增疾病</div>
      <div class="admin-case-study-list-container04">
        <div class="admin-case-study-list-container05">
          <input type="text" v-model="newName" placeholder="Disease Name" class="input" />
        </div>
        <div class="admin-case-study-list-container06">
          <input type="text" v-model="newType" placeholder="Disease Type" class="input" />
        </div>
        <div class="admin-case-study-list-container06">
          <input type="text" v-model="newIntro" placeholder="Disease Introduction" class="input" />
        </div>
        <button type="button" class="admin-case-study-list-button button" @click="addDisease">
          Add Disease
        </button>
      </div>

      <div class="admin-case-study-list-title">修改现有疾病</div>
      <div class="admin-case-study-list-container07">
          <button
            v-for="(diseaseType, index) in diseaseTypes"
            :key="index"
            :class="`case-study-menu-navlink1 button`"
            @click="chooseType(diseaseType)"
          >
            <span class="heading3">{{ diseaseType }}</span>
        </button>
      </div>
      <div class="admin-case-study-list-container07">
        <ul class="admin-case-study-list-ul list">
          <li v-if="this.currentType!=''" class="admin-case-study-list-li list-item Content" >
            <div
            v-for="(disease, index) in diseases"
            :key="disease.diseaseID"
            :class="` Content list-item`"
          >
            <div class="admin-case-study-list-container08">
              <div class="admin-case-study-list-container09">
                <span class="admin-case-study-list-text17 heading3">
                  Disease {{disease.diseaseName}}
                </span>
                <span class="heading3">Type {{currentType}}</span>
              </div>
              <div class="admin-case-study-list-container10">
                <button
                  type="button"
                  class="admin-case-study-list-button1 button"
                  @click = deleteDisease(index)
                >
                  Delete Disease
                </button>
                <router-link
                  :to="`/admin-case-study-detail?diseaseID=${disease.diseaseID}&diseaseName=${disease.diseaseName}&diseaseType=${currentType}`"
                  class="admin-case-study-list-navlink1 button"
                >
                  Manage Cases
                </router-link>
              </div>
              <div class="admin-case-study-list-container11">
                <input type="text" v-model="inputName[index]" :placeholder="`${disease.diseaseName}`" class="input" />
                <button
                  type="button"
                  class="admin-case-study-list-button2 button"
                  @click = renameDisease(index)
                >
                  <span class="admin-case-study-list-text19 bodyLarge">
                    <span>Rename Disease</span>
                    <br />
                  </span>
                </button>
              </div>
              <div class="admin-case-study-list-container12">
                <input type="text" v-model="inputType[index]" :placeholder="`${currentType}`" class="input" />
                <button
                  type="button"
                  class="admin-case-study-list-button3 button"
                  @click = renameDisease(index)
                >
                  <span class="admin-case-study-list-text22 bodyLarge">
                    Change Type
                  </span>
                </button>
              </div>
            </div>
          </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="admin-case-study-list-footer">
      <footer class="admin-case-study-list-footer1 footerContainer">
        <div class="admin-case-study-list-container18">
          <router-link to="/menu" class="admin-case-study-list-logo2 logo">
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
import axios from 'axios';
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
      currentType:'',
      diseaseTypes: [],
      diseases: [],
      inputName:[],
      inputType:[],
      newName:'',
      newType:'',
      newIntro:'',
      name:localStorage.getItem('username'),
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/');
    },
    renameDisease(index){
      const diseaseName = this.inputName[index];
      const diseaseID = this.diseases[index].diseaseID;
      const diseaseType = this.inputType[index];
      axios({
          method: 'put',
          url: '/admin/disease',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          },
          data: {
            diseaseID : diseaseID,
            diseaseName : diseaseName,
            diseaseType : diseaseType,
          }
        })
        .then(response => {
          this.refresh();
          this.chooseType(this.inputType[index]);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
     },
    async deleteDisease(index){
      try {
        const response = await axios.delete(`/admin/disease?diseaseID=${this.diseases[index].diseaseID}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          }
        });
        this.refresh();
        if(this.diseases.length<=1){
          this.chooseType('');
        }
        else{
          this.chooseType(this.currentType);
          }
      } catch (error) {
        console.log(error);
      }
    },
    addDisease(){
      axios({
          method: 'post',
          url: '/admin/disease',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          },
          data: {
            diseaseIntro : this.newIntro,
            diseaseName : this.newName,
            diseaseType : this.newType,
          }
        })
        .then(response => {
          this.refresh();
          this.chooseType(this.newType);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    chooseType(type){
      this.currentType=type;
      axios
      .get(`/disease/list?diseaseType=${this.currentType}`, 
        {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`
        }
      })
      .then((response) => {
        if (response.data.status === 0) {
          this.diseases = response.data.diseases;
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    },
    refresh(){
    axios
      .get(`/disease/type`, 
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
  },
  created() {
    axios
      .get(`/disease/type`, 
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
.admin-case-study-list-title {
  color: var(--dl-color-gray-white);
  font-size: 20px;
  align-self: center;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
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
