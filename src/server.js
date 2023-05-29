const express = require('express');
const bodyParser = require('body-parser');
const hetmet = require('helmet');
const morgan = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(hetmet());
app.use(morgan('dev'));
app.use(cors());



mongoose.connect("mongodb+srv://devAdmin:SaK9gG909oSAlJGJ@clusterecommerce.14qbiwa.mongodb.net/ecommerce?retryWrites=true&w=majority");


app.get("/",function(req, res){
    res.json({success:true, message: "Hello Server At Port: 4999"});

}); 


const PORT = 4999;
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT} `));