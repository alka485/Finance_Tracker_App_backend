const router = require('express').Router() ;
const {registerUser} = require("../../controllers/user.js")

// router.get('/', (req,res) => {
//     res.send("Page working")
// })

// /api/signup
router.route('/').post(registerUser);


module.exports = router;