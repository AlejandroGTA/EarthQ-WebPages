const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    Nombre:String,
    Apellido:String,
    User:String,
    Correo:String,
    Password: String,
    Admin:{
        type:Boolean,
        default:false
    }
});
module.exports = mongoose.model('Users',TaskSchema);
