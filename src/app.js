"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const postsController_1 = __importDefault(require("./controllers/postsController"));
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
exports.server = server;
const io = new socket_io_1.Server(server);
exports.io = io;
app.use(express_1.default.json());
app.use('/posts', postsController_1.default);
io.on('connection', (socket) => {
    console.log('a user connected:', socket.id);
    socket.on('message', (msg) => {
        io.emit('message', { id: socket.id, message: msg });
    });
    socket.on('disconnect', () => {
        console.log('user disconnected:', socket.id);
    });
});
