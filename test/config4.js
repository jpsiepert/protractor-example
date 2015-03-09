exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test*.js'],

  framework: 'jasmine2',
  baseUrl: 'http://localhost:8080'
};
