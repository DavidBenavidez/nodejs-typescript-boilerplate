FROM node:14.12.0

USER root

WORKDIR /usr/node-app

COPY . ./

RUN npm install

EXPOSE 8080
ENV NODE_ENV development
CMD npm run start