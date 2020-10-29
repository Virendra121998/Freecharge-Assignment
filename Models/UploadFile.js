var mongoose = require('mongoose');

var Schema=mongoose.Schema;
var uploadFile=new Schema({
    username:{type:String,required:true},
    fieldname:{type:String},
    originalname:{type:String},
    encoding:{type:String},
    mimetype:{type:String},
    buffer:{},
    size:{}
});

var FileUpload=mongoose.model('FileUpload',uploadFile);
module.exports=FileUpload;