const router = require('express').Router() ;
const {registerUser} = require("../../controllers/user.js")

router.get('/', (req,res) => {
    res.send("Page working")
})

// /api/signup
router.route('/').post(registerUser);

// router.route('/').get((req,res)=> {
//     res.send("Page Working");
// })

// router.get('/', (req,res) => {
//     res.send("Page working")
// })


module.exports = router;