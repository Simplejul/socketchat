const app = require('express')();

// build a route
app.get('/', (req, res) =>
res.sendFile(__dirname +'/index.html')
);

// make a server and listen this
var server = app.listen(3000,() =>
console.log("Server Ready!!!!")
);

// add socket.io in this time
const io = require('socket.io')(server);

// 
io.on('connection', (socket) => {    
  // default username
  socket.username = 'Anonymous', 

  /*socket.on('changeUsername', (data) =>
    console.log(data.username),    
    socket.username = data.username)*/

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg),
    console.log('message: ' + msg)
  })
});

//io.emit('some event', { for: 'everyone' });


