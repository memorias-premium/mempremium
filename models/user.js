const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    cliente_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        index: {unique: true}

    }
    //El numero de cliente
});

module.exports = User = mongoose.model('user', UserSchema);