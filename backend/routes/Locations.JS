const router = require("express").Router();
let Location = require("../models/Location");


router.route("/add").post(async(req,res)=>{//http://localhost:8070/location/add

    const  LocationName = req.body.LocationName;
    const description = req.body.description;
    const district = req.body.district;
    const linkPlace = req.body.linkPlace;

    const newLocation = new Location({

        LocationName,
        description,
        district,
        linkPlace

    })

    
    const loc = await Location.findOne({ LocationName });

    if (loc)

    return res.status(400).json({ msg: "This Location already exists." });

    newLocation.save().then(()=>{ //passing values through via document
        res.json("Location Data Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err); 
    })


})

//get all data

router.route("/").get((req,res)=>{ //loads http://localhost:8070/Location/
    Location.find().then((Locations)=>{
        res.json(Locations)

    }).catch((err)=>{
        console.log(err)
    })
})



////////////////////////////////Update a Location///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will update only the relevant id data only
    
    //loads http://localhost:8070/Location/update/ 

    let LocationId = req.params.id;
    const { LocationName,description,district,linkPlace}  = req.body; //dStructure - single line method

    const updateLocation = {
        LocationName,
        description,
        district,
        linkPlace
        
    }
    const update = await Location.findByIdAndUpdate(LocationId,updateLocation).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "Location updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a location///////////////////////////////////////

 //http://localhost:8070/Location/delete/6320997712ade04204032176

router.route("/delete/:id").delete(async(req,res) => {

    let LocationId = req.params.id;  
    await Location.findByIdAndDelete(LocationId).then(() => {
        res.status(200).send({status : "Record deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Location" , error: err.message});
    })
})


////////////////////////////////View only one location///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let LocationId = req.params.id;  
    const location = await Location.findById(LocationId).then((location) => {
        res.status(200).send({status : "Location Fetched", location : location});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Location" , error: err.message});
    })
})


module.exports = router;