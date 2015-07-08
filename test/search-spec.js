'use strict';

describe('clicking search', function() {

  it('should search', function() {

    browser.sleep(2000);

    inputSearch.sendKeys('superman');
    searchBtn.click();

    browser.sleep(2000);
    expect(searchText.isPresent()).toBe(true);
  });

});