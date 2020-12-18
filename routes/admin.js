const express = require('express')
const router = express.Router();

const question = require('../models/question.model');
const user=require('../models/user.model');

router.get('/subject', (req,res) => {
    var totalMarks=20;
    var marksLeft;
    //for(let step=0;step<maxMarks;step++){
        question.find()
        .then(ques => res.json(ques))
        .catch(err => res.status(400).json('Error:'+ err));
    
    
    /*question.aggregate([
        {$match:{difficultyLevel:"Easy"}},
        //{$sample:{size:3}},
        {$project:{question:1}}
    ])*/
});

router.get('/question', (req,res) => {
    var totalMarks=20;
    var marksLeft;
    //for(let step=0;step<maxMarks;step++){
        question.aggregate([
            {$project:{question:1}}
        ])
        .then(ques => res.json(ques))
        .catch(err => res.status(400).json('Error:'+ err));
    
    
    /*question.aggregate([
        {$match:{difficultyLevel:"Easy"}},
        //{$sample:{size:3}},
        {$project:{question:1}}
    ])*/
});

router.get('/users',(req,res)=>{
    user.find({})
    .then(users => res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));
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

module.exports=router;