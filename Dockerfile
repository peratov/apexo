FROM node:20-buster
ENV NODE_ENV=development
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
EXPOSE 8000
EXPOSE 3001
CMD ["yarn", "start"]
