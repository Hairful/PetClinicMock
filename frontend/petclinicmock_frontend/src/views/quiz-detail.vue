<template>
  <div class="quiz-detail-container">
    <div class="quiz-detail-header">
      <header data-thq="thq-navbar" class="navbarContainer quiz-detail-navbar-interactive">
        <router-link to="/menu" class="quiz-detail-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <router-link to="/menu" class="head-router"> 菜单 </router-link>
          <router-link to="/virtual-tour" class="head-router"> 导览 </router-link>
          <router-link to="/case-study-menu" class="head-router"> 学习 </router-link>
          <router-link to="/role-play-menu" class="head-router"> 扮演 </router-link>
          <router-link to="/quiz-list" class="head-router-current"> 测试 </router-link>
        </div>
        <div class="quiz-detail-container01">
          <div data-thq="thq-navbar-nav" class="quiz-detail-desktop-menu">
            <span>
              <span>
                登录用户：
              </span>
              <span class="quiz-detail-text02">{{ name }}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="heroContainer">
      <div class="containerCenter">
        <el-dialog title="确认提交" :visible.sync="dialogFormVisible" v-if="dialogFormVisible" width="600px"
          style="margin-top: 10%;">
          <div class="containerCenter" style="flex-direction: column;align-content: center;display: flex;">
            <div v-if="isUnfinished" class="bodyLarge" style="margin: 4%;">
              尚有未完成的题目
            </div>
            <div class="bodyLarge" style="margin: 4%;">
              是否确认提交
            </div>
            <div>
              <button class="quiz-detail-navlink2 button" @click="confirmSubmit(1)">确认</button>
              <button class="quiz-detail-navlink2 button" @click="confirmSubmit(0)">取消</button>
            </div>
          </div>
        </el-dialog>
        <suspenPopup top="500" left="60" height="150" width="650">
          <div class="supen-popup">
            <div>
              剩余时间：{{ rest_h }}:{{ rest_min }}:{{ rest_s }}<br></br>
            </div>
            <div>
              题目完成情况：
            </div>
            <div class="quiz-situation">
              <div v-for="(prob, index) in probs">
                <button v-if="ans[index]" class="quiz-finished button" @click="switchProb(index)"> {{ index + 1 }} </button>
                <button v-else="!ans[index]" class="quiz-unfinished button" @click="switchProb(index)"> {{ index + 1 }}
                </button>
              </div>
            </div>
          </div>
        </suspenPopup>
      </div>
      <div class="shadowContainer-white">
        <div class="containerCenter" v-if="probs && probs.length > 0">
          <div class="quiz-detail-container05">
            <h1 class="quiz-detail-hero-heading1 heading1">
              <span class="heading1">问题 {{ this.currentProb + 1 }}</span>
              <br />
            </h1>
            <div class="quiz-detail-container06">
              <span class="bodyLarge">({{ probs[this.currentProb].probCredit }}分)</span>
              <span class="bodyLarge" v-html="probs[this.currentProb].probText"></span>
              <div class="quiz-detail-container07">
                <img v-if="probs[this.currentProb].probImg" alt="image" :src="`${probs[this.currentProb].probImg}`"
                  class="quiz-detail-image" />
              </div>
              <div class="quiz-detail-container08">
                <select class="quiz-detail-select" v-model="ans[currentProb]">
                  <option value=A>A</option>
                  <option value=B>B</option>
                  <option value=C>C</option>
                  <option value=D>D</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="containerCenter" style="
        margin-top: 10%;
        ">
          <button class="quiz-detail-navlink2 button" @click="lastProb">上一题</button>
          <button class="quiz-detail-navlink2 button" @click="nextProb">下一题</button>
          <button class="quiz-detail-navlink2 button" @click="trySubmit">提交测试</button>
        </div>
      </div>
    </div>
    <div class="quiz-detail-footer">
      <footer class="quiz-detail-footer1 footerContainer">
        <div class="quiz-detail-container14">
          <router-link to="/menu" class="quiz-detail-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="quiz-detail-separator"></div>
        <div class="quiz-detail-container15">
          <span class="bodySmall quiz-detail-text24">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import suspenPopup from '../components/suspenPopup.vue';
