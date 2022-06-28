let express=require('express');
const productRoute=express.Router();

productRoute.route('/items').post((req,res)=>{
  res.json();
})

productRoute.route('/').get((req,res)=>{
  res.json();
})
module.exports=productRoute;