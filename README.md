# vue-cli-plugin-e2e-nightwatch-browserstack

@vue/cli plugin for automated testing with Vue + Nightwatch + BrowserStack

## Installation

In your existing Vue cli application, run the following command:
`npm install -D vue-cli-plugin-e2e-nightwatch-browserstack`

This will install a `/browserstack_config` folder with a `nightwatch.conf.js` file, a default test at `/tests/browserstack/default_test.test.js`, and adds several scripts to the `package.json` to run the tests in different browsers.

This differs from npm:vue-cli-plugin-e2e-nightwatch-browserstack by integrating better with the e2e-nightwatch plugin.

**Note:** this depends on @vue/cli-plugin-e2e-nightwatch
However, it does not currently support using the same nightwatch package located inside of @vue/cli-plugin-e2e-nightwatch

Future updates will:

* remove the duplication of nightwatch in the dependency tree
* remove the default test folders on install
* merge the nightwatch conf.js with the e2e-nightwatch plugin

This package assumes that @vue/cli-plugin-e2e-nightwatch has already been installed. If you installed this one first, delete all traces of it and install the nightwatch plugin first.
