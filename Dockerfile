FROM node:10.4.0
WORKDIR /questions
COPY package*.json ./
RUN npm install && apt-get update && apt-get install -y vim
COPY  . .
EXPOSE 3000
CMD ["npm", "start"]