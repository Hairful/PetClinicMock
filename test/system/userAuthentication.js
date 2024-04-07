
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('userAuthLogin', function () {
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
    it('userAuthLogin', async function () {
        await driver.get("http://localhost:8080/login")
        await driver.manage().window().setRect({ width: 1936, height: 1048 })
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).click()
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).sendKeys("Test45654")
        await driver.findElement(By.css(".el-input--suffix > .el-input__inner")).click()
        await driver.findElement(By.css(".el-input--suffix > .el-input__inner")).sendKeys("123456")
        await driver.findElement(By.css(".login-validcode > .el-input__inner")).click()
        await driver.findElement(By.css(".login-validcode > .el-input__inner")).sendKeys("be9p")
        await driver.findElement(By.css(".el-button")).click()
    })
})


describe('userAuthRegisterFormatError', function () {
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
    it('userAuthRegisterFormatError', async function () {
        await driver.get("http://localhost:8080/register")
        await driver.manage().window().setRect({ width: 1936, height: 1048 })
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).click()
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).sendKeys("1")
        await driver.findElement(By.css(".is-required .el-input--suffix > .el-input__inner")).click()
        await driver.findElement(By.css(".is-required .el-input--suffix > .el-input__inner")).sendKeys("12")
        await driver.findElement(By.css(".el-form-item:nth-child(3) .el-input__inner")).click()
        await driver.findElement(By.css(".el-form-item:nth-child(3) .el-input__inner")).sendKeys("12")
        await driver.findElement(By.css(".register-validcode > .el-input__inner")).click()
        await driver.findElement(By.css(".register-validcode > .el-input__inner")).sendKeys("7bbi")
        await driver.findElement(By.css(".el-button > span")).click()
    })
})

describe('userAuthRegister', function () {
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
    it('userAuthRegister', async function () {
        await driver.get("http://localhost:8080/register")
        await driver.manage().window().setRect({ width: 1936, height: 1048 })
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).click()
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).sendKeys("Test10086")
        await driver.findElement(By.css(".is-required .el-input--suffix > .el-input__inner")).click()
        await driver.findElement(By.css(".is-required .el-input--suffix > .el-input__inner")).sendKeys("123456")
        await driver.findElement(By.css(".el-form-item:nth-child(3) .el-input__inner")).click()
        await driver.findElement(By.css(".el-form-item:nth-child(3) .el-input__inner")).sendKeys("123456")
        await driver.findElement(By.css(".register-validcode > .el-input__inner")).click()
        await driver.findElement(By.css(".register-validcode > .el-input__inner")).sendKeys("36we")
        await driver.findElement(By.css(".el-button")).click()
    })
})

describe('userAuthRegisterLogin', function () {
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
    it('userAuthRegisterLogin', async function () {
        await driver.get("http://localhost:8080")
        await driver.findElement(By.linkText("Register")).click()
        {
            const element = await driver.findElement(By.linkText("Register"))
            await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).click()
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).sendKeys("Test45654")
        await driver.findElement(By.css(".is-required .el-input--suffix > .el-input__inner")).click()
        await driver.findElement(By.css(".is-required .el-input--suffix > .el-input__inner")).sendKeys("123456")
        await driver.findElement(By.css(".el-form-item:nth-child(3) .el-input__inner")).click()
        await driver.findElement(By.css(".el-form-item:nth-child(3) .el-input__inner")).sendKeys("123456")
        await driver.findElement(By.css(".register-validcode > .el-input__inner")).click()
        await driver.findElement(By.css(".register-validcode > .el-input__inner")).sendKeys("e3u0")
        await driver.findElement(By.css(".el-button")).click()
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).click()
        await driver.findElement(By.css(".el-form-item:nth-child(1) .el-input__inner")).sendKeys("Test45654")
        await driver.findElement(By.css(".el-input--suffix > .el-input__inner")).click()
        await driver.findElement(By.css(".el-input--suffix > .el-input__inner")).sendKeys("123456")
        await driver.findElement(By.css(".login-validcode > .el-input__inner")).click()
        await driver.findElement(By.css(".login-validcode > .el-input__inner")).sendKeys("992j")
        await driver.findElement(By.css(".el-button > span")).click()
    })
})
