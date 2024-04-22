
const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    pass:{
        type: String,
        require: true,
    }
});

const auth = mongoose.model("auth" , authSchema);
module.exports =auth;