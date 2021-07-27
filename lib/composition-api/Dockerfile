# node #
FROM node:14.14.0-alpine3.12
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

# nginx #
FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
RUN mv ./dist/* /usr/share/nginx/html
RUN service nginx configtest
RUN service nginx restart
