const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('adminTest', function () {
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
    it('adminTest', async function () {
        await driver.get("http://localhost:8080/admin-menu")
        await driver.executeScript("localStorage.setItem('Token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIxMjE1NTcsImV4cCI6MTc0MzY1NzU1N30.8qCcZTS0y9lH7xc6a5jJSkqF7grBoS7d97SY4sG7bmI');")
        await driver.executeScript("localStorage.setItem('userName', 'AdminUser');")
        await driver.executeScript("localStorage.setItem('userID', 21);")
        await driver.manage().window().setRect({ width: 1552, height: 849 })
        await driver.findElement(By.linkText("用户")).click()
        await driver.findElement(By.css(".admin-user-navlink span:nth-child(2)")).click()
        await driver.findElement(By.css(".admin-menu-container5:nth-child(2) .heading3 > span")).click()
        await driver.findElement(By.css(".admin-case-study-list-container05 > .input")).click()
        await driver.findElement(By.css(".admin-case-study-list-container05 > .input")).sendKeys("123")
        await driver.findElement(By.css(".admin-case-study-list-container06:nth-child(2) > .input")).click()
        await driver.findElement(By.css(".admin-case-study-list-container06:nth-child(2) > .input")).sendKeys("123")
        await driver.findElement(By.css(".admin-case-study-list-container06:nth-child(3) > .input")).click()
        await driver.findElement(By.css(".admin-case-study-list-container06:nth-child(3) > .input")).sendKeys("123")
        await driver.findElement(By.css(".admin-case-study-list-button")).click()
        await driver.findElement(By.css(".case-study-menu-navlink1:nth-child(1) > .heading3")).click()
        {
            const element = await driver.findElement(By.css(".case-study-menu-navlink1:nth-child(1) > .heading3"))
            await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
        {
            const element = await driver.findElement(By.CSS_SELECTOR, "body")
            await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
        }
        await driver.findElement(By.css(".admin-case-study-list-container11 > .input")).click()
        await driver.findElement(By.css(".admin-case-study-list-container11 > .input")).sendKeys("1")
        await driver.findElement(By.css(".admin-case-study-list-text22")).click()
        await driver.findElement(By.css(".admin-case-study-list-container12 > .input")).click()
        await driver.findElement(By.css(".admin-case-study-list-container12 > .input")).sendKeys("2")
        await driver.findElement(By.linkText("Manage Cases")).click()
        {
            const element = await driver.findElement(By.linkText("Manage Cases"))
            await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
        await driver.findElement(By.css(".admin-case-study-detail-textarea")).click()
        await driver.findElement(By.css(".admin-case-study-detail-textarea")).sendKeys("1")
        await driver.findElement(By.css(".admin-case-study-detail-button")).click()
        await driver.findElement(By.css(".admin-case-study-detail-container05:nth-child(2) > .admin-case-study-detail-container10:nth-child(2) .admin-case-study-detail-textarea5")).click()
        await driver.findElement(By.css(".admin-case-study-detail-container05:nth-child(2) > .admin-case-study-detail-container10:nth-child(2) .admin-case-study-detail-textarea5")).sendKeys("2")
        await driver.findElement(By.css(".admin-case-study-detail-container05:nth-child(2) > .admin-case-study-detail-container10:nth-child(2) .admin-case-study-detail-button40")).click()
        await driver.findElement(By.css(".admin-case-study-detail-container05:nth-child(2) > .admin-case-study-detail-container10:nth-child(2) > .admin-case-study-detail-text142:nth-child(3) > .admin-case-study-detail-button41 > span")).click()
        await driver.findElement(By.css(".admin-case-study-detail-container05:nth-child(2) > .admin-case-study-detail-container10:nth-child(2) .admin-case-study-detail-container11 span")).click()
        await driver.findElement(By.css(".admin-case-study-detail-container05:nth-child(2) > .admin-case-study-detail-container10:nth-child(2) > .admin-case-study-detail-text142:nth-child(4) > .admin-case-study-detail-button41 > span")).click()
        await driver.findElement(By.css(".admin-case-study-detail-container05:nth-child(2) > .admin-case-study-detail-container10:nth-child(2) .admin-case-study-detail-container12 span")).click()
        await driver.findElement(By.linkText("角色扮演")).click()
        await driver.findElement(By.linkText("Medical Assistant")).click()
        await driver.executeScript("window.scrollTo(0,400)")
        await driver.findElement(By.css(".admin-role-play-list-container05 > .input:nth-child(1)")).click()
        await driver.findElement(By.css(".admin-role-play-list-container05 > .input:nth-child(1)")).sendKeys("1")
        await driver.findElement(By.css(".input:nth-child(2)")).click()
        await driver.findElement(By.css(".input:nth-child(2)")).sendKeys("2")
        await driver.findElement(By.css(".admin-role-play-list-container05 span > span")).click()
        await driver.findElement(By.css(".admin-role-play-list-li:nth-child(1) .admin-role-play-list-container08:nth-child(1) span > span")).click()
        await driver.findElement(By.css(".admin-role-play-list-li:nth-child(1) .admin-role-play-list-container08:nth-child(1) > .input")).click()
        await driver.findElement(By.css(".admin-role-play-list-li:nth-child(1)")).click()
        await driver.findElement(By.css(".admin-role-play-list-li:nth-child(1) .admin-role-play-list-container08:nth-child(1) > .input")).sendKeys("1")
        await driver.findElement(By.css(".admin-role-play-list-li:nth-child(1) .admin-role-play-list-container08:nth-child(1) span > span")).click()
        await driver.findElement(By.css(".admin-role-play-list-hero1")).click()
        await driver.findElement(By.css(".admin-role-play-list-li:nth-child(1) .admin-role-play-list-container08:nth-child(2) > .input")).sendKeys("2")
        await driver.findElement(By.css(".admin-role-play-list-li:nth-child(1) .admin-role-play-list-container08:nth-child(2) span > span")).click()
        await driver.findElement(By.css(".admin-role-play-list-li:nth-child(1) .admin-role-play-list-button2 > span > span")).click()
        await driver.findElement(By.linkText("3D虚拟导览")).click()
        await driver.findElement(By.css(".admin-virtual-tour-textarea")).click()
        await driver.findElement(By.css(".admin-virtual-tour-textarea")).sendKeys("1")
        await driver.findElement(By.css(".admin-virtual-tour-container06 > .button")).click()
        await driver.findElement(By.css(".admin-virtual-tour-container09 > .textarea")).click()
        await driver.findElement(By.css(".admin-virtual-tour-container09 > .textarea")).sendKeys("2")
        await driver.findElement(By.css(".admin-virtual-tour-container08 > .button")).click()
        await driver.findElement(By.linkText("测试")).click()
        await driver.findElement(By.css(".admin-quiz-list-container05 > .input")).click()
        await driver.findElement(By.css(".admin-quiz-list-container05 > .input")).sendKeys("1")
        await driver.findElement(By.css(".admin-quiz-list-container05 > .button")).click()
        await driver.findElement(By.css(".admin-quiz-list-container06:nth-child(3) .input")).click()
        await driver.findElement(By.css(".admin-quiz-list-container06:nth-child(3) .input")).sendKeys("23")
        await driver.findElement(By.css(".admin-quiz-list-container06:nth-child(3) .admin-quiz-list-container08 > .button")).click()
        await driver.findElement(By.linkText("Manage Questions")).click()
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(1) .admin-quiz-detail-select")).click()
        {
            const dropdown = await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(1) .admin-quiz-detail-select"))
            await dropdown.findElement(By.xpath("//option[. = 'C']")).click()
        }
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(1) .input")).click()
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(1) .input")).sendKeys("5")
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(1) #dropzone .button")).click()
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(2) .admin-quiz-detail-select")).click()
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(2) .input")).click()
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(2) .input")).sendKeys("u")
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(2) > .admin-quiz-detail-container06")).click()
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(3) .input")).click()
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(3) .input")).sendKeys("17")
        await driver.findElement(By.css(".admin-quiz-detail-container05:nth-child(3) > .admin-quiz-detail-container06 > .button")).click()
        await driver.findElement(By.css(".admin-quiz-detail-navlink2")).click()
        await driver.findElement(By.css(".admin-quiz-detail-button14")).click()
        {
            const element = await driver.findElement(By.css(".admin-quiz-detail-button14"))
            await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
        {
            const element = await driver.findElement(By.CSS_SELECTOR, "body")
            await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
        }
    })
})
