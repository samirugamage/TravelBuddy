const router = require("express").Router();
let Discount = require ("../models/Discount");


////////////////////////////////////////create a discount input//////////////////////////////////////

router.route("/add").post((req,res)=>{ //loads http://localhost:8070/discount/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd


const discountname = req.body.discountname;
const discountid = req.body.discountid;
const discounttype = req.body.discounttype;
const discountpercentage = Number(req.body.discountpercentage);// get input as text at the frontend so some times at this point errors can occur
const message = req.body.message;

const newDiscount = new Discount({
   discountname,
   discountid,
   discounttype,
   discountpercentage,
   message,


})

    newDiscount.save().then(()=>{  //passing values through via document
        res.json("Discount Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})



////////////////////////////////view ALL discount events///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/discount

    Discount.find().then((Discounts)=>{//godk gnn ona nm findbyid
        res.json(Discounts)

    }).catch((err)=>{
        console.log(err)
    })
})


////////////////////////////////Update an discount///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take empID and update only the relevant employees' salary only
    //loads http://localhost:8070/discount/update
    let did = req.params.id;
    const {discountname, discountid, discounttype, discountpercentage, message}  = req.body; //dStructure

    const updateDiscount = {
        discountname,
        discountid,
        discounttype,
        discountpercentage,
        message
    }
    const update = await Discount.findByIdAndUpdate(did,updateDiscount).then(() => {//then indicate a promise message
        //await is waiting for the function to complete
        res.status(200).send({status: "Discount updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error with Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a required discount///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let did = req.params.id;  
    await Discount.findByIdAndDelete(did).then(() => {
        res.status(200).send({status : "Discount deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Discount details" , error: err.message});//500->internal server error
    })
})

////////////////////////////////View only one discount///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let did = req.params.id;  
    const discount = await discount.findById(did).then((discount) => {//see if error occured D capital
        res.status(200).send({status : "Discount Fetched"});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with getting discount details" , error: err.message});
    })
})

module.exports = router; 
