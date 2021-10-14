const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Telegraf = require('telegraf');
// const Markup = require('telegraf/markup')
// const Extra = require('telegraf/extra')
const { surveyQuestions } = require('../controllers/quizQues');

require('dotenv').config();

const Port = 4000;

mongoose.connect(process.env.MongoURI,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true}).then(()=>console.log('database connected')).catch((err)=>console.log(err))


const tgBot = new Telegraf(process.env.API_TOKEN)

tgBot.start((ctx)=>  ctx.replyWithMarkdown("Hello! \n"));

tgBot.hears('hi',(ctx)=>{
    ctx.replyWithMarkdown("Hi "+ ctx.from.first_name);
});

tgBot.hears("questions", async (ctx)=>{ 
    let ques = await surveyQuestions()
    
})

tgBot.launch();

const QuizRouter = require('./routes/createQuiz')


app.use('/api',QuizRouter)


app.listen(Port,()=>{console.log(`listening on ${Port}`)})
