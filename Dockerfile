FROM node:latest

WORKDIR /app

COPY . /app

COPY package.json .

RUN npm install

RUN npm run build

COPY .env . /build/

EXPOSE 3001

CMD ["node", "./build/index.js"]