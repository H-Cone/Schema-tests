const userModel = require("../models/user.model");

const findOne =  async (req, res)=> {
    try{
        const user = await userModel.findOne({lastName: req.body.searchInput})

        res.json(user)
    } catch(err){
        console.log(err);
    }
}

module.exports = {findOne}