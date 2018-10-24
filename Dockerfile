FROM node:8.11.2

WORKDIR  /app

COPY package-lock.json /app
COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build


EXPOSE 7001
CMD ["npm", "start"]