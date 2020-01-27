const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Pet needs a name"],
        minlength: [3, "Pet name must be atleast 3 characters long"]
    },
    type: {
        type: String,
        require: [true, "Pet needs a type"],
        minlength: [3, "Pet type must be atleast 3 characters long"]
    },
    description: {
        type: String,
        require: [true, "Pet needs a description"],
        minlength: [3, "Description  must be atleast 3 characters long"]
    },
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {type: Number}

}, {timestamps: true});

module.exports.Pet = mongoose.model("Pet", PetSchema)


