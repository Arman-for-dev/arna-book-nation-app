import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectedDB from './config/db.js';
import {Server} from 'socket.io';
import http from 'http';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});

io.on('connection', (socket)=>{
    console.log('a user connected:', socket.id);

    socket.on('disconnect', ()=>{
        console.log('user disconnected:', socket.id);
    });
})


connectedDB();


const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});