#!/bin/bash
ssh-add ./deploy_key
scp -i ./deploy_key ./docker-compose.yml daisyleenr@49.247.210.99:~/todolist
ssh -i ./deploy_key root@49.247.210.99 pwd
docker-compose down
docker-compose pull
docker-compose up -d