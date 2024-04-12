<template>
  <div class="admin-quiz-detail-container">
    <div class="admin-quiz-detail-header">
      <header data-thq="thq-navbar" class="navbarContainer admin-quiz-detail-navbar-interactive">
        <router-link to="/menu" class="admin-quiz-detail-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <div class="admin-quiz-detail-container01">
            <div data-thq="thq-navbar-nav" class="admin-quiz-detail-desktop-menu">
              <span>
                <span>
                  登录用户：
                </span>
                <span class="admin-quiz-detail-text02">{{ name }}</span>
              </span>
            </div>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-quiz-detail-container02"></div>
    <div class="admin-quiz-detail-hero heroContainer">
      <div class="admin-quiz-detail-container03">
        <h1 class="admin-quiz-detail-hero-heading">
          <span class="heading1">
            测试管理：
          </span>
          <span class="admin-quiz-detail-text04">测试 {{ quizID }}</span>
        </h1>
      </div>
    </div>
    <div class="admin-quiz-detail-container04">
      <router-link to="/admin-quiz-list" class="admin-quiz-detail-navlink button">
        重选测试
      </router-link>
      <router-link to="/admin-menu" class="admin-quiz-detail-navlink1 button">
        <span>
          <span>返回管理员菜单</span>
        </span>
      </router-link>
    </div>
    <div class="admin-quiz-detail-hero1 heroContainer">
      <div v-for="(prob, index) in probs" class="admin-quiz-detail-container05">
        <h1 class="admin-quiz-detail-hero-heading1 heading1">
          <span class="heading1">问题 {{ index + 1 }}</span>
          <br />
        </h1>
        <button type="button" class="admin-quiz-detail-button button" @click="deleteProb(index)">
          删除
        </button>
        <div class="admin-quiz-detail-container06">
          <textarea v-model="newText[index]" :placeholder="`${prob.probText}`"
            class="admin-quiz-detail-textarea textarea"></textarea>
          <div class="admin-quiz-detail-container10">
            <span class="admin-quiz-detail-text33 bodyLarge">
              正确答案：
            </span>
            <select v-model="options[index]" class="admin-quiz-detail-select">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <div class="admin-quiz-detail-container11">
            <span class="admin-quiz-detail-text34 bodyLarge">题目分数：</span>
            <input type="text" v-model="prob.probCredit" placeholder="placeholder" class="input" />
          </div>
          <button type="button" class="button" @click="modifyProb(index)">修改</button>
          <div class="admin-quiz-detail-container06">
            <input v-if="!images[index]" @change="img($event, index)" type="file">
            <img :src="prob.probImg" width="0" />
            <div class="admin-case-study-detail-container09">
              <div id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index)"
                class="admin-case-study-detail-image">
                <div class="bigImg-div " v-if="!images[index]">或者将图片拖拽到这里</div>
                <div v-else="images[index]">
                  <img :src="prob.probImg" class="bigImg" />
                  <button type="button" class="button" @click="clearImage(index)">
                    <span>删除图片</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="admin-quiz-detail-container19">
        <h1 class="admin-quiz-detail-hero-heading3 heading1">
          <span class="heading1">添加问题</span>
          <br />
        </h1>
        <div class="admin-quiz-detail-container20">
          <button type="button" class="admin-quiz-detail-button14 button" @click="addProb">
            添加
          </button>
        </div>
      </div>
    </div>
    <div class="admin-quiz-detail-container26">
      <button to="/admin-quiz-list" class="admin-quiz-detail-navlink2 button" @click="save">
        保存
      </button>
    </div>
    <div class="admin-quiz-detail-footer">
      <footer class="admin-quiz-detail-footer1 footerContainer">
        <div class="admin-quiz-detail-container27">
          <router-link to="/menu" class="admin-quiz-detail-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="admin-quiz-detail-separator"></div>
        <div class="admin-quiz-detail-container28">
          <span class="bodySmall admin-quiz-detail-text61">
            © 2024 SWD-G02, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import client from '../oss.js';
