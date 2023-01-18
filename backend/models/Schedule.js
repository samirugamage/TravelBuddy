const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for Schedule data 
const ScheduleSchema = new Schema({

    scheduleID : {
            type : String,
            required: false
    },  
    
    startDate : {
            type : Date,
            required :false
    },

    endDate : {
            type : Date,
            required :false
    },
        
    customerName: {
            type : String,
            required :false
    },
        
    driverName : {
            type : String,
            required :false
    },

    publicTransport : {
                type : String,
                required :false
    }



})

const Schedule = mongoose.model("Schedule",ScheduleSchema);//(table name , document name),Schedule name

//exporting initialized Schedule data model
module.exports = Schedule;