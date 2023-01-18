const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for time table train data 
const TimetrainSchema = new Schema({

    trnspodtType: {
        type : String,
        required: false
    }, 

    trainName : {
        type : String,
        required: false
    }, 

    startStation : {
            type : String,
            required: false
    },  
    
    endStation : {
            type : String,
            required :false
    },

    startTime : {
            type : String,
            required :false
    },
        
    endTime: {
            type : String,
            required :false
    },
        



})

const TimeTrain = mongoose.model("TimeTableTrain",TimetrainSchema);

//exporting initialized traveler data model
module.exports = TimeTrain;