export default {
  name: 'AdminQuizDetail',
  props: {},
  data() {
    return {
      name: localStorage.getItem('username'),
      image: null,
      thumbnail: null,
      quizID: '',
      probs: [],
      quizName: '',
      totalCredits: '',
      options: [],
      newText: [],
      images: [],
      urls: [],
      addedOption: '',
      addedProb: {
        probNumber: '',
        probCredit: '',
        probText: '',
        probImg: '',
        probAns: '',
        lastAns: '',
      },
      totalTime:0,
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    async add_clearImage() {
      const Result = await client.delete(this.addedProb.probImg);
      console.log('删除成功:', Result);
      this.addedProb.probImg = '';
    },
    async add_handleDrop(e) {
      e.preventDefault();
      let files = e.dataTransfer.files;

      if (!files.length) return;

      let file = files[0];
      let reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result[0];
      };

      const uploadResult = await client.put('quiz/' + file.name, file);
      this.addedProb.probImg = uploadResult.url;
      console.log('上传成功:', uploadResult);

    },

    async add_img(e) {
      try {
        let file = e.target.files[0];
        const uploadResult = await client.put('quiz/' + file.name, file);
        this.addedProb.probImg = uploadResult.url;
        console.log('上传成功:', uploadResult);
        //上传至阿里云
      } catch (error) {
        // 在此处添加错误处理逻辑。
        console.error('发生错误:', error);
      }
    },
    handleDrop(e, index) {
      e.preventDefault();
      let files = e.dataTransfer.files;

      if (!files.length) return;

      let file = files[0];
      let reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result[0];
      };
      this.saveImage(file, index);

    },

    async img(e, index) {
      try {
        //let that = this;//改变this指向
        let file = e.target.files[0];
        this.saveImage(file, index);
        //上传至阿里云

      } catch (error) {
        // 在此处添加错误处理逻辑。
        console.error('发生错误:', error);
      }
    },
    async saveImage(file, index) {
      let that = this;//改变this指向
      if (!window.FileReader) return; // 看是否支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(file); // 关键一步，在这里转换的
      reader.onloadend = function () {
        that.images[index] = this.result;//赋值
        that.probs[index].probImg = that.images[index];
      }
      const uploadResult = await client.put('quiz/' + file.name, file);
      this.urls[index] = uploadResult.url;
      console.log('上传成功:', uploadResult);
      this.save();
    },
    deleteProb(index) {
      this.probs.splice(index, 1);
      this.save();
    },
    addProb() {
      this.addedProb.probAns = this.option2ans(this.addedOption);
      this.addedProb.probNumber = this.probs.length + 1;
      this.probs.push(this.addedProb);
      console.log(this.probs);
      //this.save();
    },
    save() {
      let totalcredit = 0;
      let index = 0;
      this.probs.forEach(prob => {
        totalcredit += prob.probCredit;
        prob.probImg = this.urls[index];
        prob.probText = this.newText[index];
        prob.probAns = this.option2ans(this.options[index]);
        index++;
      });
      axios({
        method: 'put',
        url: '/admin/quiz',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          quizName: this.quizName,
          quizID: this.quizID,
          totalCredits: totalcredit,
          probs: this.probs,
        }
      })
        .then(response => {
          this.fetchProb();
          this.$message("修改成功");
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    fetchProb() {
      this.options = [];
      this.newText = [];
      this.images = [];
      axios.get(`/quiz/detail?quizID=${this.quizID}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`
          }
        })
        .then(response => {
          if (response.data.status === 0) {
            this.probs = response.data.probs;
            this.quizName = response.data.quizName;
            this.totalCredits = response.data.totalCredits;
            this.probs.forEach(prob => {
              this.options.push(this.ans2option(prob.probAns));
              this.newText.push(prob.probText);
              this.images.push(prob.probImg);
            });
          } else if (response.data.status === 1) {
            console.log('No corresponding quizID');
          }
        });
    },
    modifyProb(index) {
      this.probs[index].probText = this.newText[index];
      this.probs[index].probAns = this.option2ans(this.options[index]);

    },
    async clearImage(index) {
      this.images[index] = '';//赋值
      const path = this.getPath(this.urls[index])
      const Result = await client.delete(path);
      console.log('删除成功:', Result);
      this.urls[index] = '';
      this.probs[index].probImg = this.images[index];
      this.save();
    },
    getPath(url) {
      let path = '';
      try {
        path = url.substring(43);
        console.log(path);
      } catch (error) {
        path = ''
      }
      console.log(path);
      return path;
    },
    ans2option(ans) {
      switch (ans) {
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
  },
  created() {
    this.quizID = this.$route.query.quizID;
    axios.get(`/quiz/detail?quizID=${this.quizID}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`
        }
      })
      .then(response => {
        if (response.data.status === 0) {
          this.probs = response.data.probs;
          this.quizName = response.data.quizName;
          this.totalCredits = response.data.totalCredits;
          this.totalTime = response.data.timer;
          this.probs.forEach(prob => {
            this.options.push(this.ans2option(prob.probAns));
            this.newText.push(prob.probText);
            this.images.push(prob.probImg);
            this.urls.push(prob.probImg);
          });
        } else if (response.data.status === 1) {
          console.log('No corresponding quizID');
        }
      });

  },
  metaInfo: {
    title: 'AdminQuizDetail - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'AdminQuizDetail - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.admin-quiz-detail-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.admin-quiz-detail-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.admin-quiz-detail-logo {
  text-decoration: none;
}

.admin-quiz-detail-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}

.admin-quiz-detail-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.admin-quiz-detail-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.admin-quiz-detail-burger-menu {
  display: none;
}

.admin-quiz-detail-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-quiz-detail-mobile-menu1 {
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

.admin-quiz-detail-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-detail-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.admin-quiz-detail-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-quiz-detail-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-quiz-detail-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-detail-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.admin-quiz-detail-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-quiz-detail-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-quiz-detail-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.admin-quiz-detail-container02 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-detail-hero {
  padding-bottom: var(--dl-space-space-sixunits);
}

.admin-quiz-detail-container03 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-quiz-detail-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}

