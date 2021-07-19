FROM node:14

WORKDIR /app

EXPOSE 3000

COPY . .

RUN yarn

CMD yarn start:dev
