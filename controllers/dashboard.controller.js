const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs')

const register = async (req, res)=> {
    console.log(req.body);
    
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(req.body, hashedPassword);
    
    const {password, ...theRest} = req.body
    
    try{
    const newUser = new userModel({password: hashedPassword, ...theRest});
        const saveUser = await newUser.save()

        console.log(saveUser);  
        // res.redirect('/allUser')
        
        res.redirect('/auth/login')
    }
    catch(err){
        console.log(err);
    }
}

const loginForm = (req, res)=> {
    res.render('login')
}


const login = async (req, res)=> {
    console.log(req.body);
    
    try{
        const user = await userModel.findOne({email: req.body.email})
        
        if(!user) {
            res.status(400).json({message: "go away from me"})

        }
            const verify = await bcrypt.compare(req.body.password, user.password)
            
            console.log(verify);
            
            if(verify){
                res.render('dashboard', {lastName: user.lastName})
            } else{
                res.status(401).send({message: "who are you?"})
            }
    }catch(err) {
        console.log(err);
    }
}

module.exports = {register, login, loginForm}