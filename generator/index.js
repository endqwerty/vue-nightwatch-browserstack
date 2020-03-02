module.exports = (api, opts, rootOptions) => {
  api.render('./template')

  api.extendPackage({
    devDependencies: {
      'browserstack-automate': '^1.0.2',
      nightwatch: '^1.3.4',
    },
    scripts: {
      'test:browserstack:chrome':
        'vue-cli-service test:browserstack -c browserstack_config/nightwatch.conf.js -e chrome -t "tests/e2e/specs/test.js"',
      'test:browserstack:firefox':
        'vue-cli-service test:browserstack -c browserstack_config/nightwatch.conf.js -e firefox tests/e2e/specs/test.js',
    },
  })
}
