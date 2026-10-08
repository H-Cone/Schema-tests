const userModel = require("../models/user.model");

const editForm = async (req, res)=>{
    try{
        const prevUser = await userModel.findOne({email: "pyxuwune@mailinator.com"})

    // console.log("ID:", id);
console.log("User:", prevUser);
        res.render('edit', {prevUser})
    } catch(err){
        console.log(err);
    }
}

const edit = async (req, res)=> {
    try{
        await userModel.findOneAndUpdate({email: req.body.email}, req.body)

        res.redirect('/allUser')
    } catch(err){
        console.log(err);
    }
}

module.exports = {editForm, edit}