const express = require('express');
const bodyParser = require('body-parser');
const port=3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res) =>{
    res.send('hello world');

});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
  });


//   post method

app.post('/resources', (req, res) => {
    const { name } = req.body;
    
    // Create new resource with provided name
    res.status(201).json({ message: `Created resource with name ${name}` });
  });