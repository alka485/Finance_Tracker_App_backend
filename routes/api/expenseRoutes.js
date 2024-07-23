const router = require('express').Router();
const {
    getExpense,
    addExpense,
    updateExpense,
    deleteExpense
} = require("../../controllers/expense");

//   /api/expenses
router.route('/').get(getExpense).post(addExpense);

//    /api/expenses/:expenseId
router.route('/:expenseid')
.put(updateExpense)
.delete(deleteExpense);


module.exports = router;