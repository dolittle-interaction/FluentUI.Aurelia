FROM node:11.6 AS build

# Copy package.json and install dependencies
WORKDIR /work
COPY ./package.json ./package.json
WORKDIR /work/Gallery
COPY ./Gallery/package.json ./package.json
WORKDIR /work/Source
COPY ./Source/package.json ./package.json
WORKDIR /work
RUN yarn install

# Build Web project
COPY . ./
RUN yarn build
WORKDIR /work/Gallery
RUN yarn build

# Build runtime image
FROM nginx:1.15-alpine
COPY --from=build /work/Gallery/dist /usr/share/nginx/html
COPY --from=build /work/Gallery/nginx-default.conf /etc/nginx/conf.d/default.conf
