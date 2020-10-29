require('dotenv').config();
var mongoose=require('mongoose');
var express=require('express');
var cors=require('cors');
var bodyparser=require('body-parser');
var userRoutes=require('./routes/user');
var fileRoutes=require('./routes/FileUploader');

const app=express();
const port=process.env.PORT||5000;

app.use(cors());

var router = express.Router();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
//app.use(express.urlencoded({ extended: false }));

mongoose.Promise=global.Promise;

app.use('/user',userRoutes);

app.use('/file',fileRoutes);

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
.then(()=>{
    app.listen(5000);
    console.log('Connected to database');
}).catch((err)=>{
    console.log(err);
});