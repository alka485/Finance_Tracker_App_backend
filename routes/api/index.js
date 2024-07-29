const router = require('express').Router();

const expenseRouter = require('./expenseRoutes');
const incomeRouter = require('./IncomeRoutes');
const userRouter = require('./userRoutes');

router.use('/expense' , expenseRouter);
router.use('/income' ,  incomeRouter);
router.use('/signup', userRouter);

module.exports = router;