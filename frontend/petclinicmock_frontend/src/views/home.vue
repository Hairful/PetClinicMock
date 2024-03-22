<template>
  <div class="home-container">
    <div class="home-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer home-navbar-interactive"
      >
        <span class="logo">PETCLINICMOCK</span>
        <!-- 桌面端顶端导航栏 -->
        <div data-thq="thq-navbar-nav" class="home-desktop-menu">
          <nav class="home-links">
            <RouterLink :to="{path:'/'}">
                <button class="buttonFlat">Home</button>
            </RouterLink>
              <button class="buttonFlat">Services</button>
              <button class="buttonFlat">Our Team</button>
              <button class="buttonFlat">Contact</button>
          </nav>
          <div class="home-buttons">
            <RouterLink :to="{path:'/login'}">
            <button class="home-login buttonFilled" >Login</button>
            </RouterLink>
            <RouterLink to="/register">
              <button class="buttonFilled">Register</button>
            </RouterLink>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="home-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <!-- 移动端顶端导航栏 -->
        <div data-thq="thq-mobile-menu" class="home-mobile-menu1 mobileMenu">
          <div class="home-nav">
            <div class="home-top">
              <span class="logo">PETSCLINIC</span>
              <div data-thq="thq-close-menu" class="home-close-menu">
                <svg viewBox="0 0 1024 1024" class="home-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="home-links1">
              <RouterLink :to="{path:'/'}">
                <button class="buttonFlat">Home</button>
              </RouterLink>
              <button class="buttonFlat">Services</button>
              <button class="buttonFlat">Our Team</button>
              <button class="buttonFlat">Contact</button>
            </nav>
            
            <div class="home-buttons1">
                <RouterLink :to="{path:'/login'}">
                  <button class="buttonFilled">Login</button>
                </RouterLink> 
              <RouterLink :to="{path:'/register'}">
                <button class="buttonFilled">Register</button>
              </RouterLink>
            </div>

          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="home-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="home-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="home-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="home-hero">
      <div class="heroContainer home-hero1">
        <div class="home-container1">
            <h1 class="home-hero-heading heading1"
            >
              Introducing the Next Generation of  Clinic Training
            </h1>
          <span class="home-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>Caring for your furry friends</span>
                <span><span v-html="rawwxan"></span></span>
              </span>
              <span>
                <span><span v-html="rawyc28"></span></span>
                <span><span v-html="rawtbmz"></span></span>
              </span>
            </span>
            <span>
              <span>
                <span><span v-html="rawahmw"></span></span>
                <span><span v-html="raw5701"></span></span>
              </span>
              <span>
                <span><span v-html="rawl7zs"></span></span>
                <span><span v-html="rawxeul"></span></span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
    <div class="home-features">
      <div class="featuresContainer">
        <div class="home-features1">
          <div class="home-container2">
            <span class="overline">
              <span>features</span>
              <br />
            </span>
            <h2 class="home-features-heading heading2">
              Why Choose Our Platform?
            </h2>
            <span class="home-features-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Discover the features that set our pet clinic apart and make
                    us the best choice for your pet&apos;s health.
                  </span>
                  <span><span v-html="raw9ac5"></span></span>
                </span>
                <span>
                  <span><span v-html="raw6ie3"></span></span>
                  <span><span v-html="rawqf4l"></span></span>
                </span>
              </span>
              <span>
                <span>
                  <span><span v-html="rawtrzm"></span></span>
                  <span><span v-html="raw7qi9"></span></span>
                </span>
                <span>
                  <span><span v-html="rawdlkx"></span></span>
                  <span><span v-html="raw6yeh"></span></span>
                </span>
              </span>
            </span>
          </div>
          <div class="home-container3">
            <feature-card
              heading="Experienced Veterinarians"
              subHeading="Our team of skilled and compassionate veterinarians are dedicated to providing the best care for your pets."
            ></feature-card>
            <feature-card
              heading="State-of-the-Art Facilities"
              subHeading="We have modern facilities equipped with the latest technology to ensure the well-being of your furry friends."
            ></feature-card>
            <feature-card
              heading="Comprehensive Pet Care Services"
              subHeading="From routine check-ups to emergency care, we offer a wide range of services to meet all your pet's healthcare needs."
            ></feature-card>
            <feature-card
              heading="Personalized Treatment Plans"
              subHeading="We understand that every pet is unique, which is why we tailor treatment plans to suit your pet's individual needs."
            ></feature-card>
          </div>
        </div>
      </div>
    </div>
    <div class="home-faq">
      <div class="faqContainer">
        <div class="home-faq1">
          <div class="home-container4">
            <span class="overline">
              <span>FAQ</span>
              <br />
            </span>
            <h2 class="home-text34 heading2">Common questions</h2>
            <span class="home-text35 bodyLarge">
              <span>Here are some of the most common questions that we get.</span>
              <br />
            </span>
          </div>
          <div class="home-container5">
            <app-question1
              answer="Our pet clinic offers a wide range of services including vaccinations, spaying/neutering, dental care, and more."
              question="What services does the pet clinic offer?"
            ></app-question1>
            <app-question1
              answer="You can easily make an appointment by calling our clinic or using our online booking system on our website."
              question="How can I make an appointment for my pet?"
            ></app-question1>
            <app-question1
              answer="While we recommend making an appointment to ensure timely care for your pet, we do accept walk-ins based on availability."
              question="Are walk-ins accepted at the pet clinic?"
            ></app-question1>
            <app-question1
              answer="Our pet clinic is open from Monday to Friday, 9:00 AM to 6:00 PM, and on Saturdays from 10:00 AM to 4:00 PM."
              question="What are the operating hours of the pet clinic?"
            ></app-question1>
            <app-question1
              answer="Yes, we provide emergency services for pets during our regular business hours. For after-hours emergencies, we recommend contacting the nearest emergency veterinary clinic."
              question="Do you offer emergency services for pets?"
            ></app-question1>
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer">
        <footer
          class="home-footer1 footerContainer"
        >
          <div class="home-container6">
            <span class="logo">PETCLINICMOCK</span>
            <nav class="home-nav1">
              <span class="bodySmall">Home</span>
              <span class="home-nav322 bodySmall">Our Team</span>
              <span class="home-nav422 bodySmall">Contact</span>
            </nav>
          </div>
          <div class="home-separator"></div>
          <div class="home-container7">
            <span class="bodySmall home-text38">
              © 2024 SWD-G02, All Rights Reserved.
            </span>
          </div>
        </footer>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import FeatureCard from '../components/feature-card'
