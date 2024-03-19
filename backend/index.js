const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const NoteModel = require('./models/NotesModel')
const dotenv = require('dotenv').config()
const connectDB = require('./database/connection')
const bodyParser = require('body-parser');

const app = express()
app.use(cors())
app.use(express.json())

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//DB Connection
connectDB()

// app.use('/',(req,res)=>{
//     res.send('Home Route.')
//     res.statusCode = 200
// })

// API
app.post('/createNote',(req,res)=>{
    NoteModel.create(req.body)
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err))
})
app.get('/',(req,res)=>{
  NoteModel.find({})
   .then(notes=>res.json(notes))
   .catch(err=>res.json(err))
})

// API endpoint to create a new user
// app.post('/createNote', async (req, res) => {
//     try {
//         if (!req.body) {
//             return res.status(400).send({ message: "Content can not be empty!" });
//         }
//         // Create a new employee
//         const noteCreated = new NoteModel({
//             note: req.body.note,
//         });

//         // Save the employee in the database
//         await noteCreated.save();
//     } catch (err) {
//         res.status(500).send(err.message || "Some error occurred while creating a create operation");
//     }
//   });

  app.get('/getNote/:id',(req,res)=>{
    const id = req.params.id;
    NoteModel.findById({_id:id})
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err))
  })

  app.put('/updateNote/:id',(req,res)=>{
    const id = req.params.id
    NoteModel.findByIdAndUpdate({_id:id},{
        note:req.body.note
    })
    .then(note=>res.json(users))
    .catch(err=>res.json(err))
  })

  app.delete('/deleteNote/:id',(req,res)=>{
    const id = req.params.id;
    NoteModel.findByIdAndDelete({_id:id})
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err))
  })


app.listen(3001,()=>{
    console.log('Server is Ruuning at: http://localhost:3001')
})