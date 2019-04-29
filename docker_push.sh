#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push daisyleenr/todo-frontend:$TRAVIS_BUILD_NUMBER
docker push daisyleenr/todo-frontend:latest