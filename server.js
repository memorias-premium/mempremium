const express =  require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');


const app = express();

// Bodyparser middleware
app.use(express.json());

// Recibimos la conexion de mongoDB (cambiar por la base de datos local en el servidor)
// Recordemos que la base de datos es exclusivamente para los usuarios
const db = config.get('mongoURI');

mongoose.connect(db,{ 
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB conectado..."))
  .catch(error => console.log(error));


// Definimos la ruta y los middlewares (funciones) que se ejecutan segun el verbo HTTP
app.use('/api/usb', require('./routes/api/usb'));
app.use('/api/musica', require('./routes/api/musica'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server iniciado en el puerto ${port}`));
