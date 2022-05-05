const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require("path");
const currentPathForDriver=path.join(__dirname, '/chromedriver/chromedriver.exe');
const service = new chrome.ServiceBuilder(currentPathForDriver);
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

(async function openChromeTest() {
    try {
      await driver.get('http://localhost:3000/sample_foreign_webpage.html');
      //await driver.quit();
    } catch (error) {
      console.log(error)
    }
  })();