const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('quizBackMenu', function () {
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
    it('quizBackMenu', async function () {
        await driver.get("http://localhost:8080/quiz-list")
        await driver.executeScript("localStorage.setItem('Token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIxMjE1NTcsImV4cCI6MTc0MzY1NzU1N30.8qCcZTS0y9lH7xc6a5jJSkqF7grBoS7d97SY4sG7bmI');")
        await driver.executeScript("localStorage.setItem('userName', 'AdminUser');")
        await driver.executeScript("localStorage.setItem('userID', 21);")
        await driver.manage().window().setRect({ width: 1936, height: 1048 })
        await driver.findElement(By.linkText("Menu")).click()
        {
            const element = await driver.findElement(By.linkText("Menu"))
            await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
        await driver.findElement(By.linkText("Quiz & Exams")).click()
        await driver.findElement(By.linkText("Quiz 1")).click()
        await driver.executeScript("window.scrollTo(0,0)")
        await driver.findElement(By.linkText("Menu")).click()
        await driver.findElement(By.linkText("Quiz & Exams")).click()
        await driver.findElement(By.linkText("Menu")).click()
        await driver.findElement(By.linkText("Quiz & Exams")).click()
    })
})

describe('quizQuestionJump', function () {
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
    it('quizQuestionJump', async function () {
        await driver.get("http://localhost:8080/quiz-list")
        await driver.executeScript("localStorage.setItem('Token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIxMjE1NTcsImV4cCI6MTc0MzY1NzU1N30.8qCcZTS0y9lH7xc6a5jJSkqF7grBoS7d97SY4sG7bmI');")
        await driver.executeScript("localStorage.setItem('userName', 'AdminUser');")
        await driver.executeScript("localStorage.setItem('userID', 21);")
        await driver.manage().window().setRect({ width: 1936, height: 1048 })
        await driver.findElement(By.linkText("Menu")).click()
        {
            const element = await driver.findElement(By.linkText("Menu"))
            await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
        await driver.findElement(By.linkText("Quiz & Exams")).click()
        await driver.findElement(By.linkText("Quiz 1")).click()
        await driver.executeScript("window.scrollTo(0,0)")
        await driver.findElement(By.css(".quiz-detail-select")).click()
        {
            const dropdown = await driver.findElement(By.css(".quiz-detail-select"))
            await dropdown.findElement(By.xpath("//option[. = 'A']")).click()
        }
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(2)")).click()
        await driver.findElement(By.css(".quiz-detail-select")).click()
        {
            const dropdown = await driver.findElement(By.css(".quiz-detail-select"))
            await dropdown.findElement(By.xpath("//option[. = 'B']")).click()
        }
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(2)")).click()
        await driver.findElement(By.css(".quiz-detail-select")).click()
        {
            const dropdown = await driver.findElement(By.css(".quiz-detail-select"))
            await dropdown.findElement(By.xpath("//option[. = 'D']")).click()
        }
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(2)")).click()
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(1)")).click()
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(1)")).click()
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(2)")).click()
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(2)")).click()
    })
})


describe('quizSubmit', function () {
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
    it('quizSubmit', async function () {
        await driver.get("http://localhost:8080/quiz-list")
        await driver.executeScript("localStorage.setItem('Token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIxMjE1NTcsImV4cCI6MTc0MzY1NzU1N30.8qCcZTS0y9lH7xc6a5jJSkqF7grBoS7d97SY4sG7bmI');")
        await driver.executeScript("localStorage.setItem('userName', 'AdminUser');")
        await driver.executeScript("localStorage.setItem('userID', 21);")
        await driver.findElement(By.linkText("Menu")).click()
        await driver.findElement(By.linkText("Quiz & Exams")).click()
        await driver.findElement(By.linkText("Quiz 1")).click()
        await driver.executeScript("window.scrollTo(0,0)")
        await driver.findElement(By.css(".quiz-detail-select")).click()
        {
            const dropdown = await driver.findElement(By.css(".quiz-detail-select"))
            await dropdown.findElement(By.xpath("//option[. = 'A']")).click()
        }
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(2)")).click()
        await driver.findElement(By.css(".quiz-detail-select")).click()
        {
            const dropdown = await driver.findElement(By.css(".quiz-detail-select"))
            await dropdown.findElement(By.xpath("//option[. = 'D']")).click()
        }
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(2)")).click()
        await driver.findElement(By.css(".quiz-detail-select")).click()
        {
            const dropdown = await driver.findElement(By.css(".quiz-detail-select"))
            await dropdown.findElement(By.xpath("//option[. = 'D']")).click()
        }
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(2)")).click()
        {
            const element = await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(2)"))
            await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
        {
            const element = await driver.findElement(By.CSS_SELECTOR, "body")
            await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
        }
        await driver.findElement(By.css(".quiz-detail-navlink2:nth-child(3)")).click()
    })
})


