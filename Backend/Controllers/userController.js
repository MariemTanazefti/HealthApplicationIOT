var  User  = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;


/**
 * Get all Users.
 */
 const getAllUser = async (req, res) => {
    try {
        console.log("ddd")
      const[ UsersList] = await User.getAll();
      res.status(200).json({ UsersList });
    } catch (err) {
      res.status(404).json({
        message: "No Data Found.",
      });
      throw err;
    }
  };
  /**
 * Get user By Id.
 */

 const GetUserId = async (req, res) => {
    try{
    const id = req.params.id;
    console.log(req.params.id)
    const [user1] = await User.findById(id);
    res.status(200).json({ user1 });


  }catch(err){
    res.status(404).json({
      message: "No Data Found.",
    });
    throw err;
    


  }

};

  /**
 * add user .
 */

 const NewUser = async (req, res,next) => {
 
   try{
    console.log("aaaaa")
    name1 = req.body.name;
    console.log(name1);
    email = req.body.email;
    password = req.body.password;
  
    const user1= await User.save(name1,email,password);
    res.status(201).json({  user1 }); 


   }catch(err){
    res.status(404).json({
      message:"No user added"
    });
    throw err;

   }
 }


/**
 * Update an existing User.
 */

 const UpdateUser = async (req, res) => {
  try{
    console.log("aaaaa")
    id = req.params.id;
    console.log(req.params['id']);
    name1 = req.body.name;
    console.log(name1);
    email = req.body.email;
    password = req.body.password;
   /*  date= req.body.date;
    picture= req.body.picture */
  
    const user1= await User.update(id,name1,email,password);
    res.status(201).json({ user1 }); 


   }catch(err){
    res.status(404).json({
      message:"No user updated"
    });
    throw err;

   }

};



/**
 * Login User.
 */

const Login = async (req, res) => {
  try{
    console.log("login")
    email=req.body.email;
    password=req.body.password;
    const [user1]= await User.findOne(email,password);
    if(email && password){
      res.status(201).json({ message: "Welcome", user1 }); 

    }

  }catch(err){
    res.status(404).json({
      message:"Error"
    });
    throw err;

   }

  
  }  


  /**
 * Logout User.
 */






 
  




module.exports = {
getAllUser,
NewUser,
UpdateUser,
Login,
GetUserId

}