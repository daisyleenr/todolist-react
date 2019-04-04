FROM node:10

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build
RUN npm install -g serve

CMD serve -s build -l 3000

EXPOSE 3000

