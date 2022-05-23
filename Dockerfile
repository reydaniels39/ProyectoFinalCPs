FROM node:14-alpine
WORKDIR node/sls
RUN npm install -g serverless@2.71.0
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]