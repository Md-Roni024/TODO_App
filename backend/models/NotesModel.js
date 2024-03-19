const mongoose = require('mongoose')
const TodoSchema = new mongoose.Schema({
    note:{
        type:String,
        required:true
    }
})

const TodoModel = mongoose.model('notes',TodoSchema)
module.exports = TodoModel