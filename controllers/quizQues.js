const Survey = require("../models/covidSurveyques");

const surveyData = [
    {question:"what is the result of your covid test",option1:"positive",option2:"negative",option3:"positive but recovered and negative",option4:"did not take the test"},
    {question:"which age category you belong",option1:"10-15",option2:"15-20",option3:"20-30",option4:"30+"},
    {question:"How many does of vaccine shot have you taken ",option1:"1 shots",option2:"2 shots",option3:"3 shots",option4:"not vaccinated"}
]

exports.createSurvey = async (req,res)=> {
    try{
        surveyData.forEach(async (d)=>{
            await new Survey(d).save() 
            return res.send({success: "true"})
       })
    }catch(err){
        res.send(err)
    }
}

exports.surveyQuestions = async () => {
    let results = await Survey.find()
    return results
}

exports.getQuestions = async (req,res)=>{
    try{
        let results = await surveyQuestions()
        if(results != null || undefined) return res.status(200).send({status:"success",data:results})
        return res.status(404).send({status:"failed"})
    }catch(err){
        res.status(500).send(err)
    }
}

