const {Schema, model} = require('../connection')

const projectSchema = new Schema({
    ptitle : String,
    pcategory : String,
    pdescription : String,
    poragnaisation : String,
    pimage : String,
    verified: {type: Boolean, default: false}
});

module.exports = model('project', projectSchema);