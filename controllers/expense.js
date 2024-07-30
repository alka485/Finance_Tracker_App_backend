const {check , validationResult} = require('express-validator');
const  Expense  = require ('../models/ExpenseModel')

module.exports = {
    // get all expense
    getExpense(req,res) {
        Expense.find()
        .then((expense) => res.json(expense))
        .catch((err) => res.status(500).json({message : 'No GET Route'}));
    },
    // add a Expense
    addExpense :(req,res) => { 
        Expense.create(req.body)
        .then((expense) => res.json(expense))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err)
        })
    },

     //delete a Expense
     deleteExpense(req,res) {
        Expense.findOneAndDelete({_id:req.params.expenseid})
        .then((expense) => 
            !expense
                ? res.status(404).json({message: 'No expense with this id'})
                : res.json(expense) 
        ).catch((err) => res.status(500).json(err))
    },
    //Update Expense
    updateExpense(req,res) {
        Expense.findOneAndUpdate(
            {_id:req.params.expenseId},
            {$set:req.body},
            {runValidators:true, new: true}
        )
        .then((expense) => 
            !expense
              ? res.status(404).json({message: "No expense with this id"})
              : res.json(expense)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    }
}