export default {
  name: 'QuizDetail',
  props: {},
  components: {
    suspenPopup,
  },
  data() {
    return {
      name: localStorage.getItem('username'),
      ID: localStorage.getItem('userID'),
      quizID: '',
      probs: [],
      quizName: '',
      totalCredits: '',
      currentProb: '',
      ans: [],
      answers: [],
      credit: 0,
      timer: null,
      totalTime: 0,
      rest_h: 0,
      rest_min: 0,
      rest_s: 0,
      rest_ms: 0,
      dialogFormVisible: false,
      confirm: false,
      isUnfinished: false,
    }
  },
  methods: {
    confirmSubmit(flag) {
      this.dialogFormVisible = false;
      this.isUnfinished = false;
      if (flag) {
        this.confirm = true;
      }
      if (this.confirm) {
        this.submit();
      }
    },
    switchProb(num) {
      this.currentProb = num;
    },
    async pushResult() {
      try {
        const response = await axios.post('/quiz/result', {
          quizID: this.quizID,
          credit: this.credit,
          answers: this.answers,
        });

        console.log(response.data);
        if (response.data.status === 0) {
          // Login successful
          this.$router.push(`/quiz-result?quizID=${this.quizID}`); // Navigate to menu page
        } else if (response.data.status === 1) {
          // Login failed
          this.$message.warning('Wrong username or password.');
        } else {
          // Handle other status
          this.$message.warning('Username not found.');
        }
      } catch (error) {
        // Handle error
      }
    },
    option2ans(option) {
      switch (option) {
        case "A":
          return 1;
        case "B":
          return 2;
        case "C":
          return 3;
        case "D":
          return 4;
        default:
          return -1;
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    lastProb() {
      if (this.currentProb == 0) {
        this.$message.warning('已是第一题')
      }
      else
        this.currentProb--;

    },
    nextProb() {
      if (this.currentProb >= this.probs.length - 1) {
        this.$message.warning('已为最后一题')
      }
      else
        this.currentProb++;
    },
    getRestTime(time) {
      this.rest_h = parseInt(time / 3600);
      time = parseInt(time % 3600);
      this.rest_min = parseInt(time / 60);
      time = parseInt(time % 60);
      this.rest_s = parseInt(time);
    },
    startTimer() {
      console.log('start counting');
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.totalTime--; //递减
        this.getRestTime(this.totalTime);
        if (this.totalTime === 300) {
          this.$message('还剩5分钟!');
        }
        if (this.totalTime === 0) {
          // === 0 变成获取按钮
          clearInterval(this.timer);
          this.isCounting = false;
          this.$message('时间到!');
          this.submit();
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    trySubmit() {
      for (let i = 0; i < this.probs.length; i++) {
        if (!this.ans[i]) {
          this.isUnfinished = true;
          break;
        }
      }
      this.dialogFormVisible = true;
    },
    submit() {
      for (let i = 0; i < this.ans.length; i++) {
        let unit = {};
        unit.probNumber = this.probs[i].probID;
        unit.ans = this.option2ans(this.ans[i]);
        this.answers.push(unit);
        if (this.option2ans(this.ans[i]) == this.probs[i].probAns) {
          this.credit += this.probs[i].probCredit;
        }
      }
      this.pushResult();
    },
  },
  created() {
    this.quizID = this.$route.query.quizID;
    this.currentProb = 0;
    const authToken = localStorage.getItem('Token');
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
          this.totalTime = response.data.timer * 60;
          console.log(response.data);
        } else if (response.data.status === 1) {
          console.log('No corresponding quizID');
        }
      })
      .catch(error => {
        console.log(error);
        this.$message.warning(error.message);
      });
    this.startTimer();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  metaInfo: {
    title: 'QuizDetail - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'QuizDetail - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.head-router {
  width: 50px;
  height: auto;
  font-size: 24px;
  text-align: center;
  font-family: STIX Two Text;
  font-weight: 400;
  line-height: 150%;
  margin-left: 20px;
}

.head-router:hover {
  color: gray;
}

.head-router-current {
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

.quiz-unfinished {
  border: 2px solid #aaa;
  align-self: center;
  width: 40px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: var(--dl-color-danger-700);
}

.quiz-finished {
  border: 2px solid #aaa;
  align-self: center;
  width: 40px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: var(--dl-color-success-700);
}

.supen-popup {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 5px solid #aaa;
  font-size: 24rpx;
  width: 200px;
  height: auto;
}

.quiz-situation {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 200px;
  height: auto;
}

.quiz-detail-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.quiz-detail-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.quiz-detail-logo {
  text-decoration: none;
}

.quiz-detail-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}

.quiz-detail-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.quiz-detail-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.quiz-detail-burger-menu {
  display: none;
}

.quiz-detail-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.quiz-detail-mobile-menu1 {
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

.quiz-detail-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-detail-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.quiz-detail-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.quiz-detail-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.quiz-detail-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-detail-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.quiz-detail-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.quiz-detail-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.quiz-detail-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.quiz-detail-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.quiz-detail-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.quiz-detail-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.quiz-detail-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.quiz-detail-container02 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-detail-hero {
  padding-bottom: var(--dl-space-space-sixunits);
}

.quiz-detail-container03 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.quiz-detail-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}

.quiz-detail-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}

.quiz-detail-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.quiz-detail-container04 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-custom-secondary1);
}

.quiz-detail-navlink {
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

.quiz-detail-navlink1 {
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

.quiz-detail-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  padding-bottom: 0px;
  background-color: var(--dl-color-gray-black);
}

.quiz-detail-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.quiz-detail-hero-heading1 {
  color: var(--dl-color-gray-black);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}

.quiz-detail-container06 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-detail-text22 {
  color: var(--dl-color-gray-white);
}

.quiz-detail-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.quiz-detail-image {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}

.quiz-detail-image1 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}

.quiz-detail-container08 {
  flex: 1;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.quiz-detail-select {
  width: 50px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
}

.quiz-detail-container09 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.quiz-detail-hero-heading2 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}

.quiz-detail-container10 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-detail-text23 {
  color: var(--dl-color-gray-white);
}

.quiz-detail-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.quiz-detail-image2 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}

