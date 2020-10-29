var mongoose=require('mongoose');
 
var Schema=mongoose.Schema;
var schema=new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
});

var user=mongoose.model('user',schema);

module.exports=user;