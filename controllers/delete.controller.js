const userModel = require("../models/user.model")

const deleteInput = async (req, res)=> {
    try{
        const id = req.params.id

        await userModel.findByIdAndDelete(id)

        res.redirect('/allUser')
    } catch(err){
        console.log(err);
        res.status(500).send('Could not delete')
    }
}

module.exports = {deleteInput}