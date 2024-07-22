const router = require('express').Router();
const {
    getExpense,
    addExpense,
    deleteExpense
} = require("../../controllers/expense");

//   /api/expenses
router.route('/').get(getExpense).post(addExpense);

//    /api/expenses/:expenseId
router.route('/:expenseid').delete(deleteExpense);


module.exports = router;