.admin-quiz-detail-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}

.admin-quiz-detail-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.admin-quiz-detail-container04 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.admin-quiz-detail-navlink {
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

.admin-quiz-detail-navlink1 {
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

.admin-quiz-detail-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  padding-bottom: 0px;
  background-color: var(--dl-color-gray-black);
}

.admin-quiz-detail-container05 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.admin-quiz-detail-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: 0px;
}

.admin-quiz-detail-button {
  align-self: center;
  margin-bottom: var(--dl-space-space-twounits);
}

.admin-quiz-detail-container06 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-detail-textarea {
  width: 767px;
  height: 63px;
}

.admin-quiz-detail-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-quiz-detail-button02 {
  align-self: center;
}

.admin-quiz-detail-container08 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-quiz-detail-image {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-container09 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-quiz-detail-image1 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-container10 {
  flex: 1;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}

.admin-quiz-detail-text33 {
  color: var(--dl-color-gray-white);
}

.admin-quiz-detail-select {
  width: 50px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
}

.admin-quiz-detail-container11 {
  flex: 1;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}

.admin-quiz-detail-text34 {
  color: var(--dl-color-gray-white);
}

.bigImg-div {
  width: 200px;
  height: 200px;
  border: 100%;
  overflow: hidden;
  border: 1px solid #ddd;
  background-color: var(--dl-color-gray-900);
}

.bigImg {
  display: block;
  width: 200px;
  height: 200px;
}

.admin-quiz-detail-container12 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.admin-quiz-detail-hero-heading2 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: 0px;
}

.admin-quiz-detail-button05 {
  align-self: center;
  margin-bottom: var(--dl-space-space-twounits);
}

.admin-quiz-detail-container13 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-detail-textarea1 {
  width: 767px;
  height: 63px;
}

.admin-quiz-detail-container14 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-quiz-detail-button07 {
  align-self: center;
}

.admin-quiz-detail-container15 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-quiz-detail-image2 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-container16 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-quiz-detail-image3 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-container17 {
  flex: 1;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}

.admin-quiz-detail-text46 {
  color: var(--dl-color-gray-white);
}

.admin-quiz-detail-select1 {
  width: 50px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
}

.admin-quiz-detail-container18 {
  flex: 1;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}

.admin-quiz-detail-text47 {
  color: var(--dl-color-gray-white);
}

.admin-quiz-detail-container19 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.admin-quiz-detail-hero-heading3 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: 0px;
}

.admin-quiz-detail-container20 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-quiz-detail-textarea2 {
  width: 767px;
  height: 63px;
}

.admin-quiz-detail-container21 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-quiz-detail-button11 {
  align-self: center;
}

.admin-quiz-detail-container22 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-quiz-detail-image4 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-container23 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-quiz-detail-image5 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-quiz-detail-container24 {
  flex: 1;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}

.admin-quiz-detail-text59 {
  color: var(--dl-color-gray-white);
}

.admin-quiz-detail-select2 {
  width: 50px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
}

.admin-quiz-detail-container25 {
  flex: 1;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}

.admin-quiz-detail-text60 {
  color: var(--dl-color-gray-white);
}

.admin-quiz-detail-button14 {
  align-self: center;
  margin-bottom: var(--dl-space-space-twounits);
}

.admin-quiz-detail-container26 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.admin-quiz-detail-navlink2 {
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

.admin-quiz-detail-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-quiz-detail-footer1 {
  height: 246;
}

.admin-quiz-detail-container27 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-quiz-detail-logo2 {
  text-decoration: none;
}

.admin-quiz-detail-separator {
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

.admin-quiz-detail-container28 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .admin-quiz-detail-hero {
    flex-direction: column;
  }

  .admin-quiz-detail-container03 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .admin-quiz-detail-hero-heading {
    text-align: center;
  }

  .admin-quiz-detail-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .admin-quiz-detail-hero1 {
    flex-direction: column;
  }

  .admin-quiz-detail-hero-heading1 {
    text-align: center;
  }

  .admin-quiz-detail-hero-heading2 {
    text-align: center;
  }

  .admin-quiz-detail-hero-heading3 {
    text-align: center;
  }
}

@media(max-width: 767px) {
  .admin-quiz-detail-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-quiz-detail-desktop-menu {
    display: none;
  }

  .admin-quiz-detail-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .admin-quiz-detail-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-detail-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-detail-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-detail-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-detail-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-quiz-detail-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .admin-quiz-detail-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-quiz-detail-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-quiz-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-quiz-detail-container28 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-quiz-detail-text61 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .admin-quiz-detail-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .admin-quiz-detail-mobile-menu1 {
    padding: 16px;
  }

  .admin-quiz-detail-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-quiz-detail-container03 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-quiz-detail-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-quiz-detail-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .admin-quiz-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-quiz-detail-container28 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-quiz-detail-text61 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
