const userModel = require("../models/user.model");

const editForm = async (req, res)=>{
    try{
        const id = req.params.id

        const prevUser = await userModel.findById(id)

        res.render('edit', {prevUser})
    } catch(err){
        console.log(err);
    }
}

const edit = async (req, res)=> {
    try{
        const id = req.params.id

        await userModel.findByIdAndUpdate(id, req.body)

        res.redirect('/allUser')
    } catch(err){
        console.log(err);
    }
}

module.exports = {editForm, edit}