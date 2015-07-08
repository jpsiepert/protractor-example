'use strict';

describe('clicking login', function() {

  it('should log user in', function() {
    browser.get('/#/login');

    element(by.model('user.email')).sendKeys('test5@test5.com');
    element(by.model('user.password')).sendKeys('test');
    element(by.css('[ng-click="login()"]')).click();
    browser.sleep(2000);

    expect(browser.getCurrentUrl()).toContain('/#/awesomeness');
  });

});