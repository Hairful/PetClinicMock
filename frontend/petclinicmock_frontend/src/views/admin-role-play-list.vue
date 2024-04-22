<template>
  <div class="admin-role-play-list-container">
    <div class="admin-role-play-list-header">
      <header data-thq="thq-navbar" class="navbarContainer admin-role-play-list-navbar-interactive">
        <router-link to="/menu" class="admin-role-play-list-logo logo">
          PETCLINICMock
        </router-link>
        <div>
          <div data-thq="thq-navbar-nav" class="admin-role-play-list-desktop-menu">
            <span>
              <span>
                登录用户：
              </span>
              <span class="admin-role-play-list-text02">{{ name }}</span>
            </span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-role-play-list-container01"></div>
    <div class="heroContainer admin-role-play-list-hero">
      <div class="admin-role-play-list-container02">
        <h1 class="admin-role-play-list-hero-heading">
          <span class="heading1">
            角色扮演管理：
          </span>
          <span class="admin-role-play-list-text04"> {{ role }} </span>
        </h1>
      </div>
    </div>
    <div class="admin-role-play-list-container03">
      <router-link to="/admin-role-play-menu" class="admin-role-play-list-navlink button">
        重选角色
      </router-link>
      <router-link to="/admin-menu" class="admin-role-play-list-navlink1 button">
        返回管理员菜单
      </router-link>
    </div>
    <div class="admin-role-play-list-hero1 heroContainer">
      <h1 class="admin-role-play-list-hero-heading1">
        <span class="heading1">工作管理</span>
        <br />
      </h1>
      <div class="admin-role-play-list-container04">
        <div class="admin-role-play-list-container05">
          <input type="text" v-model="newJob" placeholder="添加新的工作" class="input" />
          <textarea v-model="newJobDetail" placeholder="新工作的细节" class="textarea"> </textarea>
          <button type="button" class="button" style="background-color: var(--dl-color-success-700);" @click="addNewJob()">
            <span>
              <span>添加</span>
              <br />
            </span>
          </button>
        </div>
      </div>
      <div class="admin-role-play-list-container06">
        <ul class="admin-role-play-list-ul list">
          <li v-for="(job, index) in jobs" :key="index" class="admin-role-play-list-li list-item Content">
            <div class="admin-role-play-list-container07">
              <div class="admin-role-play-list-container08">
                <input type="text" v-model="jobs[index]" placeholder="" class="input" />
                <button type="button" class="admin-role-play-list-button2 button" @click="renameJob(index)">
                  <span>
                    <span>重命名</span>
                    <br />
                  </span>
                </button>
              </div>
              <div class="admin-role-play-list-container08">
                <textarea v-model="jobDetails[index]" placeholder="" class="textarea" style="width: 300px; height: 100px;"> </textarea>
                <button type="button" class="admin-role-play-list-button2 button" @click="renameJob(index)">
                  <span>
                    <span>修改</span>
                    <br />
                  </span>
                </button>
              </div>
              <button type="button" class="admin-role-play-list-button2 button" style="background-color: var(--dl-color-danger-700);" @click="deleteJob(index)">
                <span>
                  <span>删除</span>
                  <br />
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="admin-role-play-list-footer">
      <footer class="admin-role-play-list-footer1 footerContainer">
        <div class="admin-role-play-list-container11">
          <router-link to="/menu" class="admin-role-play-list-logo2 logo">
            PETCLINICMOCK
          </router-link>
        </div>
        <div class="admin-role-play-list-separator"></div>
        <div class="admin-role-play-list-container12">
          <span class="bodySmall admin-role-play-list-text43">
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
  name: 'AdminRolePlayList',
  props: {},
  data() {
    return {
      role: ' ',
      jobs: [],
      prevJobs: [],
      jobDetails: [],
      newJob: '',
      newJobDetail: '',
      name: localStorage.getItem('username'),
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    role2number(role) {
      switch (role) {
        case '前台':
          return 0;
        case '医助':
          return 1;
        case '医生':
          return 2;
        default:
          return -1;
      }
    },
    fetchJobs() {
      this.jobs = [];
      this.jobDetails = [];
      this.prevJobs = [];
      axios
        .get(`/roleplaying/list?role=${this.role2number(this.role)}`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('Token')}`
            }
          })
        .then((response) => {
          if (response.data.status === 0) {
            this.jobs = response.data.jobs;
            this.prevJobs = [...this.jobs];
            // Fetch the details for each job
            const promises = this.jobs.map(job => {
              return axios
                .get(`/roleplaying/detail?role=${this.role2number(this.role)}&job=${job}`,
                  {
                    headers: {
                      'Authorization': `Bearer ${localStorage.getItem('Token')}`
                    }
                  });
            });
            return Promise.all(promises);
          } else {
            console.log(response.data.message);
          }
        })
        .then((responses) => {
          responses.forEach((response, index) => {
            if (response.data.status === 0) {
              this.jobDetails.push(response.data.jobDetail);
            } else {
              //console.log(response.data.message);
              // Remove the job from jobs array if its details couldn't be fetched
              this.jobs.splice(index, 1);
            }
          });
        })
        .catch(error => console.log(error));
    },
    async renameJob(index) {
      const job = this.jobs[index];
      const detail = this.jobDetails[index];
      const role = this.role2number(this.role);
      let prevJob = this.prevJobs[index];
      if (job === prevJob) {
        axios({
          method: 'put',
          url: '/admin/roleplaying',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          },
          data: {
            role: role,
            job: job,
            jobDetail: detail
          }
        })
          .then(response => {
            if (response.status === 200) {
              this.$message('修改成功');
              //console.log(response.data.message); // "成功"
              this.fetchJobs(); // fetch jobs after the axios request has completed
            }
          })
          .catch(error => {
            if (error.response) {
              if (error.response.status === 404) {
                if (error.response.data.status === 1) {
                  this.$message.warning(error.response.data.message); // "无对应role"
                } else if (error.response.data.status === 2) {
                  this.$message.warning(error.response.data.message); // "无对应job"
                }
              } else if (error.response.status === 400) {
                this.$message.warning(error.response.data.message); // "重复的job"
              }
            } else {
              console.log(error);
            }
          });
      } else {
        axios({
          method: 'put',
          url: '/admin/roleplaying',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          },
          data: {
            role: role,
            prevJob: prevJob,
            job: job,
            jobDetail: detail
          }
        })
          .then(response => {
            if (response.status === 200) {
              this.$message('修改成功');
              //console.log(response.data.message); // "成功"
              this.fetchJobs(); // fetch jobs after the axios request has completed
            }
          })
          .catch(error => {
            if (error.response) {
              if (error.response.status === 404) {
                if (error.response.data.status === 1) {
                  this.$message.warning(error.response.data.message); // "无对应role"
                } else if (error.response.data.status === 2) {
                  this.$message.warning(error.response.data.message); // "无对应job"
                }
              } else if (error.response.status === 400) {
                this.$message.warning(error.response.data.message); // "重复的job"
              }
            } else {
              console.log(error);
            }
          });
      }
    },
    async addNewJob() {
      axios({
        method: 'post',
        url: '/admin/roleplaying',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          role: this.role2number(this.role),
          job: this.newJob,
          jobDetail: this.newJobDetail
        }
      })
        .then(response => {
          if (response.status === 200) {
            this.$message('修改成功');
            //console.log(response.data.message); // "成功"
            this.fetchJobs(); // fetch jobs after the axios request has completed
          }
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 404) {
              this.$message.warning(error.response.data.message); // "无对应role"
            } else if (error.response.status === 400) {
              this.$message.warning(error.response.data.message); // "重复的job"
            }
          } else {
            console.log(error);
          }
        });
    },
    async deleteJob(index) {
      try {
        const response = await axios.delete(`/admin/roleplaying?role=${this.role2number(this.role)}&job=${this.jobs[index]}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 200) {
          this.$message('修改成功');
          //console.log(response.data.message); // "成功"
          this.fetchJobs(); // fetch jobs after the axios request has completed
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 404) {
            if (error.response.data.status === 1) {
              this.$message.warning(error.response.data.message);   // "无对应role"
            } else if (error.response.data.status === 2) {
              this.$message.warning(error.response.data.message); // "无对应job"
            }
          }
        } else {
          console.log(error);
        }
      }
    }
  },
  created() {
    this.role = this.$route.query.role;
    axios
      .get(`/roleplaying/list?role=${this.role2number(this.role)}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`
          }
        })
      .then((response) => {
        if (response.data.status === 0) {
          this.jobs = response.data.jobs;
          this.prevJobs = [...this.jobs];
          // Fetch the details for each job
          const promises = this.jobs.map(job => {
            return axios
              .get(`/roleplaying/detail?role=${this.role2number(this.role)}&job=${job}`,
                {
                  headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`
                  }
                });
          });
          return Promise.all(promises);
        } else {
          console.log(response.data.message);
        }
      })
      .then((responses) => {
        responses.forEach((response, index) => {
          if (response.data.status === 0) {
            this.jobDetails.push(response.data.jobDetail);
          } else {
            console.log(response.data.message);
            // Remove the job from jobs array if its details couldn't be fetched
            this.jobs.splice(index, 1);
          }
        });
      })
      .catch(error => console.log(error));
  },
  metaInfo: {
    title: 'AdminRolePlayList - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'AdminRolePlayList - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.admin-role-play-list-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.admin-role-play-list-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.admin-role-play-list-logo {
  text-decoration: none;
}

.admin-role-play-list-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.admin-role-play-list-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.admin-role-play-list-burger-menu {
  display: none;
}

.admin-role-play-list-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-role-play-list-mobile-menu1 {
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

.admin-role-play-list-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-role-play-list-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.admin-role-play-list-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-role-play-list-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-role-play-list-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.admin-role-play-list-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-role-play-list-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-role-play-list-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-role-play-list-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-role-play-list-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.admin-role-play-list-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-role-play-list-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-role-play-list-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.admin-role-play-list-container01 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-role-play-list-container02 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-role-play-list-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}

.admin-role-play-list-text04 {
  color: var(--dl-color-custom-primary2);
  font-weight: 900;
}

.admin-role-play-list-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.admin-role-play-list-container03 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.admin-role-play-list-navlink {
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

.admin-role-play-list-navlink1 {
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

.admin-role-play-list-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}

.admin-role-play-list-hero-heading1 {
  color: var(--dl-color-gray-white);
  max-width: 800px;
  text-align: center;
  padding-bottom: var(--dl-space-space-twounits);
}

.admin-role-play-list-container04 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
}

.admin-role-play-list-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.admin-role-play-list-container06 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.admin-role-play-list-ul {
  width: auto;
  position: relative;
}

.admin-role-play-list-li {
  color: var(--dl-color-gray-white);
  width: auto;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}

.admin-role-play-list-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.admin-role-play-list-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.admin-role-play-list-button2 {
  width: 94px;
  height: 36px;
}

.admin-role-play-list-navlink2 {
  width: 180px;
  height: 35px;
  text-decoration: none;
}

.admin-role-play-list-li1 {
  color: var(--dl-color-gray-white);
  width: auto;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}

.admin-role-play-list-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.admin-role-play-list-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.admin-role-play-list-button4 {
  width: 94px;
  height: 36px;
}

.admin-role-play-list-button5 {
  width: 211px;
  height: 35px;
}

.admin-role-play-list-navlink3 {
  text-decoration: none;
}

.admin-role-play-list-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-role-play-list-footer1 {
  height: 246;
}

.admin-role-play-list-container11 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-role-play-list-logo2 {
  text-decoration: none;
}

.admin-role-play-list-separator {
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

.admin-role-play-list-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .admin-role-play-list-hero {
    flex-direction: column;
  }

  .admin-role-play-list-container02 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .admin-role-play-list-hero-heading {
    text-align: center;
  }

  .admin-role-play-list-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .admin-role-play-list-hero1 {
    flex-direction: column;
  }

  .admin-role-play-list-hero-heading1 {
    text-align: center;
  }
}

@media(max-width: 767px) {
  .admin-role-play-list-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-role-play-list-desktop-menu {
    display: none;
  }

  .admin-role-play-list-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .admin-role-play-list-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-role-play-list-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-role-play-list-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-role-play-list-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-role-play-list-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-role-play-list-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .admin-role-play-list-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-role-play-list-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-role-play-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-role-play-list-container12 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-role-play-list-text43 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .admin-role-play-list-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .admin-role-play-list-mobile-menu1 {
    padding: 16px;
  }

  .admin-role-play-list-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-role-play-list-container02 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-role-play-list-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-role-play-list-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .admin-role-play-list-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-role-play-list-container12 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-role-play-list-text43 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
