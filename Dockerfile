FROM node:10.16

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

USER node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node:node app/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY --chown=node:node app /usr/src/app

CMD [ "npm", "run",  "start:development" ]