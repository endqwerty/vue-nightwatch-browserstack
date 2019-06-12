FROM endqwerty/vue-cli-hello-world:latest

RUN vue add @vue/e2e-nightwatch &&\
  vue add e2e-nightwatch-browserstack

ENTRYPOINT npm run test:browserstack:chrome
