const express = require('express');
const router = express.Router();
const Model = require('../Models/User');

router.post('/add', (req,res) => {
    console.log(req.body);
    // Storing data to mongoDB
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
});

router.post('/authenticate', (req,res) => {
    Model.findOne(req.body)
    .then((result) => {
        if (result) res.json(result);
        else res.status(400).json({message: 'login failed'});
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/authenticate', (req,res) => {
    Model.findOne(req.body)
    .then((result) => {
        if (result) res.json(result);
        else res.status(400).json({message: 'login failed'});
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

//to get the data 
router.get('/getall',(req,res) => {
    // empty brackets will give all the data from the database
    Model.find({})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    }); 
});

module.exports = router;