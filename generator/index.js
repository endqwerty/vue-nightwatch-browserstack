module.exports = (api, opts, rootOptions) => {
  api.render('./template');

  api.extendPackage({
    devDependencies: {
      "browserstack-automate": "^1.0.2",
      "nightwatch": "^1.0.18"
    },
    scripts: {
      'test:browserstack:chrome': 'vue-cli-service test:browserstack -c browserstack_config/nightwatch.conf.js -e chrome',
      'test:browserstack:firefox': 'vue-cli-service test:browserstack -c browserstack_config/nightwatch.conf.js -e firefox',
      'test:browserstack:ie': 'vue-cli-service test:browserstack -c browserstack_config/nightwatch.conf.js -e ie',
      'test:browserstack:safari': 'vue-cli-service test:browserstack -c browserstack_config/nightwatch.conf.js -e safari',
      'test:browserstack:android': 'vue-cli-service test:browserstack -c browserstack_config/nightwatch.conf.js -e android',
      'test:browserstack:iphone': 'vue-cli-service test:browserstack -c browserstack_config/nightwatch.conf.js -e iphone'
    }
  });
};
