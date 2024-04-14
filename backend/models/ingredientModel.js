const mongoose = require('mongoose');

//  creating structure/schema of COLLECTION IN MONGODB JUST LIKE RDBMS (colms)
const ingredientSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    quantity:{
        type : Number,
        required :[true , "Quantity must be provided"]
    },
    createdAt:{
        type : Date,
        default : Date.now(),
    }
});

const ingredient = mongoose.model("ingredient" , ingredientSchema);
module.exports =ingredient;