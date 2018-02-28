FROM node:8.4.0

# Create app directory
RUN mkdir -p /usr/src/ecomm
WORKDIR /usr/src/ecomm

# Install app dependencies
COPY package.json /usr/src/ecomm/
RUN npm install

# Bundle app source
COPY . /usr/src/ecomm

RUN npm run build

EXPOSE 3003
CMD [ "npm", "run", "run-server" ]
