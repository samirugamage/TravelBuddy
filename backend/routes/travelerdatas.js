const router = require("express").Router();
let travelerdata = require("../models/travelerdata");


router.route("/adddata").post((req,res)=>{//http://localhost:8070/travelerdata/adddata

    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const weather = req.body.weather;
    const nooftraveler = Number(req.body.nooftraveler);
    const areasearching = req.body.areasearching;
    const activitieswish = req.body.activitieswish;
    const comfatravelwith = req.body.comfatravelwith;
    const needvehical = req.body.needvehical;
    const transporttype = req.body.transporttype;
    const vehical = req.body.vehical;
    const needguide = req.body.needguide;
    const guidetype = req.body.guidetype;
    const guidelang = req.body.guidelang;
    const accommodation = req.body.accommodation;
    const accommodationprefer = req.body.accommodationprefer;
    

    const newtravelerdata = new travelerdata({

        startDate,
        endDate,
        weather,
        nooftraveler,
        areasearching,
        activitieswish,
        comfatravelwith,
        needvehical,
        transporttype,
        vehical,
        needguide,
        guidetype,
        guidelang,
        accommodation,
        accommodationprefer

    })

    newtravelerdata.save().then(()=>{
        res.json("Traveler Data Added")
    }).catch((err)=>{
        console.log(err);
    })


})

//get all data

router.route("/").get((req,res)=>{ //loads http://localhost:8070/travelerdata/
    travelerdata.find().then((traveler)=>{
        res.json(traveler)

    }).catch((err)=>{
        console.log(err)
    })
})



////////////////////////////////Update an event///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will update only the relevant id data only
    
    // http://localhost:8070/travelerdata/update 

    let travelerId = req.params.id;
    const {weather, nooftraveler}  = req.body; //dStructure - single line method

    const updateTraveler = {
        weather,
        nooftraveler,
        
    }
    const update = await travelerdata.findByIdAndUpdate(travelerId,updateTraveler).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "Traveler updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete an event///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let travelerId = req.params.id;  
    await travelerdata.findByIdAndDelete(travelerId).then(() => {
        res.status(200).send({status : "Record deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting event" , error: err.message});
    })
})


////////////////////////////////View only one event///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let travelerId = req.params.id;  
    const travelerd = await travelerdata.findById(travelerId).then((travelerd) => {
        res.status(200).send({status : "Event Fetched", data : travelerd});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Event" , error: err.message});
    })
})


module.exports = router;