import AppQuestion1 from '../components/question1'


export default {
  name: 'Home',
  props: {},
  components: {
    FeatureCard,
    AppQuestion1,
  },
  data() {
    return {
      rawwxan: ' ',
      rawyc28: ' ',
      rawtbmz: ' ',
      rawahmw: ' ',
      raw5701: ' ',
      rawl7zs: ' ',
      rawxeul: ' ',
      raw9ac5: ' ',
      raw6ie3: ' ',
      rawqf4l: ' ',
      rawtrzm: ' ',
      raw7qi9: ' ',
      rawdlkx: ' ',
      raw6yeh: ' ',
    }
  },
  metaInfo: {
    title: 'Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.home-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.home-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-nav32 {
  margin-left: var(--dl-space-space-unit);
}
.home-nav42 {
  margin-left: var(--dl-space-space-unit);
}
.home-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-login {
  margin-right: 32px;
}
.home-burger-menu {
  display: none;
}
.home-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-mobile-menu1 {
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
.home-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.home-nav121 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav321 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav421 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.home-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-hero-heading {
  max-width: 800px;
  text-align: center;
}
.home-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.home-features {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features1 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fourunits);
  justify-content: flex-start;
}
.home-container2 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-features-heading {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-features-sub-heading {
  font-size: 18px;
  text-align: center;
}
.home-container3 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-oneandhalfunits);
  grid-template-columns: 1fr 1fr;
}
.home-faq {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-faq1 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-fourunits);
}
.home-container4 {
  display: flex;
  max-width: 35%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text34 {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-text35 {
  text-align: left;
}
.home-container5 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-footer1 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.home-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.home-nav322 {
  margin-left: var(--dl-space-space-unit);
}
.home-nav422 {
  margin-left: var(--dl-space-space-unit);
}
.home-separator {
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
.home-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .home-hero1 {
    flex-direction: column;
  }
  .home-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .home-hero-heading {
    text-align: center;
  }
  .home-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .home-features-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .home-text35 {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .home-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-desktop-menu {
    display: none;
  }
  .home-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-nav121 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav321 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav421 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-features1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-features-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-container3 {
    grid-template-columns: 1fr;
  }
  .home-faq1 {
    flex-direction: column;
  }
  .home-container4 {
    max-width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .home-text35 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-text38 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .home-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .home-mobile-menu1 {
    padding: 16px;
  }
  .home-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-features1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-text38 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
