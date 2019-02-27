module.exports = {
  'Local Testing': (browser) => {
    (browser)
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('h1')
      .assert.containsText('h1', 'Welcome to Your Vue.js + TypeScript App');
  },
};
