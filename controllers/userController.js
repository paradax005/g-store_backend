const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


module.exports = {
  registerUser: asyncHandler ( 
    async (req, res) => {
        const { username , email , password } = req.body
        
        // validation 
        if(!username || !email || !password ){
            res.status(400)
            throw new Error("Please fill in all fields ! ")
        }
        if(password.length < 6){
            res.status(400)
            throw new Error("Password must be up to 6 characters ! ")
        }

        /**
         * Check if email already exist 
         */
        const userExist = await User.findOne({email})
        if(userExist){
            res.status(400)
            throw new Error("email has been already registred !")
        }

        // Create new User 
        const user = await User.create({
            username : username,
            email : email,
            password : password
        })

        if(user){
            const {_id , username , email  , birthDate , adresse } = user 
            res.status(201).json({
                _id, 
                username, 
                email, 
                birthDate, 
                adresse
            })
        }else{
            res.status(400)
            throw new Error("Invalid user data ! ")
        }
    }),
};
