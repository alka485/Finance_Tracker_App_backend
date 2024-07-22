const router = require('express').Router();

const expenseRouter = require('./expenseRoutes');
const incomeRouter = require('./incomeRoutes')

router.use('/expense' , expenseRouter);
router.use('/income' ,  incomeRouter);

module.exports = router;