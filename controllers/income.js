const { Income } = require ('../models/IncomeModel')

module.exports = {
    // get all income
    getIncome(req,res) {
        Income.find()
        .then((income) => res.json(income))
        .catch((err) => res.status(500).json({message : 'No GET Route'}));
    },
    // add a Income
    addIncome(req,res) {
        Income.create(req.body)
        .then((income) => res.json(income))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err)
        })
    },
     //delete a Income
     deleteIncome(req,res) {
        Income.findOneAndDelete({_id:req.params.incomeid})
        .then((income) => 
            !income
                ? res.status(404).json({message: 'No income with this id'})
                : res.json(income) 
        ).then(()=> res.json({message: 'Expense Deleted'}))
         .catch((err) => res.status(500).json(err))
    }
}