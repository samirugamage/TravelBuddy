//IT21098246
//Samiru J.G.S
//Event Management

const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const eventSchema = new Schema(
    {
        name : {type:String,
        required: false},//name string is required checked via backend validation
    

        eventType : {type : String,
        required :false},

        description : {type : String,
            required :false},
        
        place : {type : String,
            required :false},
        
        date : {
                type : Date,
                required : false
            },
        eventLink : {
                type : String,
                required : false
            }

        

               
    }
)

const Event = mongoose.model("Event",eventSchema); //(table name ,document name),Schema name

module.exports = Event;