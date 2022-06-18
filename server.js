let express=require('express'),
  path=require('path'),
  bodyParser=require('body-parser'),
  cors=require('cors'),
  mongoose=require('mongoose');

  const app=express();
  let port=process.env.PORT|| 4000;

  let server=app.listen(()=>console.log('Listening on port' + port))
