<template>
  <div class="admin-pharmacy-container">
    <div class="admin-pharmacy-header">
      <header data-thq="thq-navbar" class="navbarContainer admin-pharmacy-navbar-interactive">
        <router-link to="/menu" class="admin-pharmacy-logo logo">PETCLINICMock</router-link>
        <div>
          <div data-thq="thq-navbar-nav" class="admin-pharmacy-desktop-menu">
            <span>
              <span>登录用户：
              </span>
              <span class="admin-pharmacy-text02"> {{ name }} </span></span>
          </div>
          <div>
            <button style="margin-top: 10px;" class="buttonFilled" @click="logout"> 登出系统 </button>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-pharmacy-container01"></div>
    <div class="heroContainer admin-pharmacy-hero">
      <div class="admin-pharmacy-container02">
        <h1 class="admin-pharmacy-hero-heading">药品管理</h1>
      </div>
    </div>
    <div class="admin-pharmacy-container03">
      <button @click="goBack" class="admin-pharmacy-navlink button">
        返回之前页面
      </button>
      <router-link to="/admin-menu" class="admin-pharmacy-navlink1 button">
        返回菜单
      </router-link>
    </div>
    <div class="admin-pharmacy-hero1 heroContainer">
      <div class="admin-pharmacy-container05">
        <div class="admin-pharmacy-container06">
          <input type="text" v-model="newMed.medicineName" placeholder="添加药品名称" class="input" />
        </div>
        <textarea style="width: 700px; height: 60px;" v-model="newMed.medicineIntro" placeholder="添加药品描述"
          class="textarea"></textarea>
        <button type="button" class="button" style="background-color: var(--dl-color-success-700);"
          @click="addMedicine()">添加药品</button>
      </div>
      <div class="admin-pharmacy-container07">
        <ul class="admin-pharmacy-ul list">
          <li class="admin-pharmacy-li list-item Content" v-for="(medicine, index) in medicines"
            :key="medicine.medicineID">
            <div class="admin-pharmacy-container08">
              <div class="admin-pharmacy-container09">
                <input type="text" v-model="medicine.medicineName" placeholder="修改药品名称" class="input" />
              </div>
              <textarea style="width: 700px; height: 60px;" v-model="medicine.medicineIntro" placeholder="修改药品描述"
                class="textarea"></textarea>
              <button type="button" class="button" @click="modifyMedicine(index)">修改药品信息</button>
              <button type="button" class="button" style="background-color: var(--dl-color-danger-700);"
                @click="deleteMedicine(index)">删除药品</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="admin-pharmacy-footer">
      <footer class="admin-pharmacy-footer1 footerContainer">
        <div class="admin-pharmacy-container10"><router-link to="/menu"
            class="admin-pharmacy-logo2 logo">PETCLINICMOCK</router-link></div>
        <div class="admin-pharmacy-separator"></div>
        <div class="admin-pharmacy-container11"><span class="bodySmall admin-pharmacy-text21">© 2024 SWD-G02, All Rights
            Reserved.</span></div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminPharmacy',
  props: {},
  data() {
    return {
      name: localStorage.getItem('username'),
      newMed: {
        medicineName: '',
        medicineIntro: '',
      },
      medicines: [],
      authToken: localStorage.getItem('Token'),
    }
  },
  methods: {
    notify(str) {
      this.$message(str)
    },
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    goBack() {
      this.$router.go(-1);
    },
    fetchMedicines() {
      // Fetch medicine list
      axios.get(`/medicine/list`, {
        headers: {
          'Authorization': `Bearer ${this.authToken}`
        }
      })
        .then(async response => {
          if (response.data.status === 0) {
            this.medicines = response.data.medicines;
            // Check if medicine is not empty
            if (this.medicines && this.medicines.length > 0) {
              // Fetch details for each medicine
              const medicinePromises = this.medicines.map(medicineItem => {
                return axios.get(`/medicine/detail?medicineID=${medicineItem.medicineID}`, {
                  headers: {
                    'Authorization': `Bearer ${this.authToken}`
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

              const medicineDetails = await Promise.all(medicinePromises);
              this.medicines = medicineDetails;
            }
          }
        })
        .catch(error => {
          console.error(error);
          this.$message.warning(error.message);
        });
    },
    async addMedicine() {
      axios.post('admin/medicine', this.newMed)
        .then(response => {
          const data = response.data;
          if (data.status === 0) {
            this.notify('修改成功')
            //console.log(data.message);
            this.fetchMedicines();
          } else {
            this.$message.warning(data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          this.$message.warning(error.message || 'An error occurred while adding the medicine.');
        });
    },
    async modifyMedicine(index) {
      axios.put(`admin/medicine?medicineID=${this.medicines[index].medicineID}`, this.medicines[index])
        .then(response => {
          const data = response.data;
          if (data.status === 0) {
            this.notify('修改成功')
            //console.log(data.message);
            this.fetchMedicines();
          } else {
            this.$message.warning(data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          this.$message.warning(error.message || 'An error occurred while modifying the medicine.');
        });
    },
    async deleteMedicine(index) {
      axios.delete(`admin/medicine?medicineID=${this.medicines[index].medicineID}`)
        .then(response => {
          const data = response.data;
          if (data.status === 0) {
            this.notify('修改成功')
            //console.log(data.message);
            this.fetchMedicines();
          } else {
            this.$message.warning(data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          this.$message.warning(error.message || 'An error occurred while deleting the medicine.');
        });
    },
  },
  created() {
    const authToken = localStorage.getItem('Token');
    this.fetchMedicines();
  },
  metaInfo: {
    title: 'AdminPharmacy - PetClinicMock',
    meta: [
      {
        property: 'og:title',
        content: 'AdminPharmacy - PetClinicMock',
      },
    ],
  },
}
</script>

<style scoped>
.admin-pharmacy-navlink1 {
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

.admin-pharmacy-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.admin-pharmacy-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.admin-pharmacy-logo {
  text-decoration: none;
}

.admin-pharmacy-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.admin-pharmacy-text02 {
  color: var(--dl-color-custom-primary1);
  font-weight: 700;
}

.admin-pharmacy-burger-menu {
  display: none;
}

.admin-pharmacy-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-pharmacy-mobile-menu1 {
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

.admin-pharmacy-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-pharmacy-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.admin-pharmacy-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-pharmacy-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.admin-pharmacy-links {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.admin-pharmacy-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-pharmacy-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-pharmacy-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-pharmacy-nav42 {
  margin-bottom: var(--dl-space-space-unit);
}

.admin-pharmacy-buttons {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.admin-pharmacy-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-pharmacy-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.admin-pharmacy-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.admin-pharmacy-container01 {
  width: 200px;
  height: 92px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.admin-pharmacy-container02 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-pharmacy-hero-heading {
  font-size: 48px;
  max-width: 800px;
  text-align: center;
  font-family: "STIX Two Text";
  line-height: 150%;
}

.admin-pharmacy-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.admin-pharmacy-container03 {
  width: 100%;
  height: 138px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}

.admin-pharmacy-navlink {
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

.admin-pharmacy-hero1 {
  padding-top: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}

.admin-pharmacy-container04 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-pharmacy-container05 {
  flex: 0 0 auto;
  width: 933px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.admin-pharmacy-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}

.admin-pharmacy-container07 {
  flex: 0 0 auto;
  width: 983px;
  height: 100%;
  display: flex;
  align-items: flex;
  justify-content: flex;
}

.admin-pharmacy-ul {
  flex: 1;
  width: auto;
  position: relative;
  align-items: flex;
  margin-right: 639px;
  flex-direction: column;
}

.admin-pharmacy-li {
  color: var(--dl-color-gray-white);
  width: 899px;
  text-align: left;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
}

.admin-pharmacy-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-pharmacy-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
}

.admin-pharmacy-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-pharmacy-footer1 {
  height: 246;
}

.admin-pharmacy-container10 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.admin-pharmacy-logo2 {
  text-decoration: none;
}

.admin-pharmacy-separator {
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

.admin-pharmacy-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

@media(max-width: 991px) {
  .admin-pharmacy-hero {
    flex-direction: column;
  }

  .admin-pharmacy-container02 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .admin-pharmacy-hero-heading {
    text-align: center;
  }

  .admin-pharmacy-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .admin-pharmacy-hero1 {
    flex-direction: column;
  }
}

@media(max-width: 767px) {
  .admin-pharmacy-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-pharmacy-desktop-menu {
    display: none;
  }

  .admin-pharmacy-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .admin-pharmacy-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-pharmacy-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-pharmacy-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-pharmacy-nav42 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-pharmacy-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-pharmacy-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .admin-pharmacy-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-pharmacy-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .admin-pharmacy-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-pharmacy-container11 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-pharmacy-text21 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media(max-width: 479px) {
  .admin-pharmacy-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .admin-pharmacy-mobile-menu1 {
    padding: 16px;
  }

  .admin-pharmacy-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-pharmacy-container02 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .admin-pharmacy-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .admin-pharmacy-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .admin-pharmacy-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .admin-pharmacy-container11 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .admin-pharmacy-text21 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>