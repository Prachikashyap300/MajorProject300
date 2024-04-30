const {Schema, model} = require('../connection')

const projectSchema = new Schema({
    ptitle : String,
    // pprice : String,
    // pcategory : String,
    pdescription : String,
});

module.exports = model('project', projectSchema);