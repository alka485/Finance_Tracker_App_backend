const router = require('express').Router();
const {
    getIncome,
    addIncome,
    updateIncome,
    deleteIncome
} = require("../../controllers/income");

//  /api/income
router.route('/').get(getIncome).post(addIncome);

//   /api/income/:incomeId
router.route('/:incomeid')
.put(updateIncome)
.delete(deleteIncome);

module.exports = router;
