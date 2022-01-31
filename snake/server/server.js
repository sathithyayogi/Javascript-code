var express = require('express'),
    app = express(), 
    server = require('http').createServer(app);


    const io = require("socket.io")(server, {
      cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
      }
    });

io.on('connection', client => {
  client.emit('init', {data:'hello world'});
});

io.listen(3000);

