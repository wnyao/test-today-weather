FROM node:latest
LABEL description="Today Weather (Technical Test)"

# file path
RUN mkdir /app
RUN mkdir /app/test-today-weather
WORKDIR /app/test-today-weather
COPY . .

# clean up
RUN rm -Rf node_modules
RUN rm -Rf build

# setup
RUN yarn install
RUN yarn run build
RUN yarn global add serve

EXPOSE 5000
ENTRYPOINT ["serve","-s","build"]
