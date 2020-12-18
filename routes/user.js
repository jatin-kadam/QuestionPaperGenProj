const express = require('express')
const router = express.Router();

const question = require('../models/question.model');

router.get('/', (req,res) => {
    //var totalMarks=20;
    var marksLeft;
    var difficultyLevel=req.body.difficultyLevel;
    var typeofQuestion=req.body.typeofQuestion;
    //for(let step=0;step<maxMarks;step++){
        /*question.findOne()
        .then(ques => res.json(ques))
        .catch(err => res.status(400).json('Error:'+ err));*/
    
    
    question.aggregate([
        {$match:{difficultyLevel:difficultyLevel,typeofQuestion:typeofQuestion}},
        //{$sample:{size:3}},
        {$project:{_id:0,question:1}}
    ])
    .then(ques => res.json(ques))
    .catch(err => res.status(400).json('Error:'+ err))
});



router.post('/' , (req,res) => {
    const stream = req.body.stream;
    const semester= req.body.semester;
    const subject = req.body.subject;
    const ques = req.body.question;
    const difficultyLevel = req.body.difficultyLevel;
    const module = req.body.module;
    const typeofQuestion = req.body.typeofQuestion;
    //const bloomsTaxonomy = req.body.bloomsTaxonomy

    const newquestion = new question({
        stream,semester,subject,ques,difficultyLevel,
        module,typeofQuestion
    });

    newquestion.save()
    .then(() => res.json('question added!'))
    .catch(err => res.status(400).json('Error:'+err));
});

router.delete('/:id', (req,res) => {
    ques.findByIdAndDelete(req.params.id)
    .then(() => res.json('Deleted.'))
    .catch(err => res.status(400).json('Error:'+err));
});

module.exports = router;


