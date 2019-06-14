let nightwatch_config = {
  src_folders: ['tests/e2e/specs'],
  custom_assertions_path: ['tests/e2e/custom-assertions'],
  output_path: 'reports/nightwatch',

  selenium: {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80,
  },

  common_capabilities: {
    build: 'nightwatch-browserstack',
    'browserstack.user':
      process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstack.key':
      process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    project: process.env.BROWSERSTACK_PROJECT || 'default_project',
    'browserstack.debug': true,
    'browserstack.local': true,
  },

  test_workers: false,

  test_settings: {
    default: {
      globals: {
        waitForConditionTimeout: 5000,
      },
    },
    chrome: {
      desiredCapabilities: {
        browser: 'chrome',
        platform: 'WINDOWS',
      },
    },
    firefox: {
      desiredCapabilities: {
        browser: 'firefox',
        platform: 'WINDOWS',
      },
    },
    safari: {
      desiredCapabilities: {
        browser: 'safari',
        platform: 'MAC',
      },
    },
    ie: {
      desiredCapabilities: {
        browser: 'internet explorer',
        version: '10',
        platform: 'WINDOWS',
      },
    },
    iphone: {
      desiredCapabilities: {
        browser: 'iPhone',
      },
    },
    android: {
      desiredCapabilities: {
        browser: 'android',
        platform: 'ANDROID',
      },
    },
  },
}

// Code to support common capabilites
for (var i in nightwatch_config.test_settings) {
  var config = nightwatch_config.test_settings[i]
  config['selenium_host'] = nightwatch_config.selenium.host
  config['selenium_port'] = nightwatch_config.selenium.port
  config['desiredCapabilities'] = config['desiredCapabilities'] || {}
  for (var j in nightwatch_config.common_capabilities) {
    config['desiredCapabilities'][j] =
      config['desiredCapabilities'][j] ||
      nightwatch_config.common_capabilities[j]
  }
}

module.exports = nightwatch_config
