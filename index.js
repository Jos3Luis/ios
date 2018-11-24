// index.js
var express =require('express');
var mongoose=require('mongoose');
//var bodyparser=require('body-parser');

var Schema = mongoose.Schema;
var app = express();

app.set('port', (process.env.PORT || 8086))

mongoose.connect('mongodb://uadminluz:cibertec2018@ds121262.mlab.com:21262/ahorro',{ useNewUrlParser: true }, function(err){
	if(err){
	console.log('Error de Conexion');
	}else{
	console.log('Conexion Correcta');
	}
});

var configurarEsquema = new mongoose.Schema({
costo:Number
});
var Configurar= mongoose.model('configura',configurarEsquema);

var dataConfigurar= new Configurar({costo:20});
dataConfigurar.save(function(error){
	if(error){
		console.log("error: ");
	}
});




var categoriaEsquema = mongoose.Schema({
nombre:String
});
var Categoria= mongoose.model('categorias',categoriaEsquema);

var dataCategoria=new Categoria({nombre:'Lavanderia'})
dataCategoria.save();


var productoEsquema = mongoose.Schema({
nombre:String,
foto:String,
categoria: { type: Schema.ObjectId, ref: "categorias" } 
});
var Producto= mongoose.model('productos',productoEsquema);
new Producto({nombre:'Aspiradora', foto:'http://quispe.nom.pe/ios/aspiradora.png',categoria: dataCategoria._id}).save();
new Producto({nombre:'Plancha Electrica', foto:'http://quispe.nom.pe/ios/planchaelectrica.png',categoria: dataCategoria._id}).save();
new Producto({nombre:'Foco Fluorescente', foto:'http://quispe.nom.pe/ios/focofluorescente.png',categoria: dataCategoria._id}).save();
new Producto({nombre:'Foco', foto:'http://quispe.nom.pe/ios/foco.png',categoria: dataCategoria._id}).save();
new Producto({nombre:'Lavadora', foto:'http://quispe.nom.pe/ios/lavadora.png',categoria: dataCategoria._id}).save();
new Producto({nombre:'Limpiador de Vapor', foto:'http://quispe.nom.pe/ios/aspiradora.png',categoria: dataCategoria._id}).save();
new Producto({nombre:'Secadora de Ropa', foto:'http://quispe.nom.pe/ios/aspiradora.png',categoria: dataCategoria._id}).save();
new Producto({nombre:'Pulidor de Piso', foto:'http://quispe.nom.pe/ios/aspiradora.png',categoria: dataCategoria._id}).save();
new Producto({nombre:'Otro', foto:'http://quispe.nom.pe/ios/aspiradora.png',categoria: dataCategoria._id}).save();

			

dataCategoria=new Categoria({nombre:'Dormitorio'});
dataCategoria.save();

var dataCategoria=new Categoria({nombre:'Otros'});
dataCategoria.save();

var dataCategoria=new Categoria({nombre:'Despacho'});
dataCategoria.save();

var dataCategoria=new Categoria({nombre:'Cocina'});
dataCategoria.save();

var dataCategoria=new Categoria({nombre:'Baño'});
dataCategoria.save();

var dataCategoria=new Categoria({nombre:'Garage'});
dataCategoria.save();

var dataCategoria=new Categoria({nombre:'Salon'});
dataCategoria.save();

 






var usuarioEsquema = mongoose.Schema({
nombres:String,
paterno:String,
materno:String,
edad:Number,
sexo:Number,
correo:String,
clave:String
});
var usuario= mongoose.model('usuarios',usuarioEsquema);


var consumoEsquema = mongoose.Schema({ 
producto: { type: Schema.ObjectId, ref: "productos" },
cantidad: Number,
potencia: Number,
tiempo_uso:Number,
periodo:Number,
usuario: { type: Schema.ObjectId, ref: "usuarios" }
});
var consumo= mongoose.model('consumos',consumoEsquema);

 

/*
app.get('/', function(req, res){
  res.json({ mensaje: 'Un ejemcccc, express y Heroku'});
});
*/

app.get('/conf', function(req, res){
	mongoose.model('configura').find(function(error,resultado){
	if(error){
		res.status(500).json({mensaje:'Error con el servidor'});
	}else{
		res.status(200).json(resultado);
	}
  });
});

app.listen(app.get('port'))


/*
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8086))



app.listen(app.get('port'))
*/