const {Schema, model} = require('../connection')
const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    cpassword:String
});
module.exports = model('admin', userSchema)