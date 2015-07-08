exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test1.js'],
  multiCapabilities: [
    {
      'browserName': 'firefox'
    }, {
      'browserName': 'chrome'
    }
  ],

  framework: 'jasmine2',
  baseUrl: 'http://localhost:8080'
};
