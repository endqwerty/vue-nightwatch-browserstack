FROM endqwerty/vue-cli-hello-world:latest

COPY . vue-nightwatch-browserstack

RUN npm install --save-dev file:vue-nightwatch-browserstack &&\
  vue invoke e2e-nightwatch-browserstack

ENTRYPOINT npm run test:browserstack:chrome
