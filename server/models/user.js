const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const userSchema = new mongoose.Schema({
    fullname : {type:String, required:true},
    email : {type:String, required:true, unique:true},
    password: {type:String, required:true},
    createdAt:{type:Date,default:Date.now()}
});

userSchema.methods.getHash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(4),null)
}

userSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('user', userSchema);