const { Expense } = require ('../models/ExpenseModel')

module.exports = {
    // get all expense
    getExpense(req,res) {
        Expense.find()
        .then((expense) => res.json(expense))
        .catch((err) => res.status(500).json(err));
    }
}