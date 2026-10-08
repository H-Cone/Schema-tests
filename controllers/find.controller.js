const userModel = require("../models/user.model");

const finding = async (req, res)=> {
    try{
        const allUser = await userModel.find()

        res.render('records', {allUser})
    } catch(err){
        console.log(err);
    }
}

module.exports = {finding}