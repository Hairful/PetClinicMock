const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('rolePlayingTag1', function () {
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
    it('rolePlaying', async function () {
        await driver.get("http://localhost:8080/menu")
        await driver.executeScript("localStorage.setItem('Token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIxMjE1NTcsImV4cCI6MTc0MzY1NzU1N30.8qCcZTS0y9lH7xc6a5jJSkqF7grBoS7d97SY4sG7bmI');")
        await driver.executeScript("localStorage.setItem('userName', 'AdminUser');")
        await driver.executeScript("localStorage.setItem('userID', 21);")
        await driver.manage().window().setRect({ width: 1552, height: 849 })
        await driver.findElement(By.linkText("Role Play")).click()
        await driver.findElement(By.linkText("Medical Assistant")).click()
        await driver.executeScript("window.scrollTo(0,300)")
        await driver.findElement(By.linkText("fffr")).click()
    })
})



describe('rolePlayingTag2', function () {
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
    it('rolePlaying2', async function () {
        await driver.get("http://localhost:8080/menu")
        await driver.executeScript("localStorage.setItem('Token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIxMjE1NTcsImV4cCI6MTc0MzY1NzU1N30.8qCcZTS0y9lH7xc6a5jJSkqF7grBoS7d97SY4sG7bmI');")
        await driver.executeScript("localStorage.setItem('userName', 'AdminUser');")
        await driver.executeScript("localStorage.setItem('userID', 21);")
        await driver.manage().window().setRect({ width: 1552, height: 849 })
        await driver.findElement(By.linkText("Role Play")).click()
        await driver.findElement(By.linkText("Doctor")).click()
        await driver.findElement(By.css(".role-play-list-hero-heading1")).click()
    })
})

