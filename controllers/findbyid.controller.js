const findingById = async (req, res)=> {
    try{
        const id = req.body.searchEngine


        console.log("Id found:", id);
        
        const dbuser = await userModel.findById(id)

        res.json(dbuser)
    } catch(err){
        console.log(err);
    }
}

module.exports = {findingById}