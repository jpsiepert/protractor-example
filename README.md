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

    
        exports.config = {
            seleniumAddress: 'http://localhost:4444/wd/hub',
            specs: ['spec.js']
        }
    

If you see my config1.js I also added

    framework: 'jasmine2'

This is so I can use beforeAll and afterAll in my tests. By default protractor uses jasmine 1.x which does not provide those methods

There are many more options available for our config.js file. We can add capabilities to test in another browser besides chrome

    capabilities: {
        'browserName': 'firefox'
    }

Or we can run in multiple browsers with multiCapabilites

    multiCapabilites: [
        {
            'browserName': 'firefox',
        }, {
            'browserName': 'safari',
        }, {
            'browserName': 'chrome',
            'chromeOptions': {
                'args': ['incognito']
            }
        }
    ]

There is also the ability to set options within the browsers as you can see above with chromeOptions.

onPrepare has been one of the most useful parts of the config.js file for multiple tests. This allows me to define my variables in one place and have access to them across the different spec.js files

    onPrepare: function() {
        global.user = element(by.model('user.email'));
        global.pass = element(by.model('user.pass'));
        global.loginBtn = element(by.css('[ng-click="login()"]'));
        global.login = function() {
            user.sendKeys('username');
            user.sendKeys('password');
            loginBtn.click();
        };
    }

This way if an authenticated user is needed to test a part of the site, the function is availabe to call in your spec.js file without having to write out each line of code multiple times.

If all your tests require the same function to be performed at the start or end of each test you can have it called in the onPrepare function as well

    onPrepare: function() {
        global.inputUser = element(by.model('user.email'));
        global.inputPass = element(by.model('user.pass'));
        global.loginBtn = element(by.css('[ng-click="login()"]'));
        beforeAll(function() {
            browser.get('http://localhost:8080/#/login');
            user.sendKeys('username');
            user.sendKeys('password');
            loginBtn.click();
        });
    }

### Writing Tests in spec.js

Using the jasmine framework we write our tests in describe functions with it blocks


    describe('this test', function() {

        it('should do something awesome', function() {
            //do an awesome test here
        });

    });

Let's say we wanted to test a user being able to log in. With just the very basic config file it could look like this

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

After the changes to our config file it could look like this

    describe('clicking login', function() {

        it('should log user in', function() {

            browser.sleep(2000);

            expect(browser.getCurrentUrl()).toContain('awesomeness');
        });

    });

### What else can we do?

With my experience, if you need to test it, protractor can handle it. I've tested infinite scrolling, where I have the test scroll to the bottom of the page.

If you need to check that your arrow keys can go back and forth between pages, instead of mouse clicks, it's possible to test!

Running async tests was a little tricky. I had 4 instances of webdriver running at once. All with the same user. When they tried to send the same request to the backend at the same time, it caused problems. With some extra logic in our onPrepare, we were able to dynamically set which user to login with so it wasn't the same on each browser.

I have my users stored locally so the tests look for them in a specific file, such as .bashrc, which allows each user to have access to only their user and not someone else's private password when more than one person is using the test suite. This also allows me to have multiple generic users stored that I can pull from when needing more than one user running those async tests.
I get access to these users in the onPrepare function like this:

    global.user = process.env.MY_USER
    global.password = proccess.env.MY_PASSWORD


Protractor can use [grunt](https://www.npmjs.com/package/grunt-protractor-runner) as well to run the tests. There are so many possiblities!

### Conclusion

I have found protractor enjoyable to work with. It partners with AngularJS well and third party's to be able to automate tests.
I hope you enjoy working with it as well and you find some of these tips useful when setting up your code.







