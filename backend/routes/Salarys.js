
const {multiply} = require('mathjs');
const router = require("express").Router();
let Salary = require ("../models/Salary");




////////////////////////////////////////create a salary input//////////////////////////////////////

router.route("/add").post(async(req,res)=>{ //loads http://localhost:8070/salary/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd

const emp_ID= req.body.emp_ID;
const month = req.body.month;
const basicSalary = Number(req.body.basicSalary);
const otRate = Number(req.body.otRate);
const otTime = Number(req.body.otTime);
const otSalary = Number(req.body.otSalary)
const bonusSalary = Number(req.body.bonusSalary);

// const {emp_ID,basicSalary,otRate,otTime,bonusSalary}  = req.body;
// const otSalary = multiply(otTime , otRate)
const totalSalary = (( basicSalary - 0) + (otSalary - 0) + (bonusSalary - 0));




const newSalary = new Salary({
    emp_ID,

    month,
    basicSalary,
    otSalary,
    bonusSalary,
    totalSalary

    


})

//validation of event name if exists 
       

const salary = await Salary.findOne({ emp_ID });

    if (salary)

    return res.status(400).json({ msg: "This event already exists." });
// console.log(totalSalary);

    newSalary.save().then(()=>{  //passing values through via document
        res.json("Salary Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})



////////////////////////////////view ALL salary events///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/salary

    Salary.find().then((Salarys)=>{//godk gnn ona nm findbyid
        res.json(Salarys)

    }).catch((err)=>{
        console.log(err)
    })
})


////////////////////////////////Update an salary///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take empID and update only the relevant employees' salary only
    //loads http://localhost:8070/Salarys/update 
    let empId = req.params.id;
    const { emp_ID,basicSalary,otRate,otTime,bonusSalary}  = req.body; //dStructure


    // const {emp_ID,basicSalary,otRate,otTime,bonusSalary}  = req.body;
const otSalary = multiply(otTime , otRate)
const totalSalary = (( basicSalary - 0) + (otSalary - 0) + (bonusSalary - 0));

    const updateSalary = {
        emp_ID,
        month,
       basicSalary,
    otRate,
    otTime,
  
    bonusSalary,
    totalSalary
    }
    const update = await Salary.findByIdAndUpdate(empId,updateSalary).then(() => {//then indicate a promise message
        //await is waiting for the function to complete

        res.status(200).send({status: "Salary updated"})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error with Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////paid a Salary///////////////////////////////////////

router.route("/paid/:id").delete(async(req,res) => {

    let empId = req.params.id;  
    await Salary.findByIdAndDelete(empId).then(() => {
        res.status(200).send({status : "Salary Paid"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Payinging salary details" , error: err.message});//500->internal server error
    })
})

////////////////////////////////View only one Salary///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let empId = req.params.id;  
    const salary = await Salary.findById(empId).then((salary) => {
        res.status(200).send({status : "Salary Fetched", salary : salary});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with getting salary details" , error: err.message});
    })
})

module.exports = router; 

