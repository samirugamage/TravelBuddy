const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const hotelASchema = new Schema(
    {
        Full_name : {type:String,
        required: false},//name string is required checked via backend validation
    

        Address : {type : String,
        required :false},

        Email : {type : String,
            required :false},
        
        Contact_Number : {type : String,
            required :false},
        
        NIC_Number: {type : String,
            required :false},

        Password: {type : String,
            required :false},
            
    }
)

const HotelA = mongoose.model("HotelA",hotelASchema); //(table name ,document name),Schema name

module.exports = HotelA; 