const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for Hotel data 
const HotelSchema = new Schema({

    regNum : {
            type : String,
            required: false
    },  
    
    hotelName : {
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
    }



})

const Hotel = mongoose.model("Hotel",HotelSchema);

//exporting initialized Hotels data model
module.exports = Hotel;