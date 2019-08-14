const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/expressdemo')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    city:{
        type: String,
    }
})

const User=mongoose.model('User',userSchema);
exports.User=User