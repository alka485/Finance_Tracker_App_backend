const { Expense } = require ('../models/ExpenseModel')

module.exports = {
    // get all expense
    getExpense(req,res) {
        Expense.find()
        .then((expense) => res.json(expense))
        .catch((err) => res.status(500).json(err));
    },
    // add a Expense
    addExpense(req,res) {
        Expense.add(req.body)
        .then((expense) => res.json(expense))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err)
        })
    }
}