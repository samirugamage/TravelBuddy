const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const driverSchema = new Schema(
    {
        Full_name : {type:String,
            required :false},//name string is required checked via backend validation
    

        Address : {type : String,
            required:false},

        Email : {type : String,
            required:false},
        
        Contact_Number : {type : String,
            required:false},
        
        NIC_Number: {type : String,
            required:false},

        VehicleNum: {type : String,
            required:false},

        VehicleType: {type : String,
            required:false},

        Password: {type : String,
            required:false}
            
    }
)

const Driver = mongoose.model("Driver",driverSchema); //(table name ,document name),Schema name

module.exports = Driver; 