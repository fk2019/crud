let express=require('express'),
  path=require('path'),
  bodyParser=require('body-parser'),
  cors=require('cors'),
  mysql=require('mysql'),
  productRoute=require('./routes')
 ;  
 
  const app=express();
  const products=[];
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));
  // app.use(fileUpload);

  app.use(cors({origin:'http://localhost:4200'}));
  // app.use(express.static(path.join(__dirname,'')));
  // app.use('/',productRoute);

  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  app.get('/api/items',(req,res)=>{   
   
    return res.json({
      "statusCode":200,
      "statusMessage":"SUCCESS"
    })
    
  })
  app.post('/api/prods',(req,res)=>{
    req.body;
    // products.push(req.body)
    res.send(req.body)

  })
  // app.post('/api/thumbnail-upload',(req,res)=>{
  //   let file=req['files'].thumbnail;
  //   console.log("File uploaded")
  // })
  let port=process.env.PORT|| 8000;
  // app.post('/items',(req,res)=>{
  //   console.console.log(('Form submitted'));
  // })
 app.listen(port)
 
 