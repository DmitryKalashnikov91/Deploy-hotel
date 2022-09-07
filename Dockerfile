FROM node:14 as client

WORKDIR /app/client

COPY client .

COPY client/package.json /app/client

RUN npm install


RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY server/package.json /app

COPY server /app

RUN npm install

COPY --from=client /app/client/build /app/client

EXPOSE 8080

CMD [ "npm", "start" ]