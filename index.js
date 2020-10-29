var mongoose=require('mongoose');
var express=require('express');
var cors=require('cors');
var bodyparser=require('body-parser');
var user=require('./Models/User');
var FileUpload=require('./Models/UploadFile');
var multer=require('multer');
const app=express();
const port=process.env.PORT||5000;


app.use(cors());
var upload  = multer({ storage: multer.memoryStorage() });
var router = express.Router();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
//app.use(express.urlencoded({ extended: false }));

mongoose.Promise=global.Promise;

app.post('/signup',(req,res)=>{
    var flag=0;
   user.findOne({email:req.body.email}).then((result)=>{
       if(result)
        res.send("User Exists");
       else
       {  res.send("Created Account");
          var User=new user({
          email:req.body.email,
          password:req.body.password  
          });
          User.save().then((result)=>{
            res.send(result);
          }).catch((err)=>{
            res.send(err);
          });
    
       }
   }).catch((err)=>{
       res.send(err);
   })
   
       
});

app.post('/login',(req,res)=>{
    
    user.findOne({
        email:req.body.email,
      password:req.body.password  
    }).then((user)=>{
        if(user)
         res.send("Login Successful");
        else
         res.send("Unable to find the user"); 
        console.log(res.json);
    }).catch((err)=>{
        res.send(err);
    });
    
});

app.post('/uploadfile',upload.single('file'),(req,res)=>{
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
})

app.delete('/deletefile',(req,res)=>{
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
mongoose.connect('mongodb+srv://Virendra:virendra@assignment-gg74z.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
.then(()=>{
    app.listen(5000);
    console.log('Connected to database');
}).catch((err)=>{
    console.log(err);
});