const usermodel = require('../models/userModel')
const bcrypt = require('bcrypt')
module.exports = {
    UserSignupController: async(req,res)=>{
        const SALT_ROUND= 10
        try {

            const { username, email, password } = req.body;
            const existingUser = await usermodel.findOne({ email });
            if (existingUser) {
              return res.status(400).json({ message: "User already exists" });
            }
            const HashedPassword =await bcrypt.hash(password,SALT_ROUND)
            const user = new usermodel({ username, email, password: HashedPassword});
            await user
              .save()
              res.status(201).send({ message: "User Created Successfully",user:user }); 
          } catch (error) {
            console.log(error);
            res.status(500).json({ message:error.message });
          }
        
    },
    UserLoginController:async(req,res)=>{
        try{
          
            const  {email,password} = req.body
            const user = await usermodel.findOne({ email: email });
            
            if (!user) {
              return res.status(400).json({ message: "User not found." });
            }
            const isPasswordCorrect = await bcrypt.compare(
                password,
              user.password
            );
            
            if (!isPasswordCorrect) {
              return res
                .status(400)
                .json({ message: "Incorrect password. Please try again." });
            }
            const token = user.generateAuthToken()
            res.status(201).json({ data:user, message: "Loggin Successfully", token:token });
        }catch (error) {
            console.log(error);
            res.status(500).json({ message:error.message });
          }
    }

}