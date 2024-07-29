const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.registerUser = async(req,res) => {
    const{email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if (user)
            return res.status(400).json({msg: 'User already exist'});
        
        user = new User({
            email,
            password,
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

         const payload = {
            user: {
           id: user.id,
             },
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }

};
exports.logInUser = async (req,res) => {
    const{email,password} = req.body;
    try {
        let existingUser = await User.findOne({email});
        if (!existingUser)
            return res.status(400).json({msg: 'User doesn\'t exist'});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) 
            return res.status(400).json({ message: 'Invalid credentials' });
    
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });
    
        res.status(200).json({ result: existingUser, token });
    
     
      

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }

}