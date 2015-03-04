'use strict';

describe('clicking login', function() {

  it('should log user in', function() {
    browser.get('http://localhost:8080/#/login');

    element(by.model('user.email')).sendKeys('test5@test5.com');
    element(by.model('user.password')).sendKeys('test');
    element(by.css('[ng-click="login()"]')).click();
    browser.sleep(2000);

    expect(browser.getCurrentUrl()).toBe('http://localhost:8080/#/awesomeness');
  });

});