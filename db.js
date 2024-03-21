import mongoose from 'mongoose';

const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected', ()=> {
     console.log('connected to mongodb');
})
db.on('error', (err)=> {
     console.log('error has occured', err);
})
db.on('disconnected', ()=> {
     console.log('mongodb disconnected');
})

export default db