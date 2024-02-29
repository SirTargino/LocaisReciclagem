import express from 'express';
import { testConnection } from './database/connection.js';
import { localRouter } from './routes/local.router.js';

const app = express()

let port = 4000;

app.use(express.json());
app.use(localRouter)

app.listen(port, ()=>{
    testConnection()
    return console.log("Server run");
})