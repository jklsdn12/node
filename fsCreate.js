const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK).then(() =>{
    return Promise.reject('폴더 존재');
}).catch((err)=>{
    if(err.code==='ENOENT'){
        console.log("폴더 없음");
        return fs.mkdir('./folder');
    }
    return Promise.reject(err);
}).then(() => {
   console.log('폴더 만들기 성공');
   return fs.open('./folder/file.js','w');
}).then((fd) =>{
    console.log('파일 만들기 성공 -> ',fd);
    return fs.rename('./folder/file.js','./folder/file2.js');
}).then(()=>{
    console.log("이름 변경 성공");
}).catch((err)=>{
    console.log(err);
});