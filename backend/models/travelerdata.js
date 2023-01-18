const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for traveler data 
const travelerSchema = new Schema({

    startDate : {
        type : Date,
        required : false

    },
    

    endDate : {
        type : Date,
        required : false

    },

    weather : {
        type : String,
        required : false

    },

    nooftraveler : {
        type : Number,
        required : false

    },

    areasearching : {
        type : String,
        required : false

    },

    activitieswish : {
        type : String,

        required : false

    },

    // comfatravelwith : {
    //     type : String,
    //     required : false

    // },

    // needvehical : {
    //     type : String,
    //     required : false

    // },

    transporttype : {
        type : String,
        required : false

    },

    // vehical : {
    //     type : String,
    //     required : true
    // },

    needguide : {
        type : String,
        required : false

    },

    // guidetype : {
    //     type : String,
    //     required : false

    // },

    // guidelang : {
    //     type : String,
    //     required : false

    // },

    accommodation : {
        type : String,
        required : false

    },

    accommodationprefer : {
        type : String,
        required : false

    }

    



})

const TravelerData = mongoose.model("TravelerData",travelerSchema);

//exporting initialized traveler data model
module.exports = TravelerData;