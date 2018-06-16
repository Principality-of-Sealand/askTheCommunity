version: '2'
services:
  web:
    image: questions
    ports:
       - "8080:8080"
    networks: 
      [webnet]
   
    environment:
      DB_HOST: db
    command: ["./wait-for-it.sh", "db:5432", "--", "npm", "start"] 
  db:
    image: postgres
    volumes: 
      - ./pgData:/var/lib/postgresql/data
    networks:
      [webnet]
    environment:
      POSTGRES_PASSWORD: ''
      POSTGRES_USER: postgres
      POSTGRES_DB: practice
    ports:
      - "3030:5432"
networks:
  webnet: