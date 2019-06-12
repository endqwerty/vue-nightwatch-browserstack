from endqwerty/vue-cli-hello-world

RUN vue add @vue/e2e-nightwatch &&\
  vue add e2e-nightwatch-browserstack

RUN npm run test:browserstack:chrome
