const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
describe('caseStudyTag1', function () {
    this.timeout(30000)
    let vars
    let driver
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('caseStudy', async function () {

        await driver.get("http://localhost:8080/menu")
        await driver.executeScript("localStorage.setItem('Token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIxMjE1NTcsImV4cCI6MTc0MzY1NzU1N30.8qCcZTS0y9lH7xc6a5jJSkqF7grBoS7d97SY4sG7bmI');")
        await driver.executeScript("localStorage.setItem('userName', 'AdminUser');")
        await driver.executeScript("localStorage.setItem('userID', 21);")
        await driver.manage().window().setRect({ width: 1536, height: 835 })
        await driver.findElement(By.linkText("Case Study")).click()
        await driver.wait(until.elementLocated(By.linkText("烈性传染病")), 5000) // 等待元素出现，最多等待5000毫秒
        await driver.findElement(By.linkText("烈性传染病")).click()
        await driver.executeScript("window.scrollTo(0,200)")
        await driver.findElement(By.css(".case-study-list-li")).click()
        await driver.findElement(By.css(".case-study-list-li")).click()
        await driver.findElement(By.linkText("烈性传染病")).click()
    })
})
describe('caseStuduTag2', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('caseStudu2', async function () {

        await driver.get("http://localhost:8080/menu")
        await driver.executeScript("localStorage.setItem('Token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIxMjE1NTcsImV4cCI6MTc0MzY1NzU1N30.8qCcZTS0y9lH7xc6a5jJSkqF7grBoS7d97SY4sG7bmI');")
        await driver.executeScript("localStorage.setItem('userName', 'AdminUser');")
        await driver.executeScript("localStorage.setItem('userID', 21);")
        await driver.manage().window().setRect({ width: 1536, height: 835 })
        await driver.findElement(By.css(".menu-navlink2 > .heading3 > span")).click()
        await driver.wait(until.elementLocated(By.linkText("传染病")), 5000)
        await driver.findElement(By.linkText("传染病")).click()
        await driver.executeScript("window.scrollTo(0,389.6000061035156)")
        await driver.findElement(By.linkText("狂犬病11")).click()
    })
})

