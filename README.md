# Running Multiple Containers

- Practice how to run multiple containers

- A single Node.js web application will be built, which uses Redis

- Create multiple containers of the Node.js web app

- And create a separate container of Redis

- Use Docker Compose to run all those Node.js web app containers and Redis container at the same time


# docker-compose

- It is a separate CLI that gets installed along with docker

- Automates some of the long-winded arguments that are being passing to ```docker run```

- ```docker-compose up``` will automatically create a network that joins all the containers together


# docker-compose.yml

- ```services``` refers to what type of containers will be used for the project

```
services:
  redis-server:
    image: 'redis'

```
- The code snippet means that this project will create a container named redis-server using redis image

```
node-app:
    build: .
    ports:
      - "4001:8081"
```
- And this means it will build an image using the ```Dockerfile``` inside the directory, and ```ports``` specify the ports to open the containers

- ```"4001:8081"``` means it create a connection with local port 8081 and container's port 8081
