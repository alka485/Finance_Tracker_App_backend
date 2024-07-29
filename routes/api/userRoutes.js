const router = require('express').Router() ;
const {registerUser} = require("../../controllers/user.js")

// /api/signup
router.route('/').post(registerUser);


module.exports = router;