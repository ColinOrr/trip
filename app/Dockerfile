FROM node:16.20.0-alpine3.18 as base

WORKDIR /usr/src

COPY package.json ./
COPY yarn.lock ./
RUN yarn install
ENV PATH /usr/src/node_modules/.bin:$PATH

WORKDIR /usr/src/app
