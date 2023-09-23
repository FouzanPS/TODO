const express = require('express');
const path = require('path');


const app = express();
const port = 3000;


app.use(express.static("public"));//this is used to access the (css and js) file in html
console.log(__dirname);    
//__dirname -> give location of the current file viz server.js
// it can be used by importing path and join the files using path.join(__dirname,'<location>');


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'/index.html'));
})

app.listen(port,()=>{
    console.log('listening on port',port);
})

