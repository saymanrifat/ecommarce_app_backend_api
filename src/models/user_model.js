const {Schema, model} = require('mongoose');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const userSchema  = new Schema({

    id: {type: String, unique:true },
    fullname: {type:String, default:""},
    email:{type:String, unique: true,required:true},
    password: {type:String, required:true},
    phoneNumber: {type:String,default:""},
    address:{type:String, default:"",},
    city:{type:String, default:"",},
    state:{type:String, default:""},
    profileProgress: {type:Number,default:0,},
    updatedOn: {type:Date},
    createdOn: {type:Date}
});

userSchema.pre('save',function(next){
this.id = uuid.v1();
this.updatedOn = new Date();
this.createdOn = new Date();

//Hash the Password
const salt = bcrypt.genSaltSync(10);
const hash =    bcrypt.hashSync(this.password,salt);
this.password = hash;



});