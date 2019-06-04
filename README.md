# vue-cli-plugin-e2e-nightwatch-browserstack

@vue/cli plugin for automated testing with Vue + Nightwatch + BrowserStack

## Installation

In your existing Vue cli application, run the following command:
`npm install -save-dev vue-cli-plugin-e2e-nightwatch-browserstack`

This will install a `/browserstack_config` folder with a `nightwatch.conf.js` file, a default test at `/tests/browserstack/default_test.test.js`, and adds several scripts to the `package.json` to run the tests in different browsers.

This differs from npm:vue-cli-plugin-e2e-nightwatch-browserstack by integrating better with the e2e-nightwatch plugin.

**Note:** this depends on @vue/cli-plugin-e2e-nightwatch

This package assumes that @vue/cli-plugin-e2e-nightwatch has already been installed. If you installed this one first, delete all traces of it and install the nightwatch plugin first.

## Usage

`npm run test:browserstack:chrome` or replace chrome with `firefox`, `safari`, `ie`, `android`, `ios`
