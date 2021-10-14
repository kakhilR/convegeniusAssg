const mongoose = require('mongoose')


const surveySchema = new mongoose.Schema({
    question:{type:String, required:true,trim:true},
    option1:{type:String,trim:true},
    option2:{type:String,trim:true},
    option3:{type:String,trim:true},
    option4:{type:String,trim:true},
},
{timestamps: true}
)

module.exports = mongoose.model('Survey',surveySchema)