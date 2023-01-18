const router = require("express").Router();
let Record = require("../models/Record");

 
 
router.route("/add").post((req,res)=>{//http://localhost:8070/record/add

    const  name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const cmptype = req.body.cmptype;
    const language = req.body.language;
    const cid = req.body.cid;



    const newRecord = new Record ({

        name,
        email,
		message,
        cmptype,
        language,
        cid

    })

    newRecord.save().then(()=>{ //passing values through via document
        res.json("Record Data Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err); 
    })


})

//get all data

router.route("/").get((req,res)=>{
    Record.find().then((Records)=>{
        res.json(Records)

    }).catch((err)=>{
        console.log(err)
    })
})



////////////////////////////////Update a Location///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will update only the relevant id data only
    
  

    let RecordId = req.params.id;
    const { name,email,message,cmptype,language,cid}  = req.body; //dStructure - single line method

    const updateRecord = {
        name,
        email,
        message,
        cmptype,
        language,
        cid
    }
    const update = await Record.findByIdAndUpdate(RecordId,updateRecord).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "record updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a location///////////////////////////////////////

 //http://localhost:8070/Location/delete/6320997712ade04204032176

router.route("/delete/:id").delete(async(req,res) => {

    let RecordId = req.params.id;  
    await Record.findByIdAndDelete(RecordId).then(() => {
        res.status(200).send({status : "Record deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Location" , error: err.message});
    })
})


////////////////////////////////View only one location///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let cid = req.params.id;  
    const record = await Record.findById(cid).then((record) => {
        res.status(200).send({status : "Record Fetched", record : record});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Location" , error: err.message});
    })
})


module.exports = router;