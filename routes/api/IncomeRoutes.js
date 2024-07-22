const router = require('express').Router();
const {
    getIncome,
    addIncome,
    deleteIncome
} = require("../../controllers/income");

//  /api/income
router.route('/').get(getIncome).post(addIncome);

//   /api/income/:incomeId
router.route('/:incomeid').delete(deleteIncome);

module.exports = router;
