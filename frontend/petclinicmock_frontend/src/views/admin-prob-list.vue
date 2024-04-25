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
        <h1 class="admin-quiz-list-hero-heading">题库管理</h1>
      </div>
    </div>
    <div class="admin-quiz-list-container03">
      <router-link to="/admin-menu" class="admin-quiz-list-navlink button">
        <span>返回管理员菜单</span>
      </router-link>
    </div>
    <div class="admin-quiz-list-hero1 heroContainer">
      <h1 class="admin-quiz-list-hero-heading1">
        <span class="heading1">选择题目</span>
        <br />
      </h1>
      <div class="admin-quiz-list-container04">
      </div>
      <el-card style="width: 80%;">
          <el-table :data="probs"  stripe><!-- 带边框、斑马纹 -->
              <el-table-column width="100px" label="题目编号" prop="probDbID"></el-table-column>
              <el-table-column label="题目内容" prop="probDbText"></el-table-column>
              <el-table-column align="right" width="300px">
                <template slot="header" slot-scope="scope">
                  <el-button size= "big" type="success" @click="openAddWindow">新增</el-button>
                </template>
                <template slot-scope="scope">
                    <el-button size= "mini" type="primary" icon="el-icon-edit" @click="openEditWindow(scope.row)">编辑</el-button>
                    <el-button size= "mini" type="danger" icon="el-icon-delete" @click="deleteProb(scope.row)">删除</el-button>
                </template>
              </el-table-column>
          </el-table>
          <el-dialog title="添加题目" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed"
            :close-on-click-modal='false'>
              <!-- 内容主体区 -->
              <el-form :model="addForm" ref="addFormRef" label-width="70px">
                <el-form-item label="题目" required>
                  <el-input v-model="addForm.text" ></el-input>
                </el-form-item>
                <el-form-item label="选项" required>
                  <el-row></el-row>
                  <el-row :gutter="50">
                    <el-col :span="11">
                      <div>选项A</div>
                      <el-input v-model="addForm.option1" ></el-input>
                    </el-col>
                    <el-col :span="11">
                      <div>选项B</div>
                      <el-input v-model="addForm.option2" ></el-input>
                    </el-col>
                  </el-row>
                  <el-row :gutter="50">
                    <el-col :span="11">
                      <div>选项C</div>
                      <el-input v-model="addForm.option3" ></el-input>
                    </el-col>
                    <el-col :span="11">
                      <div>选项D</div>
                      <el-input v-model="addForm.option4" ></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="正确选项" required>
                  <el-radio-group v-model="addForm.ans">
                    <el-radio :label="1">A</el-radio>
                    <el-radio :label="2">B</el-radio>
                    <el-radio :label="3">C</el-radio>
                    <el-radio :label="4">D</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="分数" required>
                  <el-input v-model="addForm.credit"></el-input>
                </el-form-item>
                <el-form-item label="图片">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="#"
                    list-type="picture"
                    :http-request="UploadImage"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :before-upload="beforeAvatarUpload"
                    :limit="1"
                    :on-change="handleChange"
                    :on-exceed="handleExceed"
                    :file-list="formData.fileList"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  </el-upload>
                </el-form-item>
              </el-form>
              <!-- 底部区 -->
              <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="AddProb()">确 定</el-button>
              </span>
            </el-dialog>
          <el-dialog title="修改题目" :visible.sync="editDialogVisible" width="50%" @close="editDialogClosed"
            :close-on-click-modal='false'>
              <!-- 内容主体区 -->
              <el-form :model="editForm" ref="editFormRef" label-width="70px">
                <el-form-item label="题目" required>
                  <el-input v-model="editForm.text" @input="change($event)"></el-input>
                </el-form-item>
                <el-form-item label="选项" required>
                  <el-row></el-row>
                  <el-row :gutter="50">
                    <el-col :span="11">
                      <div>选项A</div>
                      <el-input v-model="editForm.option1" @input="change($event)"></el-input>
                    </el-col>
                    <el-col :span="11">
                      <div>选项B</div>
                      <el-input v-model="editForm.option2" @input="change($event)"></el-input>
                    </el-col>
                  </el-row>
                  <el-row :gutter="50">
                    <el-col :span="11">
                      <div>选项C</div>
                      <el-input v-model="editForm.option3" @input="change($event)"></el-input>
                    </el-col>
                    <el-col :span="11">
                      <div>选项D</div>
                      <el-input v-model="editForm.option4" @input="change($event)"></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="正确选项" required>
                  <el-radio-group v-model="editForm.ans" @input="change($event)">
                    <el-radio :label="1">A</el-radio>
                    <el-radio :label="2">B</el-radio>
                    <el-radio :label="3">C</el-radio>
                    <el-radio :label="4">D</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="分数" required>
                  <el-input v-model="editForm.credit" @input="change($event)"></el-input>
                </el-form-item>
                <el-form-item label="图片">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="#"
                    list-type="picture"
                    :http-request="UploadImage"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :before-upload="beforeAvatarUpload"
                    :limit="1"
                    :on-change="handleChange"
                    :on-exceed="handleExceed"
                    :file-list="formData.fileList"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  </el-upload>
                </el-form-item>
              </el-form>
              <!-- 底部区 -->
              <span slot="footer" class="dialog-footer">
                <el-button @click="editDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="EditProb()">确 定</el-button>
              </span>
            </el-dialog>
        </el-card>
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
import client from '../oss.js';
import { string } from 'three/examples/jsm/nodes/Nodes.js';
export default {
  name: 'AdminQuizList',
  props: {},
  data() {
    return {
      newQuizName: '',
      probs: [],
      name: localStorage.getItem('username'),
      addDialogVisible: false,
      addForm:{},
      editDialogVisible: false,
      editForm:{},
      formData: {
        fileList: [],
      },
    }
  },
  methods: {
    change(){
      this.$forceUpdate();
    },
    handleRemove(file, fileList) {
      //   判断是否是正确格式图片才能执行删除
      if (file && file.status === "success") {

        let Pics = this.formData.fileList;
        Pics.forEach((item, index) => {
          if (file.name == item.name) {
            Pics.splice(index, 1);
          }
        });
      }
    },
    //查看图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleChange(file, fileList) {
    },
    async UploadImage(param) {
      let file = param.file;
      const uploadResult = await client.put('prob/' + file.name, file);
      this.formData.fileList.push({
            name: file.name,
            url: uploadResult.url,
            uid: file.uid,
          });
      console.log('上传成功:', uploadResult);
    },
    // 上传检测
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      this.isname = true;
      // 不能在foreach中增加else判断,否则会进行多次执行
      //   forEach 会遍历数组中的所有元素，满足条件后还继续执行了循环，
      // 可以通过 try catch 抛出异常的方式跳出循环
      this.formData.fileList.forEach((item, index) => {
        if (file.name === item.name) {
          this.isname = false;
        }
      });
      if (!this.isname) {
        this.$message.error("图片重复");
      }
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
        // this.$refs.upload.handleRemove(file);
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
        // this.$refs.upload.handleRemove(file);
      }
      return isJPG && isLt2M && this.isname;
    },
    //控制上传数量提示
    handleExceed(files, fileList) {
      this.$message.warning(`最多上传1个文件`);
    },
    
    editDialogClosed(){
      this.editForm = {};
      this.$refs.editFormRef.resetFields();
      this.formData.fileList = [];
    },
    openEditWindow(prob){
      axios
        .get(`/admin/probDb/detail?probDbID=${prob.probDbID}`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('Token')}`
            }
          })
        .then((response) => {
          if (response.data.status === 0) {
            this.editForm.credit = response.data.probDbCredit;
            this.editForm.ans = response.data.probDbAns;
            if(response.data.probDbImg){
              this.formData.fileList.push({
                name: response.data.probDbImg,
                url: response.data.probDbImg,
                uid: null,
              })
            }
            else {
              this.formData.fileList=[];
            }
            let texts = response.data.probDbText.split("<br/>");
            this.editForm.text = texts[0];
            this.editForm.option1 = texts[1];
            this.editForm.option2 = texts[2];
            this.editForm.option3 = texts[3];
            this.editForm.option4 = texts[4];
            this.editForm.id = response.data.probDbID;
          } else {
            console.log(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message.warning(error.message);
        });
      this.editDialogVisible = true;
    },
    EditProb(){
      let probDbCredit = this.editForm.credit;
      let probDbImg = '';
      if(this.formData.fileList[0]){
        probDbImg = this.formData.fileList[0].url;
      }
      else {
        probDbImg = null;
      }
      let probDbAns = this.editForm.ans;
      let probDbText = this.editForm.text;
      let probDbID = this.editForm.id;
      probDbText = probDbText + '<br/>' + this.editForm.option1 + '<br/>' + this.editForm.option3 + '<br/>' + this.editForm.option3 + '<br/>' + this.editForm.option4;
      axios({
        method: 'put',
        url: '/admin/probDb',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          probDbID : probDbID,
          probDbCredit: probDbCredit,
          probDbText: probDbText,
          probDbImg: probDbImg,
          probDbAns: probDbAns,
        }
      })
        .then(response => {
          this.$message('修改成功');
          this.refresh();
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$message.warning(error.message);
        });
      this.editForm = {};
      this.$refs.editFormRef.resetFields();
      this.formData.fileList = [];
      this.editDialogVisible = false;
    },
    addDialogClosed(){
      this.addForm = {};
      this.$refs.addFormRef.resetFields();
      this.formData.fileList = [];
    },
    openAddWindow(){
      this.addDialogVisible = true;
    },
    AddProb(){
      let probDbCredit = this.addForm.credit;
      let probDbImg = '';
      if(this.formData.fileList[0]){
        probDbImg = this.formData.fileList[0].url;
      }
      else {
        probDbImg = null;
      }
      let probDbAns = this.addForm.ans;
      let probDbText = this.addForm.text;
      probDbText = probDbText + '<br/>' + this.addForm.option1 + '<br/>' + this.addForm.option3 + '<br/>' + this.addForm.option3 + '<br/>' + this.addForm.option4;
      axios({
        method: 'post',
        url: '/admin/probDb',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          probDbCredit: probDbCredit,
          probDbText: probDbText,
          probDbImg: probDbImg,
          probDbAns: probDbAns,
        }
      })
        .then(response => {
          this.$message('修改成功');
          this.refresh();
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$message.warning(error.message);
        });
      this.$refs.addFormRef.resetFields();
      this.formData.fileList = [];
      this.addDialogVisible = false;
    },
    async deleteProb(porb){
      try {
        const response = await axios.delete(`/admin/probDb?probDbID=${porb.probDbID}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          }
        });
        //console.log(response.data);
        this.$message('修改成功');
        this.refresh();
      } catch (error) {
        console.log(error);
        this.$message.warning(error.message);
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    refresh() {
      axios
        .get(`/admin/probDb/list`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('Token')}`
            }
          })
        .then((response) => {
          if (response.data.status === 0) {
            this.probs = response.data.probDbs;
          } else {
            console.log(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message.warning(error.message);
        });
    },
    
  },
  created() {
    this.refresh();
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
  color: var(--dl-color-gray-white);
  font-size: 20px;
  align-self: center;
  font-style: normal;
  font-weight: 600;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  text-decoration: none;
  background-color: var(--dl-color-custom-primary2);
  margin-left: var(--dl-space-space-twounits);
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
