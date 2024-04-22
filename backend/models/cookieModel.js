
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
    temperature:{
        type : Number,
        required : true
    },
    baking_time :{
        type : Number,
        required : true
    },
    createdAt:{
        type : Date,
        default : Date.now,
    }
});

const cookie = mongoose.model("cookie" , cookieSchema);
module.exports =cookie;