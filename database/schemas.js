const {Pool, Client } = require('pg');
const copyFrom = require('pg-copy-streams').from;
const fs = require('fs');
const pool = new Pool({
  user: 'postgres',
  host: "18.191.60.178",
  database: 'practice',
  password: process.env.DB,
  port: '5432'
})
const client = new Client({
  user: 'postgres',
  host: "18.191.60.178",
  database: 'postgres',
  password: process.env.DB,
  port: '5432'
})
//  only for recreating the database
// client.connect((err, client, done) => {
//   if(err) console.log('unable to connect to postgres db', err)
//   client.query('CREATE DATABASE practice', (err) => {
//     if(err){
//       console.log('error creating db', err)
//     }
//     client.end();
//   })
// })
    pool.connect((err, newClient, done) => {
      if(err) {
        console.log('unable to connect to created db', err)
      }
      console.log('connected to db')
    //   newClient.query(`CREATE TABLE IF NOT EXISTS questions (
    //       ID SERIAL,
    //       USER_ID INTEGER,
    //       RESTAURANT_ID INTEGER,
    //       TEXT VARCHAR(255),
    //       PARENT_ID INTEGER,
    //       HELPFUL INTEGER,
    //       ANSWER TEXT,
    //       "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
    //       "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
    //       PRIMARY KEY (ID)
    //   );`
    // )
    // .then(table => {
    //   console.log('questions table created', table)
    // })
    // .catch(err => {
    //   console.log('error creating questions table', err)
    // })
    // newClient.query(`CREATE INDEX restaurant_id on questions(restaurant_id)`)
    // .then(index => {
    //   console.log('Index restaurant_id created')
    // })
    // .catch(err => {
    //   console.log('error creating the index', err)
    // })
    // newClient.query('CREATE INDEX parent_id on questions(parent_id)')
    //   .then(index => {
    //     console.log('Index parent_id created')
    //   })
    //   .catch(err => {
    //     console.log('error creating the index', err)
    //   })
  //   let stream = newClient.query(copyFrom(`COPY questions (user_id, restaurant_id, text, parent_id, helpful, "createdAt", "updatedAt") FROM STDIN WITH NULL AS '@';`));
  //   let fileStream = fs.createReadStream('./questions.csv')
  //   fileStream.on('error', done);
  //   stream.on('error', done);
  //   stream.on('end', done);
  //   fileStream.pipe(stream);
  //   newClient.query(`CREATE TABLE IF NOT EXISTS users (
  //     ID  SERIAL,
  //     USERNAME VARCHAR(255),
  //     "imageUrl" TEXT,
  //     "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  //     "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  //     PRIMARY KEY (ID)
  //   );`
  // )
  // .then(table => {
  //   console.log('users table created', table)
  // })
  // .catch(err => {
  //   console.log('error creating users table', err)
  // })
  // newClient.query(`CREATE INDEX id on users(id)`)
  // .then(index => {
  //   console.log('INDEX id created')
  // })
  // .catch(err => {
  //   console.log('error creating the index', err)
  // })
  // let streamUsers = newClient.query(copyFrom(`COPY users (username, "imageUrl", "createdAt", "updatedAt") FROM STDIN;`));
  // let fileStreamUsers = fs.createReadStream('./users.csv')
  // fileStreamUsers.on('error', done);
  // streamUsers.on('error', done);
  // streamUsers.on('end', done);
  // fileStreamUsers.pipe(streamUsers);
  })

  module.exports = {pool:pool}