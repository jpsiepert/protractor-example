'use strict';

describe('clicking login', function() {

  it('should log user in', function() {
    browser.get('/#/login');
    login();

    browser.sleep(2000);
    
    expect(browser.getCurrentUrl()).toContain('awesomeness');
  });

});