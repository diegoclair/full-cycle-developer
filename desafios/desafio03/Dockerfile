FROM node:10-slim

USER node

RUN mkdir -p /home/node/app/public

RUN mkdir -p /home/node/app/views

RUN mkdir -p /home/node/app/dist

WORKDIR /home/node/app

COPY --chown=node ./package.json .

RUN npm install

COPY ./views ./views

COPY ./dist ./dist

COPY ./public ./public

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
