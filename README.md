# vue-cli-plugin-nightwatch-browserstack

@vue/cli plugin for automated testing with Vue + Nightwatch + BrowserStack

## Installation

In your existing Vue cli application, run the following command:
`npm install -D https://github.com:ijettech-dev/vue-nightwatch-browserstack`

This will install a `/browserstack_config` folder with a `nightwatch.conf.js` file, a default test at `/tests/browserstack/default_test.test.js`, and adds several scripts to the `package.json` to run the tests in different browsers.

**Note:** this depends on @vue/cli-plugin-e2e-nightwatch
