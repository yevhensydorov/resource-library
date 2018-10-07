FROM node:8-alpine

WORKDIR  /app

COPY package-lock.json /app
COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build


EXPOSE 7000
CMD ["npm", "start"]