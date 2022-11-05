const fs = require('fs').promises;

fs.readFile('./test.txt').then((data)=>
    {
        console.log(data);
        console.log(data.toString());
    }
).catch((err)=>{
   console.error(err);
});

fs.writeFile('./write.txt','input').then(() =>
    {
            return fs.readFile('./write.txt');
    }
).then((data)=>{
    console.log(data.toString());
}).catch((err) => {
    console.error(err);
});


const fs2 = require('fs');

let data =fs2.readFileSync('./test.txt'); //싱크
console.log('sync read = > ', data.toString());

//대용량 처리시
const readStream = fs2.createReadStream('./test.txt', {
    highWaterMark : 16
})

const data2 = [];

readStream.on('data', (chunk) => {
    data2.push(chunk);
    console.log('data : ',chunk,chunk.length);
});

readStream.on('end',() => {
    console.log('end : ', Buffer.concat(data2).toString());
})

readStream.on('error', (err)=>{
   console.log('error : ',err);
});

const writeStream = fs2.createWriteStream('./test2.txt');
writeStream.on('finish', ()=>{
   console.log('파일쓰기 완료');
});

writeStream.write('test2');
writeStream.write('test3');
writeStream.write('test4');
writeStream.write('test5');
writeStream.end();

//파이핀
const readStream2 = fs2.createReadStream('./test.txt');
const writeStream2 = fs2.createWriteStream('./test5.txt');
readStream2.pipe(writeStream2);

//gzip

const zlib = require('zlib');

const readStream3 = fs2.createReadStream('./test.txt');
const zlibStream = zlib.createGzip();
const writeStream3 = fs2.createWriteStream('./test.txt.gz');
readStream3.pipe(zlibStream).pipe(writeStream3);


//대용량 처리
console.log('before =>',process.memoryUsage().rss);

const data1 = fs2.readFileSync('./bigTxt.txt');
fs2.writeFileSync('./big2.txt',data1);

console.log('before =>',process.memoryUsage().rss);

