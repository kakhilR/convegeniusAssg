const express = require('express');
const { createSurvey, getQuestions } = require('../controllers/quizQues');


const router = express.Router()

router.post('/add-data',createSurvey)
router.get('/questions',getQuestions)



module.exports = router;