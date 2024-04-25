<template>
  <div class="admin-case-study-detail-container">
    <div class="admin-case-study-detail-header">
      <header data-thq="thq-navbar" class="navbarContainer admin-case-study-detail-navbar-interactive">
        <router-link to="/menu" class="admin-case-study-detail-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <div class="admin-case-study-detail-container01">
            <div data-thq="thq-navbar-nav" class="admin-case-study-detail-desktop-menu">
              <span>
                <span>
                  登录用户：
                </span>
                <span class="admin-case-study-detail-text002">{{ name }}</span>
              </span>
            </div>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-case-study-detail-container02"></div>
    <div class="admin-case-study-detail-hero heroContainer">
      <div class="admin-case-study-detail-container03">
        <h1 class="admin-case-study-detail-hero-heading">
          <span class="heading1">
            病例管理：
          </span>
          <span class="admin-case-study-detail-text004">{{ this.diseaseName }}</span>
        </h1>
      </div>
    </div>
    <div class="admin-case-study-detail-container04">
      <router-link :to="{ path: '/admin-case-study-list' }" class="admin-case-study-detail-navlink button">
        重选疾病类型
      </router-link>
      <router-link to="/admin-menu" class="admin-case-study-detail-navlink button">
        返回管理员菜单
      </router-link>
    </div>
    <div class="admin-case-study-detail-container04"></div>
    <div class="admin-case-study-detail-hero1 heroContainer">
      <div class="admin-case-study-detail-container05">
        <h1 class="admin-case-study-detail-hero-heading1 heading1">
          <span class="heading1">介绍</span>
          <br />
        </h1>
        <div class="admin-case-study-detail-container06">
          <div class="admin-case-study-detail-container07">
            <textarea v-model="diseaseIntro" :placeholder="`${this.diseaseIntro}`"
              class="admin-case-study-detail-textarea textarea"></textarea>
            <button type="button" class="admin-case-study-detail-button button" @click="modifyDiseaseIntro">
              修改
            </button>
          </div>
        </div>
      </div>

      <div class="admin-case-study-detail-container05" v-for="(caseItem, index) in cases" :key="index">
        <h1 class="admin-case-study-detail-hero-heading2 heading1">
          <span class="heading1">病例 {{ index + 1 }}</span>
          <br />

        </h1>
        <button type="button" class="button" style="align-self: center; background-color: var(--dl-color-danger-700);"
          @click="deleteCase(index)">
          <span>删除</span>
        </button>
        <div class="admin-case-study-detail-container10">
          <span style="text-align: center;" class="admin-case-study-detail-text142 heading2">介绍</span>
          <div class="admin-case-study-detail-container57">
            <textarea v-model="caseItem.summary" :placeholder="`${caseItem.summary}`"
              class="admin-case-study-detail-textarea5 textarea"></textarea>
            <button type="button" class="admin-case-study-detail-button40 button" @click="modifySummary(index)">
              修改
            </button>
          </div>
          <div class="admin-case-study-detail-container45">
            <div class="admin-case-study-detail-text142">图片：
              <input @change="img($event, index, 0)" type="file">
              <span id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index, 0)"
                class="admin-case-study-detail-image">
                <span class="bigImg-div">或者将图片文件拖拽到这里</span>
              </span>
            </div>
            <div class="containerLeft">
              <div v-for="(pic, picIndex) in summaryPictures[index]" :key="`summary-pic-${picIndex}`"
                class="admin-case-study-detail-container12">
                <img alt="image" :src="pic" class="admin-case-study-detail-image02" />
                <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                  @click="deleteImage(index, picIndex, 0)">
                  <span>删除</span>
                </button>
              </div>
            </div>
          </div>
          <div class="admin-case-study-detail-container45">
            <div class="admin-case-study-detail-text142">视频：
              <input @change="img($event, index, 1)" type="file">
              <span id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index, 1)"
                class="admin-case-study-detail-image">
                <span class="bigImg-div ">或者将视频文件拖拽到这里</span>
              </span>
            </div>
            <div class="containerLeft">
              <div v-for="(vid, vidIndex) in summaryVideos[index]" :key="`summary-vid-${vidIndex}`"
                class="admin-case-study-detail-container12">
                <video :src="vid" class="admin-case-study-detail-video02" controls></video>
                <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                  @click="deleteImage(index, vidIndex, 1)">
                  <span>删除</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="admin-case-study-detail-container10">
          <span style="width: 100%;" class="admin-case-study-detail-text142 heading2">检查结果</span>
          <div class="admin-case-study-detail-container57">
            <textarea v-model="caseItem.details.examine" :placeholder="`${caseItem.details.examine}`"
              class="admin-case-study-detail-textarea5 textarea"></textarea>
            <button type="button" class="admin-case-study-detail-button40 button" @click="modifyExamine(index)">
              修改
            </button>
          </div>
          <div class="admin-case-study-detail-container45">
            <div class="admin-case-study-detail-text142">图片：
              <input @change="img($event, index, 2)" type="file">
              <span id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index, 2)"
                class="admin-case-study-detail-image">
                <span class="bigImg-div ">或者将图片文件拖拽到这里</span>
              </span>
              <div class="containerLeft">
                <div v-for="(pic, picIndex) in examinePictures[index]" :key="`examine-pic-${picIndex}`"
                  class="admin-case-study-detail-container11">
                  <img alt="image" :src="pic" class="admin-case-study-detail-image02" />
                  <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                    @click="deleteImage(index, picIndex, 2)">
                    <span>删除</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="admin-case-study-detail-container45">
            <div class="admin-case-study-detail-text142">视频：
              <input @change="img($event, index, 3)" type="file">
              <span id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index, 3)"
                class="admin-case-study-detail-image">
                <span class="bigImg-div ">或者将视频文件拖拽到这里</span>
              </span>
              <div class="containerLeft">
                <div v-for="(vid, vidIndex) in examineVideos[index]" :key="`examine-vid-${vidIndex}`"
                  class="admin-case-study-detail-container12">
                  <video :src="vid" class="admin-case-study-detail-video02" controls></video>
                  <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                    @click="deleteImage(index, vidIndex, 3)">
                    <span>删除</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="admin-case-study-detail-container10">
          <span style="width: 100%;" class="admin-case-study-detail-text142 heading2">诊断结果</span>
          <div class="admin-case-study-detail-container45">
            <div class="admin-case-study-detail-text142">图片：
              <input @change="img($event, index, 4)" type="file">
              <span id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index, 4)"
                class="admin-case-study-detail-image">
                <span class="bigImg-div ">或者将图片文件拖拽到这里</span>
              </span>
              <div class="containerLeft">
                <div v-for="(pic, picIndex) in diagnosePictures[index]" :key="`diagnose-pic-${picIndex}`"
                  class="admin-case-study-detail-container11">
                  <img alt="image" :src="pic" class="admin-case-study-detail-image02" />
                  <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                    @click="deleteImage(index, picIndex, 4)">
                    <span>删除</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="admin-case-study-detail-container45">
            <div class="admin-case-study-detail-text142">视频：
              <input @change="img($event, index, 5)" type="file">
              <span id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index, 5)"
                class="admin-case-study-detail-image">
                <span class="bigImg-div ">或者将视频文件拖拽到这里</span>
              </span>
              <div class="containerLeft">
                <div v-for="(vid, vidIndex) in diagnoseVideos[index]" :key="`diagnose-vid-${vidIndex}`"
                  class="admin-case-study-detail-container12">
                  <video :src="vid" class="admin-case-study-detail-video02" controls></video>
                  <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                    @click="deleteImage(index, vidIndex, 5)">
                    <span>删除</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="admin-case-study-detail-container10">
          <span style="width: 100%;" class="admin-case-study-detail-text142 heading2">治疗方案</span>
          <div class="admin-case-study-detail-container57">
            <textarea v-model="caseItem.details.treatment" :placeholder="`${caseItem.details.treatment}`"
              class="admin-case-study-detail-textarea5 textarea"></textarea>
            <button type="button" class="admin-case-study-detail-button40 button" @click="modifyTreatment(index)">
              修改
            </button>
          </div>
          <div class="admin-case-study-detail-container45">
            <div class="admin-case-study-detail-text142">图片：
              <input @change="img($event, index, 6)" type="file">
              <span id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index, 6)"
                class="admin-case-study-detail-image">
                <span class="bigImg-div ">或者将图片文件拖拽到这里</span>
              </span>
              <div class="containerLeft">
                <div v-for="(pic, picIndex) in treatmentPictures[index]" :key="`treatment-pic-${picIndex}`"
                  class="admin-case-study-detail-container11">
                  <img alt="image" :src="pic" class="admin-case-study-detail-image02"></img>
                  <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                    @click="deleteImage(index, picIndex, 6)">
                    <span>删除</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="admin-case-study-detail-container45">
            <div class="admin-case-study-detail-text142">视频:
              <input @change="img($event, index, 7)" type="file">
              <span id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index, 7)"
                class="admin-case-study-detail-image">
                <span class="bigImg-div ">或者将视频文件拖拽到这里</span>
              </span>
              <div class="containerLeft">
                <div v-for="(vid, vidIndex) in treatmentVideos[index]" :key="`treatment-vid-${vidIndex}`"
                  class="admin-case-study-detail-container12">
                  <video :src="vid" class="admin-case-study-detail-video02" controls></video>
                  <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                    @click="deleteImage(index, vidIndex, 7)">
                    <span>删除</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="admin-case-study-detail-container88">
          <span class="admin-case-study-detail-text142 heading2">药物</span>
          <div class="admin-case-study-detail-container57">
            <div v-for="(medicine, medIndex) in medicines[index]" :key="`medicine-${medIndex}`" to="/pharmacy"
              class="admin-case-study-detail-text111 bodyLarge">
              <div>药品{{ medIndex + 1 }}
                <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                  @click="deleteMed(index, medIndex)">删除</button>
              </div>
              <span type="text">
                {{ medicine.medicineName }}
              </span>
              <span>用量:</span><input type="text" v-model="medicine.dosage" class="input" />
              <button type="button" class="button" @click="modifyMed(index)">修改</button>
              <br />
            </div>
            <div class="admin-case-study-detail-container90">
              <div class="admin-case-study-detail-text142">添加药物</div>
              <select v-model="choosedMed[index]" name="fff">
                <option v-for="(medicine, medIndex) in Allmedicines" :key="`${medIndex}`" :value=medIndex>
                  {{ medicine.medicineName }}
                </option>
              </select>
              <input type="text" v-model="newMedDosage[index]" placeholder="用量" class="input" />
              <div class="admin-case-study-detail-container91">
                <button type="button" class="button" style="background-color: var(--dl-color-success-700);"
                  @click="addMed(index)">添加</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- add case -->
      <div class="admin-case-study-detail-container54">
        <h1 class="admin-case-study-detail-hero-heading1 heading1">
          <span class="heading1">添加病例</span>
          <br />
        </h1>
        <button type="button" class="admin-case-study-detail-button71 button" @click=addCase>
          添加病例
        </button>
      </div>
    </div>
    <div class="admin-case-study-detail-footer">
      <footer class="admin-case-study-detail-footer1 footerContainer">
        <div class="admin-case-study-detail-container95">
          <router-link to="/" class="admin-case-study-detail-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="admin-case-study-detail-separator"></div>
        <div class="admin-case-study-detail-container96">
          <span class="bodySmall admin-case-study-detail-text203">
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
  name: 'AdminCaseStudyDetail',
  props: {},
  data() {
    return {
      diseaseID: ' ',
      diseaseName: ' ',
      diseaseType: ' ',
      diseaseIntro: ' ',
      cases: [],
      Allmedicines: [],
      medicines: [],
      summaryPictures: [],
      summaryVideos: [],
      examinePictures: [],
      examineVideos: [],
      diagnosePictures: [],
      diagnoseVideos: [],
      treatmentPictures: [],
      treatmentVideos: [],
      name: localStorage.getItem('username'),
      choosedMed: [],
      newMedDosage: [],
    }
  },
  methods: {
    notify(str) {
      this.$message(str)
    },
    modifyMed(index) {
      axios({
        method: 'put',
        url: '/admin/case',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          caseID: this.cases[index].caseID,
          medicines: this.medicines[index],
        }
      })
        .then(response => {
          this.fetchCases();
          this.notify('修改成功');
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$message.warning(error.message);
        });
    },
    deleteMed(index, medIndex) {
      this.medicines[index].splice(medIndex, 1);
      this.modifyMed(index);
    },
    addMed(index) {
      let newMed = {};
      let medIndex = this.choosedMed[index];
      newMed.medicineName = this.Allmedicines[medIndex].medicineName;
      newMed.medicineID = this.Allmedicines[medIndex].medicineID;
      newMed.dosage = this.newMedDosage[index];
      this.medicines[index].push(newMed);

      this.modifyMed(index);
    },
    addCase() {
      axios({
        method: 'post',
        url: '/admin/case',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          diseaseID: this.diseaseID,
          summaryPictures: [],
          summaryVideos: [],
          examine: '',
          examinePictures: [],
          examineVideos: [],
          diagnose: '',
          diagnosePictures: [],
          diagnoseVideos: [],
          treatment: '',
          treatmentPictures: [],
          treatmentVideos: [],
          medicines: [],
        }
      })
        .then(response => {
          this.fetchCases();
          this.notify('修改成功');
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$message.warning(error.message);
        });
    },
    modifyPV(index) {
      axios({
        method: 'put',
        url: '/admin/case',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          caseID: this.cases[index].caseID,
          summaryPictures: this.summaryPictures[index],
          summaryVideos: this.summaryVideos[index],
          examinePictures: this.examinePictures[index],
          examineVideos: this.examineVideos[index],
          diagnosePictures: this.diagnosePictures[index],
          diagnoseVideos: this.diagnoseVideos[index],
          treatmentPictures: this.treatmentPictures[index],
          treatmentVideos: this.treatmentVideos[index],
        }
      })
        .then(response => {
          this.fetchCases();
          //console.log(response);
          this.notify('修改成功');
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$message.warning(error.message);
        });
    },
    async deleteImage(index, pvIndex, kind) {
      const path = this.getPath(this.switchKind(kind)[index][pvIndex])
      const Result = await client.delete(path);
      console.log('删除成功:', Result);
      this.switchKind(kind)[index].splice(pvIndex, 1);
      this.modifyPV(index);
    },
    handleDrop(e, index, kind) {
      e.preventDefault();
      let files = e.dataTransfer.files;
      if (!files.length) return;
      let file = files[0];
      this.saveImage(file, index, kind);

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
    async img(e, index, kind) {
      try {
        //let that = this;//改变this指向
        let file = e.target.files[0];
        this.saveImage(file, index, kind);
        //上传至阿里云

      } catch (error) {
        // 在此处添加错误处理逻辑。
        console.error('发生错误:', error);
      }
    },
    async saveImage(file, index, kind) {
      const uploadResult = await client.put('case/' + kind + "/" + file.name, file);
      this.switchKind(kind)[index].push(uploadResult.url);
      console.log('上传成功:', uploadResult);
      this.modifyPV(index);
    },
    switchKind(kind) {
      switch (kind) {
        case 0:
          return this.summaryPictures;
        case 1:
          return this.summaryVideos;
        case 2:
          return this.examinePictures;
        case 3:
          return this.examineVideos;
        case 4:
          return this.diagnosePictures;
        case 5:
          return this.diagnoseVideos;
        case 6:
          return this.treatmentPictures;
        case 7:
          return this.treatmentVideos;
        default:
          return null;
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    updatePV() {
      this.summaryPictures = [];
      this.summaryVideos = [];
      this.examinePictures = [];
      this.examineVideos = [];
      this.diagnosePictures = [];
      this.diagnoseVideos = [];
      this.treatmentPictures = [];
      this.treatmentVideos = [];
      this.medicines = [];
      this.cases.forEach(caseItem => {
        this.summaryPictures.push(caseItem.details.summaryPictures ? caseItem.details.summaryPictures : []);
        this.summaryVideos.push(caseItem.details.summaryVideos ? caseItem.details.summaryVideos : []);
        this.examinePictures.push(caseItem.details.examinePictures ? caseItem.details.examinePictures : []);
        this.examineVideos.push(caseItem.details.examineVideos ? caseItem.details.examineVideos : []);
        this.diagnosePictures.push(caseItem.details.diagnosePictures ? caseItem.details.diagnosePictures : []);
        this.diagnoseVideos.push(caseItem.details.diagnoseVideos ? caseItem.details.diagnoseVideos : []);
        this.treatmentPictures.push(caseItem.details.treatmentPictures ? caseItem.details.treatmentPictures : []);
        this.treatmentVideos.push(caseItem.details.treatmentVideos ? caseItem.details.treatmentVideos : []);
        this.medicines.push(caseItem.details.medicines ? caseItem.details.medicines : []);
      })
    },
    async deleteCase(index) {
      try {
        const response = await axios.delete(`/admin/case?caseID=${this.cases[index].caseID}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          }
        });
        this.fetchCases();
        this.notify('修改成功');
      } catch (error) {
        console.log(error);
        this.$message.warning(error.message);
      }
    },
    fetchDisease() {
      this.diseaseIntro = '';
      axios.get(`/casestudy/disease/detail?diseaseID=${this.diseaseID}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`
        }
      })
        .then(response => {
          if (response.data.status === 0) {
            this.diseaseIntro = response.data.diseaseDetail.diseaseIntro;
          } else if (response.data.status === 1) {
            console.log('No corresponding diseaseID');
          }
        });
    },
    fetchCases() {
      this.cases = [];
      // Fetch case list
      axios.get(`/casestudy/case/list?diseaseID=${this.diseaseID}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`
        }
      })
        .then(async response => {
          if (response.data.status === 0) {
            this.cases = response.data.cases;
            // Fetch details for each case
            const casePromises = this.cases.map(caseItem => {
              return axios.get(`/casestudy/case/detail?caseID=${caseItem.caseID}`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('Token')}`
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
            this.updatePV();
          }
        });
    },
    fetchMedicine() {
      this.Allmedicines = [];
      // Fetch medicine list
      axios.get(`/medicine/list`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`
        }
      })
        .then(response => {
          if (response.data.status === 0) {
            this.Allmedicines = response.data.medicines;
          } else if (response.data.status === 1) {
            console.log('No corresponding medicine');
          }
        });
    },
    modifyDiseaseIntro() {
      axios({
        method: 'put',
        url: '/admin/disease',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          diseaseID: this.diseaseID,
          diseaseIntro: this.diseaseIntro,
        }
      })
        .then(response => {
          //console.log(response.data);
          this.fetchDisease();
          this.notify('修改成功');
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$message.warning(error.message);
        });
    },
    modifySummary(index) {
      axios({
        method: 'put',
        url: '/admin/case',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          caseID: this.cases[index].caseID,
          summary: this.cases[index].summary,
        }
      })
        .then(response => {
          this.fetchCases();
          this.notify('修改成功');
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$message.warning(error.message);
        });
    },
    modifyExamine(index) {
      axios({
        method: 'put',
        url: '/admin/case',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          caseID: this.cases[index].caseID,
          examine: this.cases[index].details.examine,
        }
      })
        .then(response => {
          this.fetchCases();
          this.notify('修改成功');
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$message.warning(error.message);
        });
    },
    modifyTreatment(index) {
      axios({
        method: 'put',
        url: '/admin/case',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          caseID: this.cases[index].caseID,
          treatment: this.cases[index].details.treatment,
        }
      })
        .then(response => {
          this.fetchCases();
          this.notify('修改成功');
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$message.warning(error.message);
        });
    },
  },
  created() {
    this.diseaseType = this.$route.query.diseaseType;
    this.diseaseID = this.$route.query.diseaseID;
    this.diseaseName = this.$route.query.diseaseName;
    // Fetch disease details
    axios.get(`casestudy/disease/detail?diseaseID=${this.diseaseID}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
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
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }
    })
      .then(async response => {
        if (response.data.status === 0) {
          this.cases = response.data.cases;
          // Fetch details for each case
          const casePromises = this.cases.map(caseItem => {
            return axios.get(`/casestudy/case/detail?caseID=${caseItem.caseID}`, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('Token')}`
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
          this.updatePV();
        }
      });
    // Fetch medicine list
    axios.get(`/medicine/list`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }
    })
      .then(response => {
        if (response.data.status === 0) {
          this.Allmedicines = response.data.medicines;
        } else if (response.data.status === 1) {
          console.log('No corresponding medicine');
        }
      });
  },
  metaInfo: {
    title: 'AdminCaseStudyDetail - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'AdminCaseStudyDetail - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.admin-case-study-detail-text111 {
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

.admin-case-study-detail-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.admin-case-study-detail-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.admin-case-study-detail-logo {
  text-decoration: none;
}

.admin-case-study-detail-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}

.admin-case-study-detail-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.admin-case-study-detail-text002 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.admin-case-study-detail-burger-menu {
  display: none;
}

.admin-case-study-detail-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-case-study-detail-mobile-menu1 {
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

.admin-case-study-detail-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.admin-case-study-detail-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-case-study-detail-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-case-study-detail-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.admin-case-study-detail-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-case-study-detail-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-case-study-detail-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.admin-case-study-detail-container02 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-hero {
  padding-bottom: var(--dl-space-space-sixunits);
}

.admin-case-study-detail-container03 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}

.admin-case-study-detail-text004 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}

.admin-case-study-detail-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.admin-case-study-detail-container04 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.admin-case-study-detail-container04 {
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.admin-case-study-detail-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  padding-bottom: 0px;
  background-color: var(--dl-color-gray-black);
}

.admin-case-study-detail-container05 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.admin-case-study-detail-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}

.admin-case-study-detail-container06 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-textarea {
  width: 994px;
  height: 82px;
}

.admin-case-study-detail-button {
  align-self: flex-start;
}

.admin-case-study-detail-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-case-study-detail-button01 {
  align-self: center;
}

.admin-case-study-detail-container09 {
  align-items: flex-start;
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;

  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container10 {
  margin-top: 4%;
  margin-bottom: 4%;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-right: var(--dl-space-space-twounits);
}

.admin-case-study-detail-image01 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-button04 {
  align-self: flex-start;
}

.admin-case-study-detail-container12 {
  width: 200px;
  margin-right: 20px;
}

.admin-case-study-detail-video {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button05 {
  align-self: center;
}

.admin-case-study-detail-container13 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video01 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button06 {
  align-self: center;
}

.admin-case-study-detail-container14 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.admin-case-study-detail-container15 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.admin-case-study-detail-hero-heading2 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
}

.admin-case-study-detail-container16 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text041 {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.admin-case-study-detail-container17 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-textarea1 {
  width: 994px;
  height: 82px;
}

.admin-case-study-detail-button08 {
  align-self: flex-start;
}

.admin-case-study-detail-container18 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-case-study-detail-button09 {
  align-self: center;
}

.admin-case-study-detail-container19 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image02 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container20 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image03 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container21 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-button12 {
  align-self: flex-start;
}

.admin-case-study-detail-container22 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video02 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button13 {
  align-self: center;
}

.admin-case-study-detail-container23 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video03 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button14 {
  align-self: center;
}

.admin-case-study-detail-container24 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text060 {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.admin-case-study-detail-container25 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-textarea2 {
  width: 994px;
  height: 82px;
}

.admin-case-study-detail-button15 {
  align-self: flex-start;
}

.admin-case-study-detail-container26 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-case-study-detail-button16 {
  align-self: center;
}

.admin-case-study-detail-container27 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image04 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container28 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image05 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container29 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-button19 {
  align-self: flex-start;
}

.admin-case-study-detail-container30 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video04 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button20 {
  align-self: center;
}

.admin-case-study-detail-container31 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video05 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button21 {
  align-self: center;
}

.admin-case-study-detail-container32 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text079 {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.admin-case-study-detail-container33 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-textarea3 {
  width: 994px;
  height: 82px;
}

.admin-case-study-detail-button22 {
  align-self: flex-start;
}

.admin-case-study-detail-container34 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-case-study-detail-button23 {
  align-self: center;
}

.admin-case-study-detail-container35 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image06 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container36 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image07 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container37 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-button26 {
  align-self: flex-start;
}

.admin-case-study-detail-container38 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video06 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button27 {
  align-self: center;
}

.admin-case-study-detail-container39 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video07 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button28 {
  align-self: center;
}

.admin-case-study-detail-container40 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text098 {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.admin-case-study-detail-container41 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-textarea4 {
  width: 994px;
  height: 82px;
}

.admin-case-study-detail-button29 {
  align-self: flex-start;
}

.admin-case-study-detail-container42 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-case-study-detail-button30 {
  align-self: center;
}

.admin-case-study-detail-container43 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image08 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container44 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image09 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container45 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-button33 {
  align-self: flex-start;
}

.admin-case-study-detail-container46 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video08 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button34 {
  align-self: center;
}

.admin-case-study-detail-container47 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video09 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button35 {
  align-self: center;
}

.admin-case-study-detail-container48 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text117 {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.admin-case-study-detail-container49 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.admin-case-study-detail-container50 {
  flex: 1;
  width: 288px;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-container51 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.admin-case-study-detail-container52 {
  flex: 1;
  width: 288px;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-container53 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.admin-case-study-detail-container54 {
  flex: 0 0 auto;
  width: 1021px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-bottom: var(--dl-space-space-sixunits);
}

.admin-case-study-detail-container55 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.admin-case-study-detail-hero-heading3 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  align-self: center;
  text-align: center;
}

.admin-case-study-detail-container56 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text123 {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.admin-case-study-detail-container57 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-textarea5 {
  width: 994px;
  height: 82px;
}

.admin-case-study-detail-button40 {
  align-self: flex-start;
}

.admin-case-study-detail-container58 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-case-study-detail-button41 {
  align-self: center;
}

.admin-case-study-detail-container59 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image10 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container60 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image11 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container61 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-button44 {
  align-self: flex-start;
}

.admin-case-study-detail-container62 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video10 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button45 {
  align-self: center;
}

.admin-case-study-detail-container63 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video11 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button46 {
  align-self: center;
}

.admin-case-study-detail-container64 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text142 {
  width: 200px;
  color: var(--dl-color-gray-white);
  text-align: start;
}

.admin-case-study-detail-container65 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-textarea6 {
  width: 994px;
  height: 82px;
}

.admin-case-study-detail-button47 {
  align-self: flex-start;
}

.admin-case-study-detail-container66 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-case-study-detail-button48 {
  align-self: center;
}

.admin-case-study-detail-container67 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image12 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container68 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image13 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container69 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-button51 {
  align-self: flex-start;
}

.admin-case-study-detail-container70 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video12 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button52 {
  align-self: center;
}

.admin-case-study-detail-container71 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video13 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button53 {
  align-self: center;
}

.admin-case-study-detail-container72 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text161 {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.admin-case-study-detail-container73 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-textarea7 {
  width: 994px;
  height: 82px;
}

.admin-case-study-detail-button54 {
  align-self: flex-start;
}

.admin-case-study-detail-container74 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-case-study-detail-button55 {
  align-self: center;
}

.admin-case-study-detail-container75 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image14 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container76 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image15 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container77 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-button58 {
  align-self: flex-start;
}

.admin-case-study-detail-container78 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video14 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button59 {
  align-self: center;
}

.admin-case-study-detail-container79 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video15 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button60 {
  align-self: center;
}

.admin-case-study-detail-container80 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text180 {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.admin-case-study-detail-container81 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-textarea8 {
  width: 994px;
  height: 82px;
}

.admin-case-study-detail-button61 {
  align-self: flex-start;
}

.admin-case-study-detail-container82 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.admin-case-study-detail-button62 {
  align-self: center;
}

.admin-case-study-detail-container83 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image16 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container84 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
}

.admin-case-study-detail-image17 {
  width: 200px;
  margin-top: var(--dl-space-space-twounits);
  object-fit: cover;
  margin-left: 0px;
  margin-bottom: var(--dl-space-space-unit);
}

.admin-case-study-detail-container85 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-button65 {
  align-self: flex-start;
}

.admin-case-study-detail-container86 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video16 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button66 {
  align-self: center;
}

.admin-case-study-detail-container87 {
  flex: 0 0 auto;
  width: auto;
  height: 180px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}

.admin-case-study-detail-video17 {
  width: 320px;
  height: 180px;
  margin-top: 0px;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 0px;
}

.admin-case-study-detail-button67 {
  align-self: center;
}

.admin-case-study-detail-container88 {
  flex: 1;
  width: 100%;
  height: 266px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-case-study-detail-text199 {
  color: var(--dl-color-gray-white);
  text-align: center;
}

.admin-case-study-detail-container89 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.admin-case-study-detail-container90 {
  flex: 1;
  width: 288px;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-container91 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.admin-case-study-detail-container92 {
  flex: 1;
  width: 288px;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-container93 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.admin-case-study-detail-button71 {
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  background-color: var(--dl-color-success-700);
}

.admin-case-study-detail-container94 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.admin-case-study-detail-navlink {
  color: var(--dl-color-gray-white);
  font-size: 20px;
  align-self: center;
  font-style: normal;
  font-weight: 600;
  border-width: 0px;
  margin-right: 20px;
  border-radius: var(--dl-radius-radius-radius8);
  text-decoration: none;
  background-color: var(--dl-color-custom-primary2);
}

.admin-case-study-detail-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-case-study-detail-footer1 {
  height: 246;
}

.admin-case-study-detail-container95 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-case-study-detail-logo2 {
  text-decoration: none;
}

.admin-case-study-detail-separator {
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

.admin-case-study-detail-container96 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .admin-case-study-detail-hero {
    flex-direction: column;
  }

  .admin-case-study-detail-container03 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .admin-case-study-detail-hero-heading {
    text-align: center;
  }

  .admin-case-study-detail-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .admin-case-study-detail-hero1 {
    flex-direction: column;
  }

  .admin-case-study-detail-hero-heading1 {
    text-align: center;
  }

  .admin-case-study-detail-hero-heading2 {
    text-align: center;
  }

  .admin-case-study-detail-hero-heading3 {
    text-align: center;
  }
}

@media(max-width: 767px) {
  .admin-case-study-detail-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-case-study-detail-desktop-menu {
    display: none;
  }

  .admin-case-study-detail-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .admin-case-study-detail-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-case-study-detail-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-case-study-detail-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-case-study-detail-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-case-study-detail-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-case-study-detail-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .admin-case-study-detail-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-case-study-detail-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-case-study-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-case-study-detail-container96 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-case-study-detail-text203 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .admin-case-study-detail-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .admin-case-study-detail-mobile-menu1 {
    padding: 16px;
  }

  .admin-case-study-detail-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-case-study-detail-container03 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-case-study-detail-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-case-study-detail-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .admin-case-study-detail-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-case-study-detail-container96 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-case-study-detail-text203 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
