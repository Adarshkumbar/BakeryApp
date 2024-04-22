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
    costPerUnit:{
        type : Number,
        required : true,
    },
    createdAt:{
        type : Date,
        default : Date.now(),
    },
    // calories :{
    //     type : Number
    // }
});

const ingredient = mongoose.model("ingredient" , ingredientSchema);
module.exports =ingredient;