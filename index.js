import express from 'express';
const app = express();


app.get('/',(req, res)=>{
    res.send("welcome from server");
})
app.get('/greencoconut',(req, res)=>{
    res.send("Hi this is soumya, and I love coconut");
})
app.post('/item', (req, res)=>{
    res.json('data is saved');
})

app.listen(8000,()=>{
    console.log('server is running on 8000');
})