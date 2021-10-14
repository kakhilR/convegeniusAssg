const mongoose = require('mongoose')


const answerSchema = new mongoose.Schema({
   questionId:{type:mongoose.Schema.Types.ObjectId,ref:'Survey',required:true},
   answer:{type:String,default:""}
},
{timestamps: true}
)

module.exports = mongoose.model('Answer',answerSchema)