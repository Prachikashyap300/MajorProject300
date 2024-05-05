const {Schema, model} = require('../connection')

const projectSchema = new Schema({
    ptitle : String,
    pcategory : String,
    pdescription : String,
    // poragnaisation : String,
    // pimage : File
});

module.exports = model('project', projectSchema);