const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {required: true, type: String, minlength: 2},
    lastName: {required: true, type: String, minlength: 2},
    email: {required: true, type: String, unique: true},
    age: {required: true, type: Number},
    phoneNum: {required: true, type: String},
    password: {required: true, type: String},
    gender: {required: true, type: String, enum: ["male", "female"]},
    verificationStatus: {required: true, type: Boolean, default: false}
}, {timestamps: true})

const userModel = mongoose.model("Client", userSchema)

module.exports = userModel;