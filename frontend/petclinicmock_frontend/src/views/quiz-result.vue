<template>
  <div class="quiz-result-container">
    <div class="quiz-result-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer quiz-result-navbar-interactive"
      >
        <router-link to="/menu" class="quiz-result-logo logo">
          PETCLINICMock
        </router-link>
        <div class="quiz-result-container01">
          <div data-thq="thq-navbar-nav" class="quiz-result-desktop-menu">
            <span>
              <span>
                登录用户：
              </span>
              <span class="quiz-result-text02">{{name}}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="quiz-result-container02"></div>
    <div class="quiz-result-hero heroContainer">
      <div class="quiz-result-container03">
        <h1 class="quiz-result-hero-heading">
          <span class="heading1">
            测试结果：
          </span> 
          <span class="quiz-result-text04">Quiz {{ this.quizName }}</span>
        </h1>
        <span class="heading2">总分： {{ this.totalCredits }}</span>
        <span class="heading2">
          <span class="heading2">
            你的得分：
          </span>
          <span class="quiz-result-text08">{{ this.yourCredit }}</span>
        </span>
      </div>
    </div>
    <div class="quiz-result-container04">
      <router-link :to="{path:'/quiz-detail', query:{ quizID: this.quizID } }" class="quiz-result-navlink button">
        重新测试
      </router-link>
      <router-link to="/quiz-list" class="quiz-result-navlink1 button">
        选择测试
      </router-link>
      <router-link to="/menu" class="quiz-result-navlink2 button">
        返回菜单
      </router-link>
    </div>
    <div class="quiz-result-hero1 heroContainer">
      <div v-for="(prob,index) in probs" class="quiz-result-container05">
        <h1 class="quiz-result-hero-heading1 heading1">
          <span class="heading1">问题 {{ index+1 }}</span>
          <br/>
        </h1>
        <div class="quiz-result-container06">
          <span class="quiz-result-text25 bodyLarge" v-html="prob.probText"></span>
          <div class="quiz-result-container07">
            <img v-if="prob.probImg" :src="prob.probImg" alt="quiz image" />
          </div>
          <div class="quiz-result-container09">
            <div class="quiz-result-container08">
              <span class="quiz-result-text26 heading3">正确答案：</span>
              <span class="quiz-result-text26 heading3" v-html="ans2option(prob.probAns)"></span>
            </div>
            <div class="quiz-result-container08">
            <span  v-if="prob.lastAns==prob.probAns">
              <span class="quiz-result-text26 heading3">你的答案：</span>
              <span class="quiz-result-text26 heading3" v-html="ans2option(prob.lastAns)"></span>
            </span>
            <span  v-else="prob.lastAns!=prob.probAns">
              <span class="quiz-result-text27 heading3">你的答案：</span>
              <span class="quiz-result-text27 heading3" v-html="ans2option(prob.lastAns)"></span>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="quiz-result-footer">
      <footer class="quiz-result-footer1 footerContainer">
        <div class="quiz-result-container13">
          <router-link to="/menu" class="quiz-result-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="quiz-result-separator"></div>
        <div class="quiz-result-container14">
          <span class="bodySmall quiz-result-text33">
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
  name: 'QuizResult',
  props: {},
  data() {
    return {
      raw2fy2: ' ',
      name:localStorage.getItem('username'),
      quizID:'',
      probs:[],
      quizName:'',
      totalCredits:'',
      yourCredit:0,
    }
  },
  methods:{
    ans2option(ans)
    {
      switch(ans){
        case 1:
          return 'A';
        case 2:
          return 'B';
        case 3:
          return 'C';
        case 4:
          return 'D';
        default:
            return '';
      }
    },
    logout(){
      localStorage.clear();
      this.$router.push('/');
    },
  },
  created() {
    this.quizID = this.$route.query.quizID;
    const authToken = localStorage.getItem('Token'); // replace 'authToken' with the key you used to store the token
    // Fetch disease details
    axios.get(`/quiz/detail?quizID=${this.quizID}`, 
    {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(response => {
      if (response.data.status === 0) {
        this.probs = response.data.probs;
        this.quizName = response.data.quizName;
        this.totalCredits = response.data.totalCredits;
        this.yourCredit = response.data.lastTry;
      } else if (response.data.status === 1) {
        console.log('No corresponding quizID');
      }
    });
    },
  metaInfo: {
    title: 'QuizResult - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'QuizResult - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.quiz-result-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.quiz-result-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.quiz-result-logo {
  text-decoration: none;
}
.quiz-result-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.quiz-result-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.quiz-result-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.quiz-result-burger-menu {
  display: none;
}
.quiz-result-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.quiz-result-mobile-menu1 {
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
.quiz-result-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz-result-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.quiz-result-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz-result-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.quiz-result-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.quiz-result-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.quiz-result-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.quiz-result-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.quiz-result-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.quiz-result-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.quiz-result-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.quiz-result-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.quiz-result-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.quiz-result-container02 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz-result-hero {
  padding-bottom: var(--dl-space-space-sixunits);
}
.quiz-result-container03 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.quiz-result-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.quiz-result-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}
.quiz-result-text08 {
  color: var(--dl-color-primary-100);
}
.quiz-result-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.quiz-result-container04 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.quiz-result-navlink {
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
.quiz-result-navlink1 {
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
.quiz-result-navlink2 {
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
.quiz-result-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-sixunits);
  background-color: var(--dl-color-gray-black);
}
.quiz-result-container05 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.quiz-result-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.quiz-result-container06 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz-result-text25 {
  color: var(--dl-color-gray-white);
}
.quiz-result-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.quiz-result-image {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.quiz-result-image1 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.quiz-result-container08 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.quiz-result-container09 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.quiz-result-text26 {
  color: var(--dl-color-success-700);
}
.quiz-result-text27 {
  color: var(--dl-color-danger-700);
}
.quiz-result-container09 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.quiz-result-hero-heading2 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}
.quiz-result-container10 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.quiz-result-text30 {
  color: var(--dl-color-gray-white);
}
.quiz-result-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.quiz-result-image2 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.quiz-result-image3 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.quiz-result-container12 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.quiz-result-text31 {
  color: var(--dl-color-success-700);
}
.quiz-result-text32 {
  color: var(--dl-color-success-700);
}
.quiz-result-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz-result-footer1 {
  height: 246;
}
.quiz-result-container13 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.quiz-result-logo2 {
  text-decoration: none;
}
.quiz-result-separator {
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
.quiz-result-container14 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .quiz-result-hero {
    flex-direction: column;
  }
  .quiz-result-container03 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .quiz-result-hero-heading {
    text-align: center;
  }
  .quiz-result-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .quiz-result-hero1 {
    flex-direction: column;
  }
  .quiz-result-hero-heading1 {
    text-align: center;
  }
  .quiz-result-hero-heading2 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .quiz-result-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .quiz-result-desktop-menu {
    display: none;
  }
  .quiz-result-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .quiz-result-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-result-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-result-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-result-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-result-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .quiz-result-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .quiz-result-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .quiz-result-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .quiz-result-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .quiz-result-container14 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .quiz-result-text33 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .quiz-result-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .quiz-result-mobile-menu1 {
    padding: 16px;
  }
  .quiz-result-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .quiz-result-container03 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .quiz-result-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .quiz-result-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .quiz-result-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .quiz-result-container14 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .quiz-result-text33 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
