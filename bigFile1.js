const fs2 = require('fs');
//대용량 처리

console.log('before =>',process.memoryUsage().rss);

const data1 = fs2.readFileSync('./bigTxt.txt');
fs2.writeFileSync('./big2.txt',data1);

console.log('after sync =>',process.memoryUsage().rss);



console.log('before =>',process.memoryUsage().rss);
const readStream = fs2.createReadStream('./bigTxt.txt');
const writeStream = fs2.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end' , ()=>{
    console.log('after stream =>',process.memoryUsage().rss);
});


