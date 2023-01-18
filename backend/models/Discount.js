const mongoose = require('mongoose');
const Schema = mongoose.Schema; //creating an object
const discountSchema = new Schema(
    {
        // name : {type:String,
        // required: true},//name string is required checked via backend validation
    

           discountname : {type : String,
             required :true},

           discountid : {type : String,
            required :true},
        
           discounttype : {type : String,
            required :true},
        
          discountpercentage : {type : Number,
            required :true},

            message: {type : String,
                required :true}

               
    }
)

const Discount = mongoose.model("Discount",discountSchema); //(table name ,document name),Schema name

module.exports = Discount; 