
const mongoose = require('mongoose');
const ingredient = require('./ingredientModel');

const cookieSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    details:[{
        ingredient: String,
        quantity: Number
    }],
    createdAt:{
        type : Date,
        default : Date.now,
    }
});

const cookie = mongoose.model("cookie" , cookieSchema);
module.exports =cookie;