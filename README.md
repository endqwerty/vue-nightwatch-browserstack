# vue-cli-plugin-e2e-nightwatch-browserstack

@vue/cli plugin for automated testing with Vue + Nightwatch + BrowserStack

![Package Version](https://img.shields.io/npm/v/vue-cli-plugin-e2e-nightwatch-browserstack.svg)
![NPM License](https://img.shields.io/npm/l/vue-cli-plugin-e2e-nightwatch-browserstack.svg)

[![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=V3FWY3BMSWRRVkpodktPK0I4WHZIeUNncVcvVWt4YXpyaUZ6TEsxNGNqZz0tLW52Z1NZQnpUWDV4NTBXclYxNU5Qenc9PQ==--bf7dd644419429aaac53e8fccba362ef3690c2c8)](https://automate.browserstack.com/public-build/V3FWY3BMSWRRVkpodktPK0I4WHZIeUNncVcvVWt4YXpyaUZ6TEsxNGNqZz0tLW52Z1NZQnpUWDV4NTBXclYxNU5Qenc9PQ==--bf7dd644419429aaac53e8fccba362ef3690c2c8)
[![CircleCI](https://circleci.com/gh/endqwerty/vue-nightwatch-browserstack.svg?style=svg)](https://circleci.com/gh/endqwerty/vue-nightwatch-browserstack)

## Installation

**Note:** this depends on `@vue/cli-plugin-e2e-nightwatch`

From an existing Vue cli application run:

`vue add e2e-nightwatch-browserstack`

This will install a `/browserstack_config` folder
with a `nightwatch.conf.js` file
and adds several scripts to the `package.json`
to run the tests in different browsers.

This differs from `npm:vue-cli-plugin-e2e-nightwatch-browserstack`
by integrating better with the e2e-nightwatch plugin.

This package assumes that `@vue/cli-plugin-e2e-nightwatch`
has already been installed.

If you installed this one first,
I advise deleting all traces of this and installing the nightwatch plugin first.

### Fallback Installation (or for advanced users)

As a fallback, if the normal Vue installation does not work, try:

`npm install -save-dev vue-cli-plugin-e2e-nightwatch-browserstack`

and

`vue invoke e2e-nightwatch-browserstack`

### Removing this package

- delete `node_modules`
- delete the folder `browserstack_config`
- remove `vue-cli-plugin-e2e-nightwatch-browserstack` from
  `package.json`
- remove all `test:browserstack`... commands from `package.json`.

If the expected files are not created (or you installed through npm install),
try `vue invoke e2e-nightwatch-browserstack`

## Usage

### Configuration

#### Required ENV Vars

`BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` are required to be set.
These can be retrieved from your account settings at:
<https://www.browserstack.com/accounts/settings>

`BROWSERSTACK_PROJECT` can be configured to split tests by project.
The default name is "default_project"

This setting is unique and uses an ENV var so CircleCI can build this
to the correct project for BrowserStack's Open Source project requirements.

#### File and Config Structure

This plugin uses its own Nightwatch config file.
It does not inherit from package.json or from any other
Nightwatch config files in the root directory.

All BrowserStack and NightwatchJS configurations can be set in the
`browserstack_config/nightwatch.conf.js` file.

### Run

`npm run test:browserstack:chrome`
or replace chrome with `firefox`, `safari`, `ie`, `android`, `ios`

### Testing without starting the dev server

`--url` flag is used to specify a url. This flag skips the dev server
and passes the url to browserstack as part of the config.

Further Nightwatch commands could change the starting URL,
but this is the one which will show up in the Browserstack UI.

## Known Issues

### Nightwatch 0.9.21 Security Vulnerabilities

Nightwatch v0.9.21 has multiple security vulnerabilities from dependencies.

These are known and cannot be fixed as Vue-cli is stuck on 0.9.21 for now.

This plugin will be updated to Nightwatch > 1.0.0 when Vue-cli updates
as this plugin is useless if its using a different version of Nightwatch.

### TypeError: browser.assert.elementCount is not a function

`asset.elementCount()` is a sample custom-assertion.
Make sure you set the custom assertions path in whichever `nightwatch.conf.js`
you are using

### Nightwatch not being used as the test runner

`"@vue/cli-plugin-e2e-nightwatch": "^3.8.0",`
is currently the latest plugin version.
It uses a version of Nightwatch
before the Nightwatch CLI was implemented in `1.0.0`.
This hasn't been an issue in my testing, but could be an issue for others

## Contributing

### General Notes

- Pull requests are welcome.
- For major changes,
  please open an issue first to discuss what you would like to change.
- Please make sure to update tests as appropriate.
- Creation of additional tests are always appreciated too.

### Development

Follow the instructions here.
Most of this information will be
required to fully understand how Vue plugins work

[Installing a Plugin Locally](https://cli.vuejs.org/dev-guide/plugin-dev.html#installing-plugin-locally)

### Git Commit Formatting

This project uses [commitzen](https://github.com/commitizen/cz-cli)

More information is available at the project repo,
but the basic instructions are

```sh
// Install commitizen
$ npm install -g commitizen

// Then install commitizen adapter
$ npm install -g cz-conventional-changelog
```

Use `git cz` instead of `git commit` when committing.

or `npm run commit`

or `npx git-cz` if you don't want to install commitzen

## License

[MIT](https://choosealicense.com/licenses/mit/)
