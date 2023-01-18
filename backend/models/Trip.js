
//IT21055058
//Kumara L.L.M.N.
//Route Management

const mongoose = require('mongoose');

const Schema = mongoose.Schema; //creating an object

const tripSchema = new Schema(
    {

        route_ID : {type:String,
        required: false},//name string is required checked via backend validation

        cust_name : {type: String,
        required: false},

        guide_name : {type: String,
        required: false},
    

        startDate : {type : Date,
        required :false},

        
        endDate : {type : Date,
        required :false},

        startPlace : {type : String,
        required :false},
    
            
        endPlace : {type : String,
        required :false},

        Locations: {type : String,
            required :false}
       
    }
)

const Trip = mongoose.model("Trip",tripSchema); //(table name ,document name),Schema name

module.exports = Trip; 
