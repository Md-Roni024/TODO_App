const express = require('express')
const router = express.Router()
const TodoModel = require('../models/NotesModel')

router.post('/createUser',(req,res)=>{
    TodoModel.create(req.body)
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err))
})