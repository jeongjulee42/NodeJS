console.clear();
console.log('--------------');

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