

//IT21055058
//Kumara L.L.M.N.
//Route Management




const router = require("express").Router();
let Trip = require ("../models/Trip");


////////////////////////////////////////create an Trip//////////////////////////////////////

router.route("/add").post(async (req,res)=>{ //loads http://localhost:8070/trip/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd

// const name = req.body.name;
// const eventType = req.body.eventType;
// const description = req.body.description;
// const date = req.body.date;
// const place = req.body.place;

const {route_ID, cust_name, guide_name, startDate, endDate, startPlace, endPlace, Locations}  = req.body;

const newTrip = new Trip({
    route_ID, 
    cust_name, 
    guide_name, 
    startDate, 
    endDate, 
    startPlace, 
    endPlace, 
    Locations


})

//validation of event name if exists 
       

const trip = await Trip.findOne({ route_ID });
const guide = await Trip.findOne({ guide_name });

    // if (trip)
    //     return res.status(400).json({ msg: "This event already exists." });
    //     newEvent.save().then(()=>{  //passing values through via document
    //         res.json("Event Added") //if successfully added
    //     }).catch((err)=>{ //exception handling
    //         console.log(err);

if (trip)
        return res.status(400).json({ msg: "This Trip already exists." });
         
 newTrip.save().then(()=>{  //passing values through via document
        res.json("Trip Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})



////////////////////////////////view ALL Trips///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/trip/

    Trip.find().then((trips)=>{
        res.json(trips)

    }).catch((err)=>{
        console.log(err)
    })
})


////////////////////////////////Update an Trip///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take TripID and update only the relevant Trip only
    //loads http://localhost:8070/trip/update 
    let tripId = req.params.id;
    const {route_ID, cust_name, guide_name, startDate, endDate, startPlace, endPlace, Locations}  = req.body; //dStructure

    const updateTrip = {
        route_ID, 
        cust_name, 
        guide_name, 
        startDate, 
        endDate, 
        startPlace, 
        endPlace, 
        Locations
    }
    const update = await Trip.findByIdAndUpdate(tripId,updateTrip).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "Trip updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating Trip" , error: err.message});
    })
    

}) 


////////////////////////////////Delete an Trip///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {
    //loads http://localhost:8070/trip/delete

    let tripId = req.params.id;  
    await Trip.findByIdAndDelete(tripId).then(() => {
        res.status(200).send({status : "Trip deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Trip" , error: err.message});
    })
})

////////////////////////////////View only one Trip///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {
    //loads http://localhost:8070/trip/get


    let tripId = req.params.id;  
    const trip = await Trip.findById(tripId).then((trip) => {
        res.status(200).send({status : "Trip Fetched", trip : trip});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Trip" , error: err.message});
    })
})

module.exports = router; 

