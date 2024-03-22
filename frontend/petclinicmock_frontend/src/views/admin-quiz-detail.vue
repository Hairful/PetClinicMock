<template>
  <div class="admin-quiz-detail-container">
    <div class="admin-quiz-detail-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer admin-quiz-detail-navbar-interactive"
      >
        <router-link to="/" class="admin-quiz-detail-logo logo">
          PETCLINICMock
        </router-link>
        <div class="admin-quiz-detail-container01">
          <div data-thq="thq-navbar-nav" class="admin-quiz-detail-desktop-menu">
            <span>
              <span>
                Logged in as
                <span v-html="raw0vgu"></span>
              </span>
              <span class="admin-quiz-detail-text02">Allen</span>
            </span>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="admin-quiz-detail-burger-menu">
          <svg viewBox="0 0 1024 1024" class="admin-quiz-detail-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="admin-quiz-detail-mobile-menu1 mobileMenu"
        >
          <div class="admin-quiz-detail-nav">
            <div class="admin-quiz-detail-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="admin-quiz-detail-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  class="admin-quiz-detail-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="admin-quiz-detail-links">
              <span class="admin-quiz-detail-nav12 bodySmall">Home</span>
              <span class="admin-quiz-detail-nav22 bodySmall">Services</span>
              <span class="admin-quiz-detail-nav32 bodySmall">Our Team</span>
              <span class="admin-quiz-detail-nav42 bodySmall">Contact</span>
            </nav>
            <div class="admin-quiz-detail-buttons">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="admin-quiz-detail-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="admin-quiz-detail-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="admin-quiz-detail-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="admin-quiz-detail-container02"></div>
    <div class="admin-quiz-detail-hero heroContainer">
      <div class="admin-quiz-detail-container03">
        <h1 class="admin-quiz-detail-hero-heading">
          <span class="heading1">
            Manage Quiz:
            <span v-html="raw2umb"></span>
          </span>
          <span class="admin-quiz-detail-text04">Quiz 1</span>
        </h1>
        <span class="admin-quiz-detail-hero-sub-heading bodyLarge">
          <span>
            <span>
              <span>Caring for your furry friends</span>
              <span><span v-html="rawtn2b"></span></span>
            </span>
            <span>
              <span><span v-html="rawq5g5"></span></span>
              <span><span v-html="rawnmbx"></span></span>
            </span>
          </span>
          <span>
            <span>
              <span><span v-html="rawnlsb"></span></span>
              <span><span v-html="rawu7w0"></span></span>
            </span>
            <span>
              <span><span v-html="rawh40r"></span></span>
              <span><span v-html="rawonyf"></span></span>
            </span>
          </span>
        </span>
      </div>
    </div>
    <div class="admin-quiz-detail-container04">
      <router-link to="/admin-quiz-list" class="admin-quiz-detail-navlink button">
        Choose Quiz
      </router-link>
      <router-link to="/admin-menu" class="admin-quiz-detail-navlink1 button">
        <span>
          <span>
            Admin
            <span v-html="raw370h"></span>
          </span>
          <span>Menu</span>
        </span>
      </router-link>
    </div>
    <div class="admin-quiz-detail-hero1 heroContainer">
      <div class="admin-quiz-detail-container05">
        <h1 class="admin-quiz-detail-hero-heading1 heading1">
          <span class="heading1">Question 1</span>
          <br />
        </h1>
        <button type="button" class="admin-quiz-detail-button button">
          Delete
        </button>
        <div class="admin-quiz-detail-container06">
          <textarea
            placeholder="placeholder"
            class="admin-quiz-detail-textarea textarea"
          ></textarea>
          <button type="button" class="button">Modify</button>
          <div class="admin-quiz-detail-container07">
            <button type="button" class="admin-quiz-detail-button02 button">
              <span>
                <span>Upload Picture</span>
                <br />
              </span>
            </button>
            <div class="admin-quiz-detail-container08">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                class="admin-quiz-detail-image"
              />
              <button type="button" class="button">
                <span>
                  <span>Delete</span>
                  <br />
                </span>
              </button>
            </div>
            <div class="admin-quiz-detail-container09">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                class="admin-quiz-detail-image1"
              />
              <button type="button" class="button">
                <span>
                  <span>Delete</span>
                  <br />
                </span>
              </button>
            </div>
          </div>
          <div class="admin-quiz-detail-container10">
            <span class="admin-quiz-detail-text33 bodyLarge">
              Correcrt Answer: 
            </span>
            <select class="admin-quiz-detail-select">
              <option value="Option 1">A</option>
              <option value="Option 2">B</option>
              <option value="Option 3">C</option>
              <option>D</option>
            </select>
          </div>
          <div class="admin-quiz-detail-container11">
            <span class="admin-quiz-detail-text34 bodyLarge">Points: </span>
            <input type="text" placeholder="placeholder" class="input" />
          </div>
        </div>
      </div>
      <div class="admin-quiz-detail-container12">
        <h1 class="admin-quiz-detail-hero-heading2 heading1">
          <span class="heading1">Question 2</span>
          <br />
        </h1>
        <button type="button" class="admin-quiz-detail-button05 button">
          Delete
        </button>
        <div class="admin-quiz-detail-container13">
          <textarea
            placeholder="placeholder"
            class="admin-quiz-detail-textarea1 textarea"
          ></textarea>
          <button type="button" class="button">Modify</button>
          <div class="admin-quiz-detail-container14">
            <button type="button" class="admin-quiz-detail-button07 button">
              <span>
                <span>Upload Picture</span>
                <br />
              </span>
            </button>
            <div class="admin-quiz-detail-container15">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                class="admin-quiz-detail-image2"
              />
              <button type="button" class="button">
                <span>
                  <span>Delete</span>
                  <br />
                </span>
              </button>
            </div>
            <div class="admin-quiz-detail-container16">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                class="admin-quiz-detail-image3"
              />
              <button type="button" class="button">
                <span>
                  <span>Delete</span>
                  <br />
                </span>
              </button>
            </div>
          </div>
          <div class="admin-quiz-detail-container17">
            <span class="admin-quiz-detail-text46 bodyLarge">
              Correcrt Answer: 
            </span>
            <select class="admin-quiz-detail-select1">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">A</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">B</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">C</option>
              <option>D</option>
            </select>
          </div>
          <div class="admin-quiz-detail-container18">
            <span class="admin-quiz-detail-text47 bodyLarge">Points: </span>
            <input type="text" placeholder="placeholder" class="input" />
          </div>
        </div>
      </div>
      <div class="admin-quiz-detail-container19">
        <h1 class="admin-quiz-detail-hero-heading3 heading1">
          <span class="heading1">Add Question</span>
          <br />
        </h1>
        <div class="admin-quiz-detail-container20">
          <textarea
            placeholder="placeholder"
            class="admin-quiz-detail-textarea2 textarea"
          ></textarea>
          <button type="button" class="button">Modify</button>
          <div class="admin-quiz-detail-container21">
            <button type="button" class="admin-quiz-detail-button11 button">
              <span>
                <span>Upload Picture</span>
                <br />
              </span>
            </button>
            <div class="admin-quiz-detail-container22">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                class="admin-quiz-detail-image4"
              />
              <button type="button" class="button">
                <span>
                  <span>Delete</span>
                  <br />
                </span>
              </button>
            </div>
            <div class="admin-quiz-detail-container23">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                class="admin-quiz-detail-image5"
              />
              <button type="button" class="button">
                <span>
                  <span>Delete</span>
                  <br />
                </span>
              </button>
            </div>
          </div>
          <div class="admin-quiz-detail-container24">
            <span class="admin-quiz-detail-text59 bodyLarge">
              Correcrt Answer: 
            </span>
            <select class="admin-quiz-detail-select2">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">A</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">B</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">C</option>
              <option value="Option 3">Option 3</option>
              <option>D</option>
            </select>
          </div>
          <div class="admin-quiz-detail-container25">
            <span class="admin-quiz-detail-text60 bodyLarge">Points: </span>
            <input type="text" placeholder="placeholder" class="input" />
          </div>
          <button type="button" class="admin-quiz-detail-button14 button">
            Add
          </button>
        </div>
      </div>
    </div>
    <div class="admin-quiz-detail-container26">
      <router-link
        to="/admin-quiz-list"
        class="admin-quiz-detail-navlink2 button"
      >
        Save
      </router-link>
    </div>
    <div class="admin-quiz-detail-footer">
      <footer class="admin-quiz-detail-footer1 footerContainer">
        <div class="admin-quiz-detail-container27">
          <router-link to="/" class="admin-quiz-detail-logo2 logo">
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
export default {
  name: 'AdminQuizDetail',
  props: {},
  data() {
    return {
      raw0vgu: ' ',
      raw2umb: ' ',
      rawtn2b: ' ',
      rawq5g5: ' ',
      rawnmbx: ' ',
      rawnlsb: ' ',
      rawu7w0: ' ',
      rawh40r: ' ',
      rawonyf: ' ',
      raw370h: ' ',
    }
  },
  metaInfo: {
    title: 'AdminQuizDetail - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'AdminQuizDetail - Roasted Rusty Swallow',
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
  border: 2px dashed rgba(120, 120, 120, 0.4);
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
