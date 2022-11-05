const crypto = require('crypto');
//
// console.log('base64:', crypto.createHash('sha512').update('1234').digest('bas64'));
// console.log('hex:', crypto.createHash('sha512').update('1234').digest('hex'));
//
//
//
//
// crypto.randomBytes(64, (err,buf)=> {
//     const salt = buf.toString('base64');
//     console.log('salt : ',salt);
//     crypto.pbkdf2('1234', salt,100000, 64,'sha512', (err,key)=>{
//         console.log('pass => ',key.toString('base64'));
//     })
// });


//기본적으로 key와 iv를 알고리즘에 맞춰서 생성 안하면 작동안함.(주의)
const algorithm = 'aes-256-cbc';
//const key = 'testkey';
const ENCRYPTION_KEY = 'abcdefghijklmnop'.repeat(2);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv);
let result = cipher.update('1234', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화 : ',result);

const decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2+=decipher.final('utf8');
console.log('복호화 : ',result2);