/* const http = require('http');
const server = http.createServer((req,res) => {
    console.log(req.url);
    res.end("hello my planet");
})

server.listen(3000) */

const express  = require('express');
const app = new express();
const path = require('path');
const ejs = require('ejs');
app.set('view engine','ejs')
app.use(express.static('public'));
app.listen(3000,() => {
    console.log('App listening on port 3000');
})

/* app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
}) */

app.get('/',(req,res) => {
    res.render('index');
})