const mongoose = require('mongoose');
const url = "mongodb+srv://prachik3002:prachik3002@cluster0.8muaqrv.mongodb.net/mp300?retryWrites=true&w=majority&appName=Cluster0"; 
mongoose.connect(url)

.then((result) => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err)
});

module.exports = mongoose;