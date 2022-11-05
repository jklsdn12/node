const fs = require('fs').promises;

fs.copyFile('test.txt', 'testcopy.txt').then(()=>{
    console.log('복사');
}).catch((err)=>{
    console.error(err);
});