//대용량 처리
const fs2 = require('fs');
const file = fs2.createWriteStream('./bigTxt.txt');

for(let i =0; i<10000000; i++){
    file.write('대용량 데이터 테스트를 위한 더미 텍스트를 작성합니다. \n');
}
file.end();
