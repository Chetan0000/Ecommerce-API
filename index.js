const express  = require('express');
const PORT  = 8000;

const Db = require('./config/mongoose');
const e = require('express');

const app = express();

app.use(express.json());
// set up router 
app.use('/',require('./routs'));
app.use('/product',require('./routs'));



app.listen(PORT,(error) => {
    if(error){console.log(`Error in shooting up the Server ${error}`);}
    
    console.log(`Server is up and running on port :: ${PORT}`);
})