const faker = require('faker');
const fs = require('fs');
const writeStream = fs.createWriteStream('./users.csv', 'utf8')

let i = 0;
const makeFile = () => {
  let ok = true;
  do{
    i++;
    if(i === 10000000) {
      writeStream.write(`${faker.fake('{{internet.userName}}')}\t${faker.fake('{{image.avatar}}')}\tnow\tnow\n`, 'utf8', () => {
      })
    } else {
      ok = writeStream.write(`${faker.fake('{{internet.userName}}')}\t${faker.fake('{{image.avatar}}')}\tnow\tnow\n`, 'utf8')
    }
  }
  while(i < 10000000 && ok);
  if(i < 10000000) {
    writeStream.once('drain', makeFile)
  }
}
makeFile()

// COPY users (username, "imageUrl", "createdAt", "updatedAt") FROM 'C:\Users\JL\Documents\HRLA22\SDC\askTheCommunity\users.csv';