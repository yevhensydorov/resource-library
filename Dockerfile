FROM node:8.12-alpine

RUN adduser -D rl && mkdir /app && chown -R rl /app
USER rl

WORKDIR  /app

COPY package-lock.json /app
COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 7000
CMD ["npm", "start"]
