const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    stream:{
        type: String,
        required: true
    },
    semester:{
        type: Number,
        //required:true
    },
    subject:{
        type: String,
        //required:true
    },
    ques:{
        type: String,
        //required:true
    },
    difficultyLevel:{
        type: String,
        //required:true
    },
    module:{
        type: String,
        //required:true
    },
    minMarks:{
        type: Number,
        //required:true
    },
    maxMarks:{
        type: Number,
        //required:true
    },
    typeofQuestion:{
        type: String,
        //required:true
    }
});

const question = mongoose.model('que',questionSchema);
module.exports = question;
