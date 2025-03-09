import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import postsController from './controllers/postsController';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use('/posts', postsController);

io.on('connection', (socket) => {
    console.log('a user connected:', socket.id);

    socket.on('message', (msg) => {
        io.emit('message', { id: socket.id, message: msg });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected:', socket.id);
    });
});

export { server, io };