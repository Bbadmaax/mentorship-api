import mongoose from "mongoose";


const Taskschema = new mongoose.Schema({
   title : {
    type : String,
    required : true
   },
   description : {
    type : String
   },
   status : {
    type : String ,
    enum : ['pending', 'in progress', 'completed'],
    default : 'pending'
   },
   dueDate : Date,
   createdBy : {
    type : mongoose.Schema.ObjectId,
    ref : 'User',  // xirir la leh model User 
    required : true // waa qasab inuu jiro cid abuurtay
   },
}, {timestamps : true});

const Task = mongoose.model("Task", Taskschema);
export default Task;