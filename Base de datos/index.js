global.express = require('express')
global.api = express();
const port = 3000;
const mongoose = require('mongoose');

api.use((req,res,next)=>{
    res.header('Content-Type: application/json');
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
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