// console.log("Hello");


//creat server

const http=require('http')
const port=3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('hello world');

});
server.listen(port,()=>{
    console.log(`Server running at ${port}`)
});



const fs=require('fs');
fs.writeFile('file.txt','hello,world',(err)=>{
    if (err)throw err;
    console.log("data written file")
});


// read file 
fs.readFile('file.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});

// import 
const apps=require('./apps');
apps.sayHello();

// Node.js Events
const events = require('events');