const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for Location data 
const LocationSchema = new Schema({

    LocationName : {
            type : String,
            required :false
    },

    description : {
            type : String,
            required :false
    },
        
    district: {
            type : String,
    },
        
    linkPlace : {
            type : String,
            required :false
    }



})

const Location = mongoose.model("Location",LocationSchema);

//exporting initialized Location data model
module.exports = Location;