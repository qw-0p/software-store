FROM node:20-alpine

WORKDIR /app

COPY package*.json .

COPY nodemon.json .

RUN npm install

COPY . .

EXPOSE 7654

CMD [ "npm", "run", "dev" ]