.quiz-detail-image3 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}

.quiz-detail-container12 {
  flex: 1;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.quiz-detail-select1 {
  width: 50px;
  height: auto;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
}

.quiz-detail-container13 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.quiz-detail-navlink2 {
  color: var(--dl-color-gray-white);
  font-size: 20px;
  margin-right: 20px;
  align-self: center;
  font-style: normal;
  font-weight: 600;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  text-decoration: none;
  background-color: var(--dl-color-custom-primary1);
}

.quiz-detail-navlink2:hover {
  background-color: var(--dl-color-custom-primary2);
}

.quiz-detail-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quiz-detail-footer1 {
  height: 246;
}

.quiz-detail-container14 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.quiz-detail-logo2 {
  text-decoration: none;
}

.quiz-detail-separator {
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

.quiz-detail-container15 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .quiz-detail-hero {
    flex-direction: column;
  }

  .quiz-detail-container03 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .quiz-detail-hero-heading {
    text-align: center;
  }

  .quiz-detail-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .quiz-detail-hero1 {
    flex-direction: column;
  }

  .quiz-detail-hero-heading1 {
    text-align: center;
  }

  .quiz-detail-hero-heading2 {
    text-align: center;
  }
}

@media(max-width: 767px) {
  .quiz-detail-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .quiz-detail-desktop-menu {
    display: none;
  }

  .quiz-detail-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quiz-detail-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-detail-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-detail-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-detail-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-detail-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .quiz-detail-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .quiz-detail-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .quiz-detail-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .quiz-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .quiz-detail-container15 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .quiz-detail-text24 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .quiz-detail-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .quiz-detail-mobile-menu1 {
    padding: 16px;
  }

  .quiz-detail-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .quiz-detail-container03 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-detail-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .quiz-detail-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .quiz-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .quiz-detail-container15 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .quiz-detail-text24 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
