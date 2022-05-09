const {Builder,By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require("path");
const environment=require('./.env');
const currentPathForDriver=path.join(__dirname, '/chromedriver/chromedriver.exe');
const service = new chrome.ServiceBuilder(currentPathForDriver);
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();


let url=environment.env.url;
let port=environment.env.port;
let version=environment.env.version;
let passed=0;
let failed=0;
let startTesting=new Date().toUTCString();
let finishTesting="";
let percentagePassed=0;
let testRunned=0;
let uri=url+":"+port+"/";

//Test background image has a resource not found 404 error
async function checkBackgroundImage(params) {
    try {
      await driver.get(uri+params);
      let element = await driver.findElement(By.id('background'));
      let url=await element.getAttribute('src');
      assertTest(url,"https://free-images.com/tn/6d82/missing_image_png.jpg");
    } catch (error) {
      console.log(error);
      failed++;
    }finally{
      testRunned++;
      await driver.quit();
      displayResults();
    }
}

//Test avatar image has a resource not found 404 error
async function checkAvatarImage(params) {
  try {
    await driver.get(uri+params);
    let element = await driver.findElement(By.id('avatar'));
    let url=await element.getAttribute('src');
    assertTest(url,"https://free-images.com/tn/6d82/missing_image_png.jpg");
  } catch (error) {
    console.log(error);
    failed++;
  }finally{
    testRunned++;
    await driver.quit();
    displayResults();
  }
}

//Missing header and body params display an auxiliary text.
async function checkHeaderAndBodyUndefined(params) {
  try {
    await driver.get(uri+params);
    let invalidEntry="Invalid Entry";
    let name = await driver.findElements(By.className('card-name'));
    let profession = await driver.findElements(By.className('card-profession'))
    let services = await driver.findElements(By.className('card-services'))
    let content = await driver.findElements(By.className('card-content'))
    assertTest([await name[0].getText(),await profession[0].getText(),await services[0].getText(),await content[0].getText()].toString(),
    [invalidEntry,invalidEntry,invalidEntry,invalidEntry].toString());
  } catch (error) {
    console.log(error);
    failed++;
  }finally{
    testRunned++;
    await driver.quit();
    displayResults();
  }
}

//Integration
async function multipleFrame(){
  try {
    await driver.get('http://localhost:3000/sample_foreign_webpage.html');
    // switch to the first iframe
    
    let element=await driver.findElement(By.id('C'))
    
    let title = await driver.getTitle();
    assertTest(title,'Card');
  } catch (error) {
    console.log(error);
    failed++;
  }finally{
    testRunned++;
    //await driver.quit();
    displayResults();
  }
}

//utils
function assertTest(entry, expected){
  console.log(entry);
  console.log(expected);
  if(entry===expected){
    passed++;
  }else{
    failed++;
  }
}
//Final results
function displayResults(){
  finishTesting=new Date().toUTCString();
  percentagePassed=(testRunned/passed)*100; 
  let results={
    passed:passed,
    failed:failed,
    version:version,
    startAt:startTesting,
    endAt:finishTesting,
    endpoint:url,
    percentagePassed:percentagePassed,
  };
  console.log(results);
}

//Sending a bad param, in this case background image
//checkBackgroundImage("?profile=https://free-images.com/sm/a312/man_serious_senior_portrait.jpg%20&background=https://fragesdsdsds.com/md/da3b/lake_minnewanka_11092005.jpg%20&content=Senior%20software%20developers%20are%20responsible%20for%20designing,%20testing,%20and%20implementing%20new%20and%20updated%20software%20programs.%20They%20take%20on%20a%20managerial%20role%20and%20lead%20the%20development%20team%20with%20all%20software%20development%20tasks.%20Their%20job%20is%20to%20ensure%20all%20projects%20are%20completed%20on%20time%20and%20to%20company%20specifications.&name=Derek%20J.%20Payton%20&services=Software%20Developer,%20Consoultant,%20Entrepreneur.%20&profession=Software%20Engineer%20Principal%22")

//Sending a bad param, in this case avatar image
//checkAvatarImage("?profile=https://free-is.com/sm/a312/man_serious_senior_portrait.jpg%20&background=https://free-images.com/md/da3b/lake_minnewanka_11092005.jpg%20&content=Senior%20software%20developers%20are%20responsible%20for%20designing,%20testing,%20and%20implementing%20new%20and%20updated%20software%20programs.%20They%20take%20on%20a%20managerial%20role%20and%20lead%20the%20development%20team%20with%20all%20software%20development%20tasks.%20Their%20job%20is%20to%20ensure%20all%20projects%20are%20completed%20on%20time%20and%20to%20company%20specifications.&name=Derek%20J.%20Payton%20&services=Software%20Developer,%20Consoultant,%20Entrepreneur.%20&profession=Software%20Engineer%20Principal%22");

//No params of name, profession, content and services
//checkHeaderAndBodyUndefined("?profile=https://free-images.com/sm/a312/man_serious_senior_portrait.jpg%20&background=https://fragesdsdsds.com/md/da3b/lake_minnewanka_11092005.jpg%20&coent=Senior%20software%20developers%20are%20responsible%20for%20designing,%20testing,%20and%20implementing%20new%20and%20updated%20software%20programs.%20They%20take%20on%20a%20managerial%20role%20and%20lead%20the%20development%20team%20with%20all%20software%20development%20tasks.%20Their%20job%20is%20to%20ensure%20all%20projects%20are%20completed%20on%20time%20and%20to%20company%20specifications.&ne=Derek%20J.%20Payton%20&serices=Software%20Developer,%20Consoultant,%20Entrepreneur.%20&profsion=Software%20Engineer%20Principal%22");

//sending only ? as param
//checkHeaderAndBodyUndefined("?");

//display how it looks like when embed to another sites
//multipleFrame();

//Display 3 iframes and extract title from first
//multipleFrame();
