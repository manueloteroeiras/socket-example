const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path      = require('path');
const fs        = require('fs');
const dotenv    = require('dotenv').config()

const PORT = process.env.PORT || 4000 ;

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/set-person/:name', (req, res)=>{
  io.emit('SET_PERSON', req.params['name'])
  res.send('sended')
})


http.listen(PORT, function(){
  console.log(`listening on ${ PORT }`);
});

