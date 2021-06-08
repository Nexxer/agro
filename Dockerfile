FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY public public
COPY src src
RUN npm run build

RUN npm install --global serve
CMD serve -s build