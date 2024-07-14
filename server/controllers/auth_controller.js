import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import createError from "../utils/createError.js";

// REGISTER

export const register = async (req,res,next)=>{
    try {
        const {UserName, email,password,role} = req.body;
        
          if (!UserName) {
            return res.send({
              message: "UserName is required / UserName not found ",
            });
          }
          if (!email) {
            return res.send({
              message: "email is required / email not found ",
            });
          }
          if (!email.toLowerCase().endsWith("@gmail.com")) {
            return res.send({
              message: "email is not valid Required @gmail Accout",
            });
          }
          if (!password) {
            return res.send({
              message: "password is required / password not found ",
            });
          }

          const existingUser = await User.findOne({ email });

          if (existingUser) {
            return res.send({
              status:true,
              message: "user with this email ID is already register",
            });
          }

        const hash =  bcrypt.hashSync(password,10);
        const newUser = new User({
            ...req.body,
             password: hash,
        });
        await newUser.save();
        return res.status(200).send({register:true,message:"User Created Succesfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal server Error, try after sometime"})
    }

}

// GET USER

export const getUser = async(req,res,next)=>{

  
    try {
      const {email}= req.body
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(200).send({
          success:true,
          userexists:true,
          message: "user found",
        });
      }
      return res.status(200).send({
        success:true,userexists:false
      })
  
    } catch (error) {
      console.log(error);
      return res.status(500).send({message:"Internal server Error, try after sometime"})

    }
    
  }

//LOGIN
export const LoginController = async(req,res) => {
    try {
        const {email,password} = req.body;
        if (!email) {
            return res.status(400).send({
                message:"email is required / email not found "
            })
        }

        if(!email.toLowerCase().endsWith("@gmail.com")){
            return res.status(400).send({
                message:"email is not valid "
            })
        }

        if (!password) {
            return res.send({
                message:"password is required / password not found "
            })
        }

        const newUser = await User.findOne({email})
        if (!newUser) {
            return res.send({
              status:500,
                message:"user not found"
            })
        }
        // const match = await comparePassword(password, newUser.password);
        const match = await bcrypt.compare(password,newUser.password)
        if (!match) {
            return res.send({
              password:false,
              message: "Incorrect password",
            });
          }
        
const token = await jwt.sign({id:newUser._id,email:newUser.email,isAdmin:newUser.isAdmin},process.env.JWT_SECRET,{
    expiresIn:'1d'
})

newUser.password= undefined
// const {password, ...other} = newUser._doc

res.cookie("accessToken",token,{httpOnly:true});
        return res.status(200).send({
            success:true,
            token,
            newUser,
            message:"login Succesfully",
            
        })
        
    } catch (error) {
        console.log(error);
    }
};


//  LOGOUT

export const logout = async (req,res)=>{
    res.clearCookie("accessToken",{
        sameSite: "none" ,
        secure: true,
    }).status(200).send("logouted successfully");
};


export const LoginGoogle = async(req,res) => {
    try {
        const {email} = req.body;
        if (!email) {
            return res.status(400).send({
                message:"email is required / email not found "
            })
        }

        if(!email.toLowerCase().endsWith("@gmail.com")){
            return res.status(400).send({
                message:"email is not valid "
            })
        }

        
        const newUser = await User.findOne({email})
        if (!newUser) {
          const newUser = new User({
            ...req.body,
            
        });
        const token = await jwt.sign({id:newUser._id,email:newUser.email,isAdmin:newUser.isAdmin},process.env.JWT_SECRET,{
          expiresIn:'1d'
      })
      res.cookie("accessToken",token,{httpOnly:true});
        return res.status(200).send({
            success:true,
            token,
            newUser,
            message:"login Succesfully",
            
        })
        }
        // const match = await comparePassword(password, newUser.password);
        
        
const token = await jwt.sign({id:newUser._id,email:newUser.email,isAdmin:newUser.isAdmin},process.env.JWT_SECRET,{
    expiresIn:'1d'
})

newUser.password= undefined
// const {password, ...other} = newUser._doc

res.cookie("accessToken",token,{httpOnly:true});
        return res.status(200).send({
            success:true,
            token,
            newUser,
            message:"login Succesfully",
            
        })
        
    } catch (error) {
        console.log(error);
    }
};


export const Googleregister = async (req,res,next)=>{
  try {
      const { email,UserName} = req.body;
      
        if (!UserName) {
          return res.send({
            message: "UserName is required / UserName not found ",
          });
        }
        if (!email) {
          return res.send({
            message: "email is required / email not found ",
          });
        }
        if (!email.toLowerCase().endsWith("@gmail.com")) {
          return res.send({
            message: "email is not valid Required @gmail Accout",
          });
        }
     
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          return res.send({
            status:true,
            message: "user with this email ID is already register",
          });
        }

      const hash =  bcrypt.hashSync(password,10);
      const newUser = new User({
          ...req.body,
           password: hash,
      });
      await newUser.save();
      return res.status(200).send({register:true,message:"User Created Succesfully"})
  } catch (error) {
      console.log(error);
      return res.status(500).send({message:"Internal server Error, try after sometime"})
  }

}
