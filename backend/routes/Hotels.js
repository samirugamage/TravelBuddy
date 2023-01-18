const router = require("express").Router();
let Hotel = require("../models/Hotel");


router.route("/add").post((req,res)=>{//http://localhost:8070/hotel/add

    //getting the below variables via requesting from backend to frontend

    const regNum = req.body.regNum;
    const hotelName = req.body.hotelName;
    const description = req.body.description;
    const district = req.body.district;
    const linkPlace = req.body.linkPlace;

    const newHotel = new Hotel({

        regNum,
        hotelName,
        description,
        district,
        linkPlace

    })

    newHotel.save().then(()=>{ //passing values through via document
        res.json("Hotel Data Added")
    }).catch((err)=>{ //exception handling
        console.log(err);
    })


})

//get all data

router.route("/").get((req,res)=>{ //loads http://localhost:8070/Hotels/
    Hotel.find().then((Hotels)=>{
        res.json(Hotels)

    }).catch((err)=>{
        console.log(err)
    })
})



////////////////////////////////Update a Hotel///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will update only the relevant id data only
    
    //loads http://localhost:8070/Hotel/update/

    let HotelId = req.params.id;
    const { regNum,hotelName,description,district,linkPlace}  = req.body; //dStructure - single line method

    const updateHotel = {
        regNum,
        hotelName,
        description,
        district,
        linkPlace
        
    }
    const update = await Hotel.findByIdAndUpdate(HotelId,updateHotel).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "Hotel updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a Hotel///////////////////////////////////////

//http://localhost:8070/Hotel/delete/6320997712ade04204032176

router.route("/delete/:id").delete(async(req,res) => {

    let HotelId = req.params.id;  
    await Hotel.findByIdAndDelete(HotelId).then(() => {
        res.status(200).send({status : "Record deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting hotel" , error: err.message});
    })
})


////////////////////////////////View only one Hotel///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let HotelId = req.params.id;  
    const Hotel = await Hotel.findById(HotelId).then((Hotel) => {
        res.status(200).send({status : "Hotel Fetched", Hotel});

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Hotel" , error: err.message});
    })
})


module.exports = router;