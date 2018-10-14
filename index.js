let express = require('express');
let app = express();
let server = require('http').Server(app);

let io = require('socket.io').listen(server);
// app.get('/',function(req,res){
//     res.end("holasmdsa");
// });

// let rutas = require('./routes');
// app.get(rutas);

//rutas
app.use('/public',express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/index.html',function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});


app.get('/secondary.html',function(req,res){
    res.sendfile(__dirname + '/public/secondary.html');
});
app.get('/graphics.html',function(req,res){
    res.sendfile(__dirname + '/public/graphics.html');
});

app.get('/realtime.html',function(req,res){
    res.sendFile(__dirname + '/public/realtime.html');
});


server.listen(3000,function(){
    console.log('Server conectado');
});


io.on('connection',function(socket){
    console.log("nueva conexion");
    io.sockets.emit('lectura',5);
});