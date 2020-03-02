FROM node:10

RUN apt-get update -y \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN npm install -g @vue/cli@^4.2.3 && vue --version

WORKDIR /home/node/app

RUN vue create hello-world -d

WORKDIR /home/node/app/hello-world

# remove git folder to prevent testing issues
RUN rm -rf .git

RUN vue add @vue/cli-plugin-e2e-nightwatch --webdrivers chrome
