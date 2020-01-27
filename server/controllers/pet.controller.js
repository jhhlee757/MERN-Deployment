const { Pet } = require('../models/pet.models');

module.exports.createPet = (request, response) => {
    const {name, type, description, skill1, skill2, skill3, likes} = request.body;
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
        likes

    })
        .then(pet=>response.json(pet))
        .catch(err=>response.json(err))
} 

module.exports.getAllPets = (request,response) => {
    Pet.find({}).sort("type").exec()
        .then(pet => response.json(pet))
        .catch(err => response.json(err));
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}