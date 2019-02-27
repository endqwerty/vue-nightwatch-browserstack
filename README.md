# vue-cli-plugin-nightwatch-browserstack

@vue/cli plugin for automated testing with Vue + Nightwatch + BrowserStack

## Installation

In your existing Vue cli application, run the following command:
`vue add nightwatch-browserstack`

This will install a `/browserstack_config` folder with a `nightwatch.conf.js` file, a default test at `/tests/browserstack/default_test.test.js`, and adds several scripts to the `package.json` to run the tests in different browsers.

Test results are also available at http://automate.browserstack.com