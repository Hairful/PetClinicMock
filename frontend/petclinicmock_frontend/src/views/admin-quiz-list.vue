<template>
  <div class="admin-quiz-list-container">
    <div class="admin-quiz-list-header">
      <header data-thq="thq-navbar" class="navbarContainer admin-quiz-list-navbar-interactive">
        <router-link to="/menu" class="admin-quiz-list-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <div data-thq="thq-navbar-nav" class="admin-quiz-list-desktop-menu">
            <span>
              登录用户：
              <span class="admin-quiz-list-text02">{{ name }}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-quiz-list-container01"></div>
    <div class="heroContainer admin-quiz-list-hero">
      <div class="admin-quiz-list-container02">
        <h1 class="admin-quiz-list-hero-heading">测试管理</h1>
      </div>
    </div>
    <div class="admin-quiz-list-container03">
      <router-link to="/admin-menu" class="admin-quiz-list-navlink button">
        <span>返回管理员菜单</span>
      </router-link>
    </div>
    <div class="admin-quiz-list-hero1 heroContainer">
      <h1 class="admin-quiz-list-hero-heading1">
        <span class="heading1">选择测试</span>
        <br />
      </h1>
      <div class="admin-quiz-list-container04">
        <div class="admin-quiz-list-container05">
          <input type="text" v-model="newQuizName" placeholder="输入名称" class="input" />
          <button type="button" class="button" @click="addQuiz">添加</button>
        </div>
      </div>
      <div v-for="(quiz, index) in quizzes" :key="quiz.quizID" class="admin-quiz-list-container06">
        <ul class="admin-quiz-list-ul list">
          <li class="admin-quiz-list-li list-item Content">
            <span class="heading3">测试 {{ quiz.quizID }}</span>
            <div class="admin-quiz-list-container07">
              <div class="admin-quiz-list-container08">
                <input type="text" v-model="inputName[index]" :placeholder="`${quiz.quizName}`" class="input" />
                <button type="button" class="button" @click="renameQuiz(index)">重命名</button>
              </div>
              <router-link :to="`/admin-quiz-detail?quizID=${quiz.quizID}`" class="admin-quiz-list-navlink1 button">
                管理问题
              </router-link>
              <button type="button" class="button" @click="deleteQuiz(index)">删除测试</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="admin-quiz-list-footer">
      <footer class="admin-quiz-list-footer1 footerContainer">
        <div class="admin-quiz-list-container11">
          <router-link to="/menu" class="admin-quiz-list-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="admin-quiz-list-separator"></div>
        <div class="admin-quiz-list-container12">
          <span class="bodySmall admin-quiz-list-text24">
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
  name: 'AdminQuizList',
  props: {},
  data() {
    return {
      newQuizName: '',
      quizzes: [],
      inputName: [],
      name: localStorage.getItem('username'),
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    refresh() {
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
          } else {
            console.log(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addQuiz() {
      axios({
        method: 'post',
        url: '/admin/quiz',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          quizName: this.newQuizName,
          totalCredits: 1,
          probs: [],
          timer: 0,
        }
      })
        .then(response => {
          this.refresh();
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    renameQuiz(index) {
      const quizName = this.inputName[index];
      const quizID = this.quizzes[index].quizID;
      axios({
        method: 'put',
        url: '/admin/quiz',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          quizID: quizID,
          quizName: quizName,
          totalCredits: this.quizzes[index].totalCredits,
          probs: this.quizzes[index].probs,
        }
      })
        .then(response => {
          this.refresh();
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },

    async deleteQuiz(index) {
      try {
        const response = await axios.delete(`/admin/quiz?quizID=${this.quizzes[index].quizID}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          }
        });
        console.log(response.data);
        this.refresh();
      } catch (error) {
        console.log(error);
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
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  metaInfo: {
    title: 'AdminQuizList - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'AdminQuizList - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.admin-quiz-list-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.admin-quiz-list-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.admin-quiz-list-logo {
  text-decoration: none;
}

.admin-quiz-list-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.admin-quiz-list-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.admin-quiz-list-burger-menu {
  display: none;
}

.admin-quiz-list-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-quiz-list-mobile-menu1 {
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

.admin-quiz-list-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-list-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.admin-quiz-list-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-quiz-list-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-quiz-list-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-list-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-list-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-list-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-list-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-list-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.admin-quiz-list-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-quiz-list-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-quiz-list-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.admin-quiz-list-container01 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-list-container02 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-quiz-list-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}

.admin-quiz-list-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.admin-quiz-list-container03 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.admin-quiz-list-navlink {
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

.admin-quiz-list-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}

.admin-quiz-list-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}

.admin-quiz-list-container04 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-quiz-list-container05 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}

.admin-quiz-list-container06 {
  flex: 0 0 auto;
  width: 983px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.admin-quiz-list-ul {
  flex: 1;
  width: auto;
  position: relative;
  align-items: flex-start;
  margin-right: 639px;
  flex-direction: column;
}

.admin-quiz-list-li {
  color: var(--dl-color-gray-white);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}

.admin-quiz-list-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-list-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}

.admin-quiz-list-navlink1 {
  text-decoration: none;
}

.admin-quiz-list-li1 {
  color: var(--dl-color-gray-white);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}

.admin-quiz-list-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-list-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}

.admin-quiz-list-navlink2 {
  text-decoration: none;
}

.admin-quiz-list-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-quiz-list-footer1 {
  height: 246;
}

.admin-quiz-list-container11 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-quiz-list-logo2 {
  text-decoration: none;
}

.admin-quiz-list-separator {
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

.admin-quiz-list-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .admin-quiz-list-hero {
    flex-direction: column;
  }

  .admin-quiz-list-container02 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .admin-quiz-list-hero-heading {
    text-align: center;
  }

  .admin-quiz-list-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .admin-quiz-list-hero1 {
    flex-direction: column;
  }

  .admin-quiz-list-hero-heading1 {
    text-align: center;
  }
}

@media(max-width: 767px) {
  .admin-quiz-list-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-quiz-list-desktop-menu {
    display: none;
  }

  .admin-quiz-list-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .admin-quiz-list-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-list-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-list-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-list-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-list-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-quiz-list-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .admin-quiz-list-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-quiz-list-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-quiz-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-quiz-list-container12 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-quiz-list-text24 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .admin-quiz-list-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .admin-quiz-list-mobile-menu1 {
    padding: 16px;
  }

  .admin-quiz-list-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-quiz-list-container02 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-list-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-quiz-list-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .admin-quiz-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-quiz-list-container12 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-quiz-list-text24 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
