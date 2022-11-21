console.clear();
console.log('log');
console.info('info');
console.warn('warn');
console.error('err');

console.assert(1 === 3, 'not same')
console.assert(1 == 1, 'same')

const student = {
    name: 'ellie',
    age: 20,
    company:{name:'ac'},
};

console.log(student);
console.table(student);
console.dir(student,{showHidden:true, colors:false, depth:0})

console.time('for loop');
for (let i =0; i<1000; i++){
    i++;
}
console.timeEnd('for loop')

function a () {
    console.count('a func')
}
a();
a();
console.countReset('a func');
a();

function f1() {
    f2();
}
function f2() {
    f3();
}
function f3(){
    console.log('f3')
    console.trace();
}
f1();