FROM node:8

RUN apt-get update -y

RUN npm install -g @vue/cli && vue --version

WORKDIR /home/node/app

RUN vue create hello-world -d

WORKDIR /home/node/app/hello-world

RUN vue add @vue/cli-plugin-e2e-nightwatch
