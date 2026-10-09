const express = require('express')
const app = express();
const mongoose = require('mongoose')
const userModel = require('./models/user.model');
const { dashboard } = require('./controllers/dashboard.controller');
const { signup } = require('./controllers/authentication.controller');
const { edit, editForm } = require('./controllers/edit.controller');
const { deleteInput } = require('./controllers/delete.controller');
const { findingById } = require('./controllers/findbyid.controller');
const { findOne } = require('./controllers/findone.controller');
const { finding } = require('./controllers/find.controller');
require('dotenv').config();

const port = process.env.port;
const DBURI = process.env.mongoDB_URI

const userRoute  = require('./routes/auth.route');


app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))


app.use('/auth', userRoute)

app.post('/dashboard', dashboard)

app.post('/dbuser', findOne)

app.get('/editform/:id', editForm)

app.post('/edit/:id', edit)

app.post('/delete/:id', deleteInput)

app.post('/findbyid', findingById)

app.get('/allUser', finding)


app.listen(port, ()=> {
    console.log(`I am working:) ${port}`);
})

mongoose.connect(DBURI).then(()=> {
    console.log(`Connected:)`);
}).catch((err)=>{
    console.log(err);
});