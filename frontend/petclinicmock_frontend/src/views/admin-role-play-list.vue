<template>
  <div class="admin-role-play-list-container">
    <div class="admin-role-play-list-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer admin-role-play-list-navbar-interactive"
      >
        <router-link to="/" class="admin-role-play-list-logo logo">
          PETCLINICMock
        </router-link>
        <div data-thq="thq-navbar-nav" class="admin-role-play-list-desktop-menu">
          <span>
            <span>
              Logged in as
              <span v-html="raw0x8n"></span>
            </span>
            <span class="admin-role-play-list-text02">Allen</span>
          </span>
        </div>
        <div data-thq="thq-burger-menu" class="admin-role-play-list-burger-menu">
          <svg
            viewBox="0 0 1024 1024"
            class="admin-role-play-list-icon socialIcons"
          >
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="admin-role-play-list-mobile-menu1 mobileMenu"
        >
          <div class="admin-role-play-list-nav">
            <div class="admin-role-play-list-top">
              <span class="logo">PETSCLINIC</span>
              <div
                data-thq="thq-close-menu"
                class="admin-role-play-list-close-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  class="admin-role-play-list-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="admin-role-play-list-links">
              <span class="admin-role-play-list-nav12 bodySmall">Home</span>
              <span class="admin-role-play-list-nav22 bodySmall">Services</span>
              <span class="admin-role-play-list-nav32 bodySmall">Our Team</span>
              <span class="admin-role-play-list-nav42 bodySmall">Contact</span>
            </nav>
            <div class="admin-role-play-list-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="admin-role-play-list-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="admin-role-play-list-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="admin-role-play-list-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-role-play-list-container01"></div>
    <div class="heroContainer admin-role-play-list-hero">
      <div class="admin-role-play-list-container02">
        <h1 class="admin-role-play-list-hero-heading">
          <span class="heading1">
            Modify Role Play:
            <span v-html="raw6ohr"></span>
          </span>
          <span class="admin-role-play-list-text04"> {{ role }} </span>
        </h1>
      </div>
    </div>
    <div class="admin-role-play-list-container03">
      <router-link
        to="/admin-role-play-menu"
        class="admin-role-play-list-navlink button"
      >
        Choose Role
      </router-link>
      <router-link to="/admin-menu" class="admin-role-play-list-navlink1 button">
        Admin Menu
      </router-link>
    </div>
    <div class="admin-role-play-list-hero1 heroContainer">
      <h1 class="admin-role-play-list-hero-heading1">
        <span class="heading1">Manage a Job</span>
        <br />
      </h1>
      <div class="admin-role-play-list-container04">
        <div class="admin-role-play-list-container05">
          <input type="text" v-model="newJob" placeholder="添加新的工作" class="input" />
          <input type="text" v-model="newJobDetail" placeholder="新工作的细节" class="input" />
          <button type="button" class="button" @click="addNewJob()">
            <span>
              <span>Add New Job</span>
              <br />
            </span>
          </button>
        </div>
      </div>
      <div class="admin-role-play-list-container06">
        <ul class="admin-role-play-list-ul list">
          <li 
            v-for="(job, index) in jobs" 
            :key="index" 
            class="admin-role-play-list-li list-item Content"
          >
            <div class="admin-role-play-list-container07">
              <div class="admin-role-play-list-container08">
                <input type="text" v-model="jobs[index]" placeholder="" class="input" />
                <button type="button" class="button" @click="renameJob(index)">
                  <span>
                    <span>Rename</span>
                    <br />
                  </span>
                </button>
              </div>
              <div class="admin-role-play-list-container08">
                <input type="text" v-model="jobDetails[index]" placeholder="" class="input" />
                <button type="button" class="button" @click="renameJob(index)">
                  <span>
                    <span>Modify</span>
                    <br />
                  </span>
                </button>
              </div>
              <button type="button" class="admin-role-play-list-button2 button" @click="deleteJob(index)">
                <span>
                  <span>Delete</span>
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
          <router-link to="/" class="admin-role-play-list-logo2 logo">
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
      raw0x8n: ' ',
      raw6ohr: ' ',
      rawo5hj: ' ',
      rawvfo2: ' ',
      rawj6ep: ' ',
      rawfa5g: ' ',
      raw8de5: ' ',
      raw450q: ' ',
      raweqk6: ' ',
      role: ' ',
      jobs: [],
      prevJobs: [],
      jobDetails: [],
      newJob: '',
      newJobDetail: '',
    }
  },
  methods: {
    role2number(role) {
      switch (role) {
        case 'Front Desk':
          return 0;
        case 'Medical Assistant':
          return 1;
        case 'Doctor':
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
            'Authorization': `Bearer ${localStorage.getItem('token')}`
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
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
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
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          data: {
            role: role,
            job: job,
            jobDetail: detail
          }
        })
        .then(response => {
          this.fetchJobs();
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
      }
      axios({
        method: 'put',
        url: '/admin/roleplaying',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
        this.fetchJobs();
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
    },
    async addNewJob() {
      axios({
        method: 'post',
        url: '/admin/roleplaying',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        data: {
          role: this.role2number(this.role),
          job: this.newJob,
          jobDetail: this.newJobDetail
        }
      })
      .then(response => {
        // handle success
        console.log(response);
        this.fetchJobs(); // fetch jobs after the axios request has completed
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
    },
    async deleteJob(index) {
      try {
        const response = await axios.delete(`/admin/roleplaying?role=1&job=${this.jobs[index]}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        this.fetchJobs();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.role = this.$route.query.role;
    axios
      .get(`/roleplaying/list?role=${this.role2number(this.role)}`, 
        {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
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
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
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
    title: 'AdminRolePlayList - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'AdminRolePlayList - Roasted Rusty Swallow',
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
  border: 2px dashed rgba(120, 120, 120, 0.4);
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
  width: 285px;
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
  width: 100%;
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
