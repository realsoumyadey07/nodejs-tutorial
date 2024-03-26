import mongoose from 'mongoose';
//password - qctzRkw7PJ7SY37X
import dotenv from 'dotenv';
dotenv.config()
const mongoURL = process.env.MONGODB_URL

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