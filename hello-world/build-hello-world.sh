#!/usr/bin/env bash

SRC_PATTERN="hello-world/Dockerfile"
if grep --quiet "$SRC_PATTERN" <<< "$(git diff --cached --name-only)"; then
  docker build -t endqwerty/vue-cli-hello-world:latest hello-world/.
  docker push endqwerty/vue-cli-hello-world:latest
fi
