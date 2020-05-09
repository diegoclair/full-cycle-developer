FROM node:10.16.0

USER node

RUN mkdir -p /home/node/app/public

RUN mkdir -p /home/node/app/views

RUN mkdir -p /home/node/app/dist

WORKDIR /home/node/app

COPY --chown=node ./package.json .

RUN npm install
RUN npm run build

COPY . .


EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
