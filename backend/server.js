const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070; 

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologL: true,
    useDindAndModify: false
});


const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb Connection success!");
});

//-------------------------------------------Traveler Data--------------------------------------------
//Accessing router/travelerdatas.js file
const travelerdataRouter =  require("./routes/travelerdatas.js");

//When calling to /traveler it also calling to travelerdataRouter variable assign above.
app.use("/travelerdata",travelerdataRouter);

//samiru
//---------------------------------------------------Events------------------------------------------------------
const eventRouter = require("./routes/Events.js")
app.use("/event",eventRouter); //loads http://localhost:8070/events.js




//Prathila
//---------------------------------------------------Train Time Table------------------------------------------------------
const trainRouter = require("./routes/TimeTableTrains.js")
app.use("/train",trainRouter); //loads http://localhost:8070/TimeTableTrain

//---------------------------------------------------Schedule------------------------------------------------------
const scheduleRouter = require("./routes/Schedules.js")
app.use("/schedule",scheduleRouter); //loads http://localhost:8070/Schedules

//Miyuru Nimesh
//---------------------------------------------------Trips(Routes)-----------------------------------------------------
const tripRouter = require("./routes/Trips.js")
app.use("/trip",tripRouter); //loads http://localhost:8070/Trips.js


// Oshand
// -----------------------------------------------------------------Community-----------------------------------------------
const communityRouter = require("./routes/Communitys.js")
app.use("/community",communityRouter); //loads http://localhost:8070/community.js




// Tharu

//---------------------------------------------------Hotels------------------------------------------------------
const hotelRouter = require("./routes/Hotels.js")
app.use("/hotel",hotelRouter); //loads http://localhost:8070/Hotels.js

//---------------------------------------------------Location------------------------------------------------------
const locationRouter = require("./routes/Locations.JS")
app.use("/location",locationRouter); //loads http://localhost:8070/Locations.js



// Ravindi

const travelerRouter = require("./routes/Travelers.js")
app.use("/traveler",travelerRouter); //loads http://localhost:8070/Travelers.js

const guideRouter = require("./routes/Guides.js")
app.use("/guide",guideRouter); //loads http://localhost:8070/Guides.js

const driverRouter = require("./routes/Drivers.js")
app.use("/driver",driverRouter); //loads http://localhost:8070/Drivers.js

const hotelARouter = require("./routes/HotelAs.js")
app.use("/hotelA",hotelARouter); //loads http://localhost:8070/HotelAs.js

// Probodha
const recordRouter = require("./routes/Records.JS")
app.use("/record",recordRouter); //loads http://localhost:8070/Locations.js

// Vijini

const salaryRouter = require("./routes/Salarys.js")
app.use("/salary",salaryRouter); //loads http://localhost:8070/Salarys.js

const AlreadyPaidSalaryRouter = require("./routes/AlreadyPaidSalarys.js")
app.use("/alreadypaidsalary",AlreadyPaidSalaryRouter);//loads http://localhost:8070/alreadypaidsalary.js

app.listen(PORT, () => {
    console.log(`Server is up and running on port number:  ${PORT}`)

});


// const mongoose = require('mongoose')
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://mongodb+srv://itpgroup03:prathila5@cluster0.hvvycoq.mongodb.net/traveler_db?retryWrites=true&w=majority";
// const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("cmplnts").collection("cmplnt");
//   // perform actions on the collection object
//   client.close();
// });


//     const cmpsRouter =require("./routes/cmplnts.js");
//     connect.use("/cmp",cmpsRouter);