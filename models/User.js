const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    mobileNo: { type: String, default: '' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePhoto: { type: String },
    lastLogin: { type: Date },
    userType: { type: String, default: 'user', enum: ['user', 'admin'] },
    status: { type: String, default: 'active', enum: ['active', 'inactive'] },

}, { timestamps: true })
//userSchema.plugin(timestamps, { index: true })
module.exports = mongoose.model('User', userSchema)