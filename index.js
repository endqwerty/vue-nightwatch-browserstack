module.exports = api => {
  api.registerCommand(
    'test:browserstack',
    {
      description: 'Run automated tests through BrowserStack',
      usage: 'vue-cli-service test:browesrstack [options]',
      options: {},
      details: {},
    },
    args => {
      try {
        const serverPromise = args.url
          ? Promise.resolve({
              url: args.url,
            })
          : api.service.run('serve')
        return serverPromise.then(({ server, url }) => {
          process.env.VUE_DEV_SERVER_URL = url

          const nightwatch = require('nightwatch')
          const browserstack = require('browserstack-local')

          nightwatch.bs_local = bs_local = new browserstack.Local()
          try {
            bs_local.start(
              {
                key: process.env.BROWSERSTACK_ACCESS_KEY,
                localdentifier: 'e2e_browserstack',
                force: true,
              },
              error => {
                if (error) {
                  throw error
                }

                console.log('Connected. Now testing...')
                return nightwatch.cli(argv => {
                  return nightwatch
                    .CliRunner(argv)
                    .setup(null, () => {
                      // Code to stop browserstack local after end of parallel test
                      bs_local.stop(function() {})
                      server ? server.close() : console.log('no server')
                    })
                    .runTests(() => {
                      bs_local.stop(function() {})
                      server ? server.close() : console.log('no server')
                    })
                })
              }
            )
          } catch (err) {
            bs_local.stop(function() {})
          }
        })
      } catch (error) {
        console.log('There was an error while starting the test runner:\n\n')
        process.stderr.write(error.stack + '\n')
        process.exit(2)
      }
    }
  )
}
