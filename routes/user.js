
const express=require('express');
const Company=require('../models');

const Company=model.Company;

const router=express.Router();
const userController=require('../controllers/userController');

router.get('/',userController.userIndex)
router.get('/create',userController.userCreate)
router.get('/company/create',(req,res,next)=>{
    Company.create({
        name: "My super company"
      })
      .then((newCompany) => {
        // The get() function allows you to recover only the DataValues of the object
        console.log(newCompany.get())
      })
      .catch((err) => {
        console.log("Error while company creation : ", err)
      })
});

module.exports=router;


