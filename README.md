# bullmq-worker

This is just the worker of BullMQ.

If you want to run the worker separate from the Bull Server that is locate on the bullmq-basics you can running this worker with the same Redis.

### Run project local

Clone project

    git clone git@github.com:willmagna/bullmq-worker.git

Add .env to the project

    cp .env.example .env

Install all the dependencies

    yarn install

Run Worker

    yarn run dev:worker

### Run the project in Docker Container

#### You will need the bullmq-basics project https://github.com/willmagna/bull-basic-template

Create a Docker Network

    docker network create queue-bullmq

Change REDIS_HOST on .env file

    from REDIS_HOST=localhost
    to REDIS_HOST=bullmq-redis

Run Docker Redis

    sudo docker run --network queue-bullmq -p 6379:6379 --name bullmq-redis -d redis redis-server --appendonly yes --requirepass 123456

SERVER - Build Docker Image

    sudo docker build . -t bullmq-server

SERVER - Run Docker Image

    docker run --network queue-bullmq -p 3333:3333 --env-file ./.env -d --name bullmq-server bullmq-server

WORKER - Build Docker Image

    sudo docker build . -t bullmq-worker

WORKER - Run Docker Image

    docker run --network queue-bullmq --env-file ./.env -d --name bullmq-worker bullmq-worker
