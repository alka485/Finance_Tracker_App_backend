const {check , validationResult} = require('express-validator');
const  Income  = require ('../models/IncomeModel')

module.exports = {
    // get all income
    getIncome(req,res) {
        Income.find()
        .then((income) => res.json(income))
        .catch((err) => res.status(500).json({message : 'No GET Route'}));
    },
    // add a Income
    addIncome : 
        // check('name','amount','date','category','desription').notEmpty().withMessage('All fields are required'),
        (req,res)=> {
             // Check for validation errors
         //const errors = validationResult(req);
         if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
        } 
        Income.create(req.body)
        .then((income) => res.json(income))
        .catch((err) => {
            console.log(err);
            return res.status(500).json({message : 'Server Error'})
        })
    },

     //delete a Income
     deleteIncome(req,res) {
        Income.findOneAndDelete({_id:req.params.incomeid})
        .then((income) => 
            !income
                ? res.status(404).json({message: 'No income with this id'})
                : res.json(income) 
        ).catch((err) => res.status(500).json(err))
    },
    //Update Income
    updateIncome(req,res) {
        Income.findOneAndUpdate(
            {_id:req.params.incomeId},
            {$set:req.body},
            {runValidators:true, new: true}
        )
        .then((income) => 
            !income
              ? res.status(404).json({message: "No income with this id"})
              : res.json(income)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    }

}