const userModel = require("../models/user.model");

const dashboard = async (req, res)=> {
    res.render('dashboard', {lastName: req.body.lastName})
    console.log(req.body);

    try{
        const newUser = new userModel(req.body);
        const saveUser = await newUser.save()

        console.log(saveUser);
        
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {dashboard}