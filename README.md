# vue-cli-plugin-e2e-nightwatch-browserstack

@vue/cli plugin for automated testing with Vue + Nightwatch + BrowserStack

<img src="https://github.com/daposy/vue-nightwatch-browserstack/blob/master/logos/Vue-logo.svg" height="70px">
<img src="https://github.com/daposy/vue-nightwatch-browserstack/blob/master/logos/Browserstack-logo.svg" height="70px">

## Installation

In your existing Vue cli application, run the following command:
`vue add e2e-nightwatch-browserstack`

or as a fallback, if the above does not work, try
`npm install -save-dev vue-cli-plugin-e2e-nightwatch-browserstack`

This will install a `/browserstack_config` folder
with a `nightwatch.conf.js` file,
a default test at `/tests/browserstack/default_test.test.js`,
and adds several scripts to the `package.json`
to run the tests in different browsers.

This differs from `npm:vue-cli-plugin-e2e-nightwatch-browserstack`
by integrating better with the e2e-nightwatch plugin.

**Note:** this depends on `@vue/cli-plugin-e2e-nightwatch`

This package assumes that `@vue/cli-plugin-e2e-nightwatch`
has already been installed.

If you installed this one first,
delete all traces of it and install the nightwatch plugin first.

If the files are not created (or you installed through npm install),
try `vue invoke e2e-nightwatch-browserstack`

## Usage

### Configuration

`BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` are required to be set.
These can be retrieved from your account settings at:
<https://www.browserstack.com/accounts/settings>

### Run

`npm run test:browserstack:chrome`
or replace chrome with `firefox`, `safari`, `ie`, `android`, `ios`

### Testing without starting the dev server

`--url` flag is used to specify a url. This flag skips the dev server
and passes the url to browserstack as part of the config.
Further nightwatch commands could change the starting URL,
but this is the one which will show up in the Browserstack UI.

## Known Issues

### TypeError: browser.assert.elementCount is not a function

`asset.elementCount()` is a sample custom-assertion.
Make sure you set the custom assertions path in `nightwatch.conf.js`

### Nightwatch not being used as the test runner

`"@vue/cli-plugin-e2e-nightwatch": "^3.8.0",` is the latest version.
It uses a version of nightwatch
before the nightwatch CLI was implemented in `1.0.0`.
This hasn't been an issue in my testing, but could be an issue for others
