# Protractor Example

### Overview
This is a brief example of what can be done with Protractor

### Local Setup

#### Setting up Protractor
Installing protractor installs webdriver-manager as well

```npm install -g protractor```

```webdriver-manager update```

```webdriver-manager start```

Make sure you have bower installed, if not: ```npm install -g bower```

Fork/Clone this repo

From the public folder run ```bower install```

The config.js and spec.js files are already set up and ready to go. You can run any of them from the terminal

```protractor config.js```

### Understanding config.js

The config.js file can do a lot of the work our tests need for us. 
It needs 2 basics to run: SeleniumAddress and to know where your spec files are.
The tests will default to run in the Chrome browser with the jasmine test framework.

```exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}```

If you see my config1.js I also added ```framework: 'jasmine2'```
This is so I can use beforeAll and afterAll in my tests. By default protractor usees jasmine 1.x which does not provide those methods


