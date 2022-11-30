import express from 'express';

console.clear();
console.log('----------------------');
const app = express();
app.use(express.json())
app.get('/',(req, res, next)=>{
    if(true){
        return res.send('EH')
    }
    res.send('gG')
})
app.post('/', (req,res,next)=>{
    console.log(req.body)
})

app.listen(8080);