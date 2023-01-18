const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for Location data 
const RecordSchema = new Schema({

    name : {
            type : String,
            required :false
    },

    email : {
            type : String,
            required :false
    },
        
    message: {
            type : String,
    },
    
    cmptype: {
        type : String,
    },

    language: {
        type : String,
    },


     cid: {
        type : String,
    }
       



})

const Record = mongoose.model("Record",RecordSchema);

//exporting initialized Location data model
module.exports = Record;