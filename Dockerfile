FROM node:alpine as build-step

WORKDIR /app

COPY package*.json ./

RUN npm install

#from build directory to /app in container
COPY . .

RUN npm run build

from nginx

#copies build output from build-step to hosting folder in nginx
copy --from=build-step /app/build /usr/share/nginx/html