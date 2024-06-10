const {Schema, model} = require('../connection')
const contactSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});
module.exports = model('contact', contactSchema)