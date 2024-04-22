<template>
  <div class="admin-virtual-tour-container">
    <Chatbot />
    <div class="admin-virtual-tour-header">
      <header data-thq="thq-navbar" class="navbarContainer admin-virtual-tour-navbar-interactive">
        <router-link to="/menu" class="admin-virtual-tour-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <div data-thq="thq-navbar-nav" class="admin-virtual-tour-desktop-menu">
            <span>
              登录用户：
              <span class="admin-virtual-tour-text02">{{ name }}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-virtual-tour-container01"></div>
    <div class="heroContainer admin-virtual-tour-hero">
      <div class="admin-virtual-tour-container02">
        <h1 class="admin-virtual-tour-hero-heading">
          虚拟导览管理
        </h1>
      </div>
    </div>
    <div class="admin-virtual-tour-container03">
      <router-link to="/admin-menu" class="admin-virtual-tour-navlink button">
        <span>
          <span>返回管理员菜单</span>
        </span>
      </router-link>
    </div>
    <div class="admin-virtual-tour-hero1 heroContainer">
      <div class="admin-virtual-tour-container04"></div>
      <div class="admin-virtual-tour-container05">
        <ul class="admin-virtual-tour-ul list">
          <li v-for="(item, index) in Items" class="admin-virtual-tour-li list-item Content">
            <span class="heading3">{{ item.itemName }}</span>
            <div class="admin-virtual-tour-container06">
              <div class="admin-virtual-tour-container07">
                <textarea v-model="item.itemIntro" class="admin-virtual-tour-textarea textarea"></textarea>
              </div>
              <div>
                <div class="admin-virtual-tour-container06">
                  <input v-if="!item.itemURL" @change="img($event, index)" type="file">
                  <div class="admin-virtual-tour-container07">
                    <div id="dropzone" v-on:dragover.prevent v-on:drop="handleDrop($event, index)"
                      class="admin-case-study-detail-image">
                      <div class="bigImg-div " v-if="!item.itemURL">或者将图片拖拽到这里</div>
                      <div v-else="item.itemURL">
                        <img v-if="isImage(item.itemURL)" :src="item.itemURL" class="bigImg" />
                        <video v-else="!isImage(item.itemURL)" :src="item.itemURL" class="bigImg" controls></video>
                        <button type="button" class="button" style="background-color: var(--dl-color-danger-700);" @click="clearURL(index)">
                          <span>删除</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button @click="saveItem(index)" type="button" class="button">修改</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="admin-virtual-tour-footer">
      <footer class="admin-virtual-tour-footer1 footerContainer">
        <div class="admin-virtual-tour-container10">
          <router-link to="/menu" class="admin-virtual-tour-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="admin-virtual-tour-separator"></div>
        <div class="admin-virtual-tour-container11">
          <span class="bodySmall admin-virtual-tour-text22">
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
import client from '../oss.js';
export default {
  name: 'AdminVirtualTour',
  props: {},
  components: {
    Chatbot,
  },
  data() {
    return {
      name: localStorage.getItem('username'),
      Items: [],
    }
  },
  methods: {
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
      const uploadResult = await client.put('3D/' + file.name, file);
      console.log(uploadResult);
      this.Items[index].itemURL = uploadResult.url;
      this.saveItem(index);
    },
    saveItem(index) {
      axios({
        method: 'put',
        url: '/admin/item',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          itemID: this.Items[index].itemID,
          itemName: this.Items[index].itemName,
          itemIntro: this.Items[index].itemIntro,
          itemURL: this.Items[index].itemURL,
        }
      })
        .then(response => {
          this.$message('修改成功');
          this.refresh();
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    refresh() {
      axios
        .get(`/3DVirtualTour/item`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('Token')}`
            }
          })
        .then((response) => {
          if (response.data.status === 0) {
            this.Items = response.data.data;
            console.log(response.data);
          } else {
            console.log(response.data.message);
          }
        })
    },
    isImage(url) {
      let suffic = '';
      //获取类型结果
      let result = false;
      try {
        let fileArr = url.split('.');
        suffic = fileArr[fileArr.length - 1]
        // console.log('suffic',suffic);
      } catch (error) {
        suffic = ''
      }
      //图片格式
      var imgList = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
      //进行图片匹配
      result = imgList.some(item => {
        return item === suffic
      })
      // console.log('结果',result);
      return result;
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
    async clearURL(index) {
      let path = this.getPath(this.Items[index].itemURL);
      const Result = await client.delete(path);
      console.log(Result);
      this.Items[index].itemURL = '';
    },
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
  },
  created() {
    axios
      .get(`/3DVirtualTour/item`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`
          }
        })
      .then((response) => {
        if (response.data.status === 0) {
          this.Items = response.data.data;
          //console.log(response.data);
        } else {
          console.log(response.data.message);
        }
      })
  },
  metaInfo: {
    title: 'AdminVirtualTour - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'AdminVirtualTour - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
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

.admin-virtual-tour-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.admin-virtual-tour-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.admin-virtual-tour-logo {
  text-decoration: none;
}

.admin-virtual-tour-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.admin-virtual-tour-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.admin-virtual-tour-burger-menu {
  display: none;
}

.admin-virtual-tour-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-virtual-tour-mobile-menu1 {
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

.admin-virtual-tour-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-virtual-tour-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.admin-virtual-tour-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-virtual-tour-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-virtual-tour-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.admin-virtual-tour-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-virtual-tour-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-virtual-tour-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-virtual-tour-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-virtual-tour-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.admin-virtual-tour-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-virtual-tour-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-virtual-tour-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.admin-virtual-tour-container01 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-virtual-tour-container02 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-virtual-tour-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}

.admin-virtual-tour-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.admin-virtual-tour-container03 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.admin-virtual-tour-navlink {
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

.admin-virtual-tour-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}

.admin-virtual-tour-container04 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-virtual-tour-container05 {
  flex: 0 0 auto;
  width: 983px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.admin-virtual-tour-ul {
  flex: 1;
  width: auto;
  position: relative;
  align-items: flex-start;
  margin-right: 639px;
  flex-direction: column;
}

.admin-virtual-tour-li {
  color: var(--dl-color-gray-white);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}

.admin-virtual-tour-container06 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-virtual-tour-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}

.admin-virtual-tour-textarea {
  width: 550px;
  height: 100px;
}

.admin-virtual-tour-li1 {
  color: var(--dl-color-gray-white);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}

.admin-virtual-tour-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-virtual-tour-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}

.admin-virtual-tour-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-virtual-tour-footer1 {
  height: 246;
}

.admin-virtual-tour-container10 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-virtual-tour-logo2 {
  text-decoration: none;
}

.admin-virtual-tour-separator {
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

.admin-virtual-tour-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .admin-virtual-tour-hero {
    flex-direction: column;
  }

  .admin-virtual-tour-container02 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .admin-virtual-tour-hero-heading {
    text-align: center;
  }

  .admin-virtual-tour-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .admin-virtual-tour-hero1 {
    flex-direction: column;
  }
}

@media(max-width: 767px) {
  .admin-virtual-tour-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-virtual-tour-desktop-menu {
    display: none;
  }

  .admin-virtual-tour-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .admin-virtual-tour-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-virtual-tour-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-virtual-tour-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-virtual-tour-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-virtual-tour-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-virtual-tour-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .admin-virtual-tour-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-virtual-tour-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-virtual-tour-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-virtual-tour-container11 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-virtual-tour-text22 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .admin-virtual-tour-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .admin-virtual-tour-mobile-menu1 {
    padding: 16px;
  }

  .admin-virtual-tour-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-virtual-tour-container02 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-virtual-tour-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-virtual-tour-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .admin-virtual-tour-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-virtual-tour-container11 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-virtual-tour-text22 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
