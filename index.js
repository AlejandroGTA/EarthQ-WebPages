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
    io.sockets.emit('ta',128);
});


var serialport = require('serialport');
var Serialport = serialport.SerialPort;

console.log('mensasje');

const Readline = require('@serialport/parser-readline');

var myport = new serialport("COM4",{
    baudRate:9600,
});

const parser = myport.pipe(new Readline({delimiter:'\r\n'}));
parser.on('data',onData);

function onData(dato){
    io.sockets.emit('lectura',dato);
    console.log(dato); 
}

myport.on('open',onOpen);

function onOpen(){
    console.log("arduino conctado");
}

myport.on('error',function(err){
    console.log(err);
});