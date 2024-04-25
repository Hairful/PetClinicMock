<template>
  <div class="quiz-list-container">
    <div class="quiz-list-header">
      <header data-thq="thq-navbar" class="navbarContainer quiz-list-navbar-interactive">
        <router-link to="/menu" class="quiz-list-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <router-link to="/menu" class="head-router"> 菜单 </router-link>
          <router-link to="/virtual-tour" class="head-router"> 导览 </router-link>
          <router-link to="/case-study-menu" class="head-router"> 学习 </router-link>
          <router-link to="/role-play-menu" class="head-router"> 扮演 </router-link>
          <router-link to="/quiz-list" class="head-router-current"> 测试 </router-link>
        </div>
        <div>
          <div data-thq="thq-navbar-nav" class="quiz-list-desktop-menu">
            <span>
              <span>
                登录用户：
              </span>
              <span class="quiz-list-text02">{{ name }}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="heroContainer">
      <input type="text" v-model="searchQuery" placeholder="输入以搜索" class="rounded-input">
      <div class="containerCenter">
        <el-card style="width: 80%;">
          <el-table :data="filteredQuizzes" stripe><!-- 带边框、斑马纹 -->
            <el-table-column label="测试编号" type="index"></el-table-column>
            <el-table-column label="测试名称" prop="quizName"></el-table-column>
            <el-table-column label="总分" prop="totalCredits"></el-table-column>
            <el-table-column label="测试限时(分钟)" prop="timer"></el-table-column>
            <el-table-column label="最后尝试分数" prop="lastTry"></el-table-column>
            <el-table-column label="最后尝试时间" prop="lastTryTime"></el-table-column>
            <el-table-column label="操作" width="200px">
              <template slot-scope="scope">
                <el-button v-if="scope.row.lastTryTime" size="mini" type="primary" icon="el-icon-search"
                  @click="checkResult(scope.row.quizID)">查看结果</el-button>
                <el-button v-else size="mini" type="primary" icon="el-icon-edit"
                  @click="doQuiz(scope.row.quizID)">开始测试</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
    <div class="quiz-list-footer">
      <footer class="quiz-list-footer1 footerContainer">
        <div class="quiz-list-container5">
          <router-link to="/menu" class="quiz-list-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="quiz-list-separator"></div>
        <div class="quiz-list-container6">
          <span class="bodySmall quiz-list-text29">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';
export default {
  name: 'QuizList',
  props: {},
  data() {
    return {
      name: localStorage.getItem('username'),
      ID: localStorage.getItem('userID'),
      quizzes: [],
      searchQuery: '',
    }
  },
  computed: {
    filteredQuizzes() {
      return this.quizzes.filter(quiz => {
        return quiz.quizName.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    checkResult(id) {
      router.push(`/quiz-result?quizID=${id}`);
    },
    doQuiz(id) {
      router.push(`/quiz-detail?quizID=${id}`);
    },
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    getQuizLink(quiz) {
      // Check if there exists a last try
      if (quiz.lastTryTime) {
        return `/quiz-result?quizID=${quiz.quizID}`;
      } else {
        return `/quiz-detail?quizID=${quiz.quizID}`;
      }
    },
  },
  created() {
    axios
      .get(`/quiz/list`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`
          }
        })
      .then((response) => {
        if (response.data.status === 0) {
          this.quizzes = response.data.quizzes;
          //console.log(this.quizzes);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        this.$message.warning(error.message);
      });
  },
  metaInfo: {
    title: 'QuizList - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'QuizList - PetClinicMock',
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

.rounded-input {
  border-radius: 2px;
  padding: 5px;
  margin-bottom: var(--dl-space-space-twounits);
}

.quiz-list-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.quiz-list-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.quiz-list-logo {
  text-decoration: none;
}

.quiz-list-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.quiz-list-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.quiz-list-burger-menu {
  display: none;
}

.quiz-list-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.quiz-list-mobile-menu1 {
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

.quiz-list-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-list-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.quiz-list-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.quiz-list-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.quiz-list-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-list-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.quiz-list-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.quiz-list-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.quiz-list-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.quiz-list-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.quiz-list-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.quiz-list-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.quiz-list-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.quiz-list-container1 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.quiz-list-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.quiz-list-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}

.quiz-list-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.quiz-list-container3 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.quiz-list-navlink {
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

.quiz-list-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}

.quiz-list-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}

.quiz-list-container4 {
  flex: 0 0 auto;
  width: 983px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.quiz-list-ul {
  flex: 1;
  width: auto;
  position: relative;
  margin-right: 639px;
}

.quiz-list-li {
  color: var(--dl-color-gray-black);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}

.quiz-list-navlink1 {
  color: var(--dl-color-gray-white);
  width: 120px;
  height: 100%;
  text-align: left;
  text-decoration: none;
  margin: 5%;
}

.quiz-list-text19 {
  margin-right: var(--dl-space-space-twounits);
}

.quiz-list-text20 {
  margin-right: var(--dl-space-space-twounits);
}

.quiz-list-li1 {
  color: var(--dl-color-gray-white);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}

.quiz-list-navlink2 {
  color: var(--dl-color-gray-white);
  width: 148px;
  text-align: left;
  border-color: var(--dl-color-gray-white);
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  text-decoration: none;
  background-color: var(--dl-color-custom-primary2);
}

.quiz-list-text24 {
  margin-right: var(--dl-space-space-twounits);
}

.quiz-list-text25 {
  margin-right: var(--dl-space-space-twounits);
}

.quiz-list-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quiz-list-footer1 {
  height: 246;
}

.quiz-list-container5 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.quiz-list-logo2 {
  text-decoration: none;
}

.quiz-list-separator {
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

.quiz-list-container6 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .quiz-list-hero {
    flex-direction: column;
  }

  .quiz-list-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .quiz-list-hero-heading {
    text-align: center;
  }

  .quiz-list-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .quiz-list-hero1 {
    flex-direction: column;
  }

  .quiz-list-hero-heading1 {
    text-align: center;
  }
}

@media(max-width: 767px) {
  .quiz-list-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .quiz-list-desktop-menu {
    display: none;
  }

  .quiz-list-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quiz-list-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-list-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-list-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-list-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-list-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .quiz-list-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .quiz-list-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .quiz-list-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .quiz-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .quiz-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .quiz-list-text29 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .quiz-list-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .quiz-list-mobile-menu1 {
    padding: 16px;
  }

  .quiz-list-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .quiz-list-container2 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .quiz-list-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .quiz-list-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .quiz-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .quiz-list-container6 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .quiz-list-text29 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
