const fs = require('fs').promises;


fs.readdir('./folder').then((dir) =>{
    console.log('체크',dir);
    return fs.unlink('./folder/file2.js');
}).then(()=>{
    console.log('파일 삭제성공');
    return fs.rmdir('./folder');
}).then(()=>{
    console.log("폴더 삭제 성공");
}).catch((err) =>{
    console.error(err);
});