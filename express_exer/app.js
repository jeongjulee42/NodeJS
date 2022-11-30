import express from 'express';

console.clear();
console.log('----------------------');
const app = express();
app.get('/',(req, res, next)=>{
    if(true){
        return res.send('EH')
    }
    res.send('gG')
})

app.listen(8080);