let count = 0;

function increase(){
    count++;
}

function getCount(){
    return count;
}

console.log(module);
module.exports.getC = getCount;
module.exports.incr= increase;
console.log(module);