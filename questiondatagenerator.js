const faker = require('faker');
const fs = require('fs');
const writeStream = fs.createWriteStream('./questions.csv', 'utf8')

let i = 0;
const makeFile = () => {
  let ok = true;
  do{
    i++;
    if(i === 10000000) {
      writeStream.write(`${i}\t${i}\t${faker.fake('{{hacker.phrase}}')}${i % 2 === 0 ? '?' : ''}\t${i % 2 === 0 ? '@' : i - 1}\t${Math.floor(10 * Math.random())}\tnow\tnow\n`, 'utf8', () => {
      })
    } else {
      ok = writeStream.write(`${i}\t${i}\t${faker.fake('{{hacker.phrase}}')}${i % 2 === 0 ? '?' : ''}\t${i % 2 === 0 ? '@' : i - 1}\t${Math.floor(10 * Math.random())}\tnow\tnow\n`, 'utf8')
    }
  }
  while(i < 10000000 && ok);
  if(i < 10000000) {
    writeStream.once('drain', makeFile)
  }
}
makeFile()

// COPY questions (user_id, restaurant_id, text, parent_id, helpful, "createdAt", "updatedAt") FROM 'C:\Users\JL\Documents\HRLA22\SDC\askTheCommunity\questions.csv';
// COPY questions (user_id, restaurant_id, text, parent_id, helpful, "createdAt", "updatedAt") FROM 'C:\Users\JL\Documents\HRLA22\SDC\askTheCommunity\questions.csv' WITH NULL AS '@';