# https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
# --------------> The build image
FROM node:latest AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm ci --only=production
RUN npm run build

# --------------> The production image
FROM node:lts-alpine
RUN apk add dumb-init
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
CMD ["dumb-init", "node", "dist/index.js"]
