global.express = require('express')
global.api = express();
const port = 3000;
const mongoose = require('mongoose');

api.all('*',function(req, res, next){

 

    var whitelist = req.headers.origin;
  
    res.header('Access-Control-Allow-Origin', whitelist);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');  
    res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header("Access-Control-Allow-Credentials", "true");
    //res.header('Set-Cookie: cross-site-cookie=name; SameSite=None; Secure');
  
    next();
       
});



// Base de datos

mongoose.connect('mongodb://127.0.0.1:27017/TiendaSG',{useNewUrlParser:true,useUnifiedTopology:true},(error,res) => {
     if(error){
         console.log(error)
     }else{
        console.log('Funcionando correctamente')
    }
})

require('./routes/routes.js')

api.use('/',express.static(__dirname + '/TiendaSG'));

api.listen(port,function(){
    console.log('servidor funcionando por el puerto: ' + port)
})