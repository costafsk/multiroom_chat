const app = require('../config/server');

const server = app.listen(8080, () => console.log('Server is Running Bro ;) '));


// Web Socket Connect;

const io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', (socket) => {
    console.log('usuário conectou');

    socket.on('disconnect', () => {
        console.log('usuario desconectou');
    });
    socket.on('msg', (data) => {
        socket.emit('notification', {nickname: data.nickname, msg: data.msg});
        socket.broadcast.emit('notification', {nickname: data.nickname, msg: data.msg});
        
    });
});