const router = require("express").Router();
let AlreadyPaidSalary = require ("../models/AlreadyPaidSalary");

///////////////////////

//////////////////create a salary input//////////////////////////////////////

router.route("/add").post((req,res)=>{ //loads http://localhost:8070/alreadypaidsalary/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd

// const  emp_ID= req.body.emp_ID;
// const basicSalary = Number(req.body.basicSalary);
// const otRate = Number(req.body.otRate);
// const otTime = Number(req.body.otTime);
// const bonusSalary = Number(req.body.bonusSalary);

const {emp_ID,basicSalary,otRate,otTime,bonusSalary}  = req.body;
const totalSalary = (( basicSalary -0) + ((otRate-0 *otTime - 0) ) +( bonusSalary - 0));
// const otSalary = (otTime*otRate);


const newAlreadyPaidSalary = new AlreadyPaidSalary({
    emp_ID,
    basicSalary,
    otRate,
    otTime,
    bonusSalary,
    totalSalary


})

newAlreadyPaidSalary.save().then(()=>{  //passing values through via document
        res.json("Salary Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})


module.exports = router; 
