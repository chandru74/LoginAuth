const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
const config = require('./config');
const user = require('./models/user')

mongoose.Promise = global.Promise;
mongoose.connect(
    config.MongoDBUrl,{useNewUrlParser:true}
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../dist')));

app.post('/login',(req,res)=>{
    user.findOne({email:req.body.email}).then((loginUser)=>{
        if(!loginUser){
          return  res.status(401).json({message:"invalid username or password"})
        }
        if(!loginUser.validatePassword(req.body.password)){
            return  res.status(401).json({message:"invalid username or password"})
          }
        res.status(201).json(loginUser);  

    })
});

app.post('/register',(req,res)=>{
    const newUser = new user({
        fullname: req.body.fullName,
        email: req.body.email,
    });
    newUser.password = newUser.getHash(req.body.password);

    newUser.save().then(rec => {
        res.status(201).json(rec);
    })
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(3000,()=> console.log("listening at port 3000"))