FROM node:14.1-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN apk add --no-cache bash

RUN touch /root/.bashrc | echo "PS1='\w\$ '" >> /root/.bashrc

RUN npm i -g @nestjs/cli@6.14.2

WORKDIR /home/node/app

COPY --chown=node:node . .

