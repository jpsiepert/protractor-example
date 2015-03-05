'use strict';

describe('clicking search', function() {

  it('should search', function() {
    browser.get('http://localhost:8080/#/login');
    element(by.model('user.email')).sendKeys('test5@test5.com');
    element(by.model('user.password')).sendKeys('test');
    element(by.css('[ng-click="login()"]')).click();
    browser.sleep(2000);

    element(by.model('searchText')).sendKeys('superman');
    element(by.css('[ng-click="search()"]')).click();

    browser.sleep(2000);
    expect(element(by.css('[ng-show="searchedText"]')).isPresent()).toBe(true);
  });

});