<template>
  <div class="admin-user-container">
    <div class="admin-user-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer admin-user-navbar-interactive"
      >
        <router-link to="/menu" class="admin-user-logo logo">PETCLINICMock</router-link>
        <div>
        <div data-thq="thq-navbar-nav" class="admin-user-desktop-menu">
          <span
            ><span>登录用户： <span v-html="rawbedh"></span></span
            ><span class="admin-user-text02">{{ name }}</span></span
          ></div
        ><div>
          <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
        </div>
        </div>
      </header></div
    ><div class="admin-user-container01"></div
    ><div class="heroContainer admin-user-hero"
      ><div class="admin-user-container02"
        ><h1 class="admin-user-hero-heading">Manage Users</h1
        ></div></div
    ><div class="admin-user-container03"
      ><router-link to="/admin-menu" class="admin-user-navlink button"
        ><span
          ><span>Admin <span v-html="raw1rdy"></span></span
          ><span>Menu</span></span
        ></router-link
      ></div
    ><div class="admin-user-hero1 heroContainer"
      ><div class="admin-user-container04"></div
      ><div class="admin-user-container05"
        ><ul class="admin-user-ul list">
          <li class="admin-user-li list-item Content" v-for="(user, index) in users" :key="user.userID">
            <div class="admin-user-container06">
              <div class="admin-user-container07">
                <input
                  type="text"
                  :placeholder="user.userName"
                  class="input"
                  v-model="users[index].userName"
                  pattern="^[\u4e00-\u9fa5\w]{2,20}$"
                  @input="validateInput(index)"
                />
              </div> <span class="error" v-if="users[index].error">{{ users[index].error }}</span>
              <input type="checkbox" v-model="users[index].isAdmin" /><span>isAdmin</span>
              <button type="button" class="button" @click="updateUser(index)">Modify</button>
              <button type="button" class="button" @click="deleteUser(index)">Delete</button>
            </div>
          </li>
          </ul></div
      ></div
    ><div class="admin-user-footer"
      ><footer class="admin-user-footer1 footerContainer"
        ><div class="admin-user-container08"
          ><router-link to="/menu" class="admin-user-logo2 logo"
            >PETCLINICMOCK</router-link
          ></div
        ><div class="admin-user-separator"></div
        ><div class="admin-user-container09"
          ><span class="bodySmall admin-user-text22"
            >© 2024 SWD-G02, All Rights Reserved.</span
          ></div
        ></footer
      ></div
    ></div
  >
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminUser',
  props: {},
  data() {
    return {
      rawbedh: ' ',
      raw7a0p: ' ',
      rawj58l: ' ',
      rawpjnf: ' ',
      raw3c96: ' ',
      rawc5cu: ' ',
      rawhiyy: ' ',
      rawp93p: ' ',
      raw1rdy: ' ',
      users: [],
      name:localStorage.getItem('username'),
    }
  },
  methods: {
    validateInput(index) {
      const pattern = /^[\u4e00-\u9fa5\w]{2,20}$/;
      if (!pattern.test(this.users[index].userName)) {
        this.$set(this.users[index], 'error', '用户名长度在 2~20 位不含特殊字符');
      } else {
        this.$set(this.users[index], 'error', '');
      }
    },
    async fetchUsers() { 
      axios.get('/admin/user', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        } 
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.message); // "成功"
          this.users = response.data.users; // update users with the response data
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    async deleteUser(index) {
      const user = this.users[index];
      axios({
        method: 'delete',
        url: `/admin/user?userID=${user.userID}`,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.message); // "成功"
          this.fetchUsers(); // fetch users after the axios request has completed
        }
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            console.log(error.response.data.message); // "无对应userID"
          }
        } else {
          console.log(error);
        }
      });
    },
    async updateUser(index) {
      const user = this.users[index];
      axios({
        method: 'put',
        url: '/admin/user',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          userID: user.userID,
          userName: user.userName,
          isAdmin: user.isAdmin
        }
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.message); // "成功"
          this.fetchUsers(); // fetch users after the axios request has completed
        }
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            this.$message.warning(error.response.data.message); // "无对应userID"
          } else if (error.response.status === 400) {
            this.$message.warning(error.response.data.message); // "重复的userName"
          }
        } else {
          console.log(error);
        }
      });
    }
  },
  created() {
    this.fetchUsers()
  },
  metaInfo: {
    title: 'AdminUser - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'AdminUser - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.error {
  color: red;
  font: 1em sans-serif;
}
.admin-user-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.admin-user-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.admin-user-logo {
  text-decoration: none;
}
.admin-user-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.admin-user-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}
.admin-user-burger-menu {
  display: none;
}
.admin-user-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-user-mobile-menu1 {
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
.admin-user-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-user-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.admin-user-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-user-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.admin-user-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.admin-user-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-user-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-user-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-user-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}
.admin-user-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.admin-user-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-user-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.admin-user-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.admin-user-container01 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.admin-user-container02 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-user-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}
.admin-user-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.admin-user-container03 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.admin-user-navlink {
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
.admin-user-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.admin-user-container04 {
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
.admin-user-container05 {
  flex: 0 0 auto;
  width: 983px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.admin-user-ul {
  flex: 1;
  width: auto;
  position: relative;
  align-items: flex-start;
  margin-right: 639px;
  flex-direction: column;
}
.admin-user-li {
  color: var(--dl-color-gray-white);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}
.admin-user-container06 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-user-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}
.admin-user-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-user-footer1 {
  height: 246;
}
.admin-user-container08 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.admin-user-logo2 {
  text-decoration: none;
}
.admin-user-separator {
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
.admin-user-container09 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .admin-user-hero {
    flex-direction: column;
  }
  .admin-user-container02 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .admin-user-hero-heading {
    text-align: center;
  }
  .admin-user-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .admin-user-hero1 {
    flex-direction: column;
  }
}
@media(max-width: 767px) {
  .admin-user-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-user-desktop-menu {
    display: none;
  }
  .admin-user-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .admin-user-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-user-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-user-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-user-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-user-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-user-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .admin-user-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-user-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .admin-user-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-user-container09 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-user-text22 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .admin-user-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .admin-user-mobile-menu1 {
    padding: 16px;
  }
  .admin-user-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .admin-user-container02 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .admin-user-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .admin-user-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .admin-user-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .admin-user-container09 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .admin-user-text22 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
