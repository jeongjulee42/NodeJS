console.clear();
console.log('--------------');
// 1. 폴더에 접근
// 2. 폴더에서 파일들 목록 읽기
// 3. 먼저 비디오 폴더 생성하고, 동영상 파일들 옮기기
// 4. captured 폴더 생성하고, png, aae 파일들 옮기기
// 5. duplicated 폴더 생성하고 원본 옮기기
const path = require('path');
const fs = require('fs');

const photoDir = process.argv[2];
const workingDir = path.join(__dirname, photoDir);

const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicatedDir');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises.readdir(workingDir).then((files) => {
    files.forEach(file => {
        classification(file);
    })
}).catch(console.error);

function classification(filename){
    if (filename.includes('IMG_E')){
        moveFile(filename, duplicatedDir);
    }
    const extension = path.extname(filename);
    if (extension.includes('png')||extension.includes('aae')) {
        moveFile(filename, capturedDir);
    } else if (extension.includes('mov') || extension.includes('mp4')) {
        moveFile(filename, videoDir);
    } else {
        return;
    }
}

function moveFile(filename, moveDir){
    fs.promises.rename(path.join(workingDir, filename), path.join(moveDir, filename));
}