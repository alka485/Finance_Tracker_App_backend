const router = require('express').Router();
const {
    getExpenses,
    addExpense,
    deleteExpense
} = require("../../controllers/expense");

//   /api/expenses
router.route('/').get(getExpenses).post(addExpense);

//    /api/expenses/:expenseId
router.route('/:expenseid').delete(deleteExpense);


module.exports = router;