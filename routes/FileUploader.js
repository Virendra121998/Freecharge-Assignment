var express=require('express');
var router=express.Router();
var FileUpload=require('../Models/UploadFile');
var multer=require('multer');
var upload  = multer({ storage: multer.memoryStorage() });

router.post('/uploadfile',upload.single('file'),(req,res)=>{
    var file=new FileUpload({
        username:req.body.username,
        fieldname:req.file.fieldname,
        originalname:req.file.originalname,
        encoding:req.file.encoding,
        mimetype:req.file.mimetype,
        buffer:req.file.buffer,
        size:req.file.size
    })
    file.save().then((result)=>{
        res.send("File Saved");
    }).catch((err)=>{
        res.send(err);
    })
});

router.delete('/deletefile',(req,res)=>{
    FileUpload.findOne({
        username:req.body.username,
        originalname:req.body.originalname
    }).then((result)=>{
        if(result)
        {
            FileUpload.deleteMany({
                username:req.body.username,
                originalname:req.body.originalname
            }).then((Result)=>{
                res.send("File Deleted");
            }).catch((err)=>{
                res.send("Error Ocurred");
            })
        }
        else
        res.send("File Not Found");
    }).catch((err)=>{
        res.send(err);
    })
})

module.exports=router
