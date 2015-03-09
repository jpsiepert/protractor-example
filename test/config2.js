exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test1.js'],
  capabilities: {
    'browserName': 'firefox'
  },

  framework: 'jasmine2',
  baseUrl: 'https://protractor-example.firebaseapp.com'
};
