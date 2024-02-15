FROM node:16.20.1

WORKDIR /app

COPY package.json /app/

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
