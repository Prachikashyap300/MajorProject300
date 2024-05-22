const {Schema, model} = require('../connection')
const userSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    college: String,
    course: String,
    password: String,
    cpassword: String,
    uimage: String
});
module.exports = model('user', userSchema)