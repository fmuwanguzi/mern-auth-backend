const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLength: 8
    },
    date:{
        type:Data,
        default: Date.now()
    }
});

const user = mongoose.model('User', userSchema);

module.exports = User;