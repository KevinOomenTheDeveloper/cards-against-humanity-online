# Step 1
FROM node:16-alpine3.11 as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

RUN npm install -g serve

ENTRYPOINT serve -p 80 build

# Stage 2

#FROM nginx:1.17.1-alpine
#RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx
#COPY --from=build-step /app/build /usr/share/nginx/html
