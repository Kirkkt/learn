'use strict';
var fs = require('fs');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var logging = webdriver.logging;
var promise = webdriver.promise;

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

driver.get('http://0.0.0.0:8000/?id=overview');
driver.findElement(By.id('username_field')).sendKeys('15810055307');
driver.findElement(By.id('password_field')).sendKeys('tangke');
driver.findElement(By.id('passwordFormSubmit')).click();
driver.wait(until.titleIs('CloudIn控制台--个人中心'), 1000);
console.log('login page success');
driver.get('http://0.0.0.0:8000/?id=overview');
driver.wait(until.titleIs('CloudIn控制台-北京2区'), 1000);
console.log('console main page success');
driver.get('http://0.0.0.0:8000/?id=instance');

var next = function() {
  driver.takeScreenshot().then(function(data){
    var base64Data = data.replace(/^data:image\/png;base64,/,"")
    fs.writeFile("console-host.png", base64Data, 'base64', function(err) {
        if(err) console.log(err);
    });
  });
  console.log('console host page success');
};
// setTimeout(next, 1000);


console.log('hel');
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(5000).then(() => {
driver.get('http://0.0.0.0:8000/?id=instance');
sleep(5000).then(() => {
  driver.takeScreenshot().then(function(data){
    var base64Data = data.replace(/^data:image\/png;base64,/,"")
    fs.writeFile("console-host.png", base64Data, 'base64', function(err) {
        if(err) console.log(err);
    });
  });
  console.log('console host page success');
});
});
