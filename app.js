const express = require('express');
const  mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',() =>{
    console.log('Connected to DB!');
});

const userRouter = require('./routes/user');
app.use('/user',userRouter);
const adminRouter = require('./routes/admin');
app.use('/admin',adminRouter);

app.listen(8000, () => {
    console.log("server started");
})