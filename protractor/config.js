'use strict';

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*-spec.js'],
  framework: 'jasmine2',

  onPrepare: function() {
    global.inputUser = element(by.model('user.email'));
    global.inputPass = element(by.model('user.password'));
    global.loginBtn = element(by.css('[ng-click="login()"]'));
    global.inputSearch= element(by.model('searchText'));
    global.searchBtn = element(by.css('[ng-click="search()"]'));
    global.searchText = element(by.css('[ng-show="searchedText"]'));
    global.login = function() {
      inputUser.sendKeys('test5@test5.com');
      inputPass.sendKeys('test');
      loginBtn.click();
    };
  },
  baseUrl: 'https://protractor-example.firebaseapp.com'
};