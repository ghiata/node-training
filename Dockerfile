FROM node:6

# Create app directory
RUN mkdir -p /usr/src/training-app
WORKDIR /usr/src/training-app

# Install app dependencies
COPY package.json /usr/src/training-app/
RUN npm install

# Bundle app source
COPY . /usr/src/training-app

EXPOSE 3000
CMD [ "npm", "start" ]
