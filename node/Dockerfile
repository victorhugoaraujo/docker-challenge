FROM node:15

WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm set strict-ssl false && npm install 

EXPOSE 3000

COPY . .

CMD [ "node", "index.js"]