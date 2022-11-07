const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');
const upload = require('../middleware/uploadFiles');

const addImage = async(req, res) => {
  const { user: { userId }, } = req;


  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({user: { id: user._id}, token});
}

const uploadFiles = async (req,res) => {
  const { user: { userId }} = req;
  try {
    await upload(req,res);
    console.log(req.file);

    if(req.file == undefined) {
      return res.send({
        message: "File not selected"
      });
    }

    return res.send({
      message: "File successfully uploaded"
    })
  } catch(error) {
      throw new Error("Error uploading images: " + error);
  }
};


// const getListFiles = async (req,res) => {
//   try {
    
//   }
// }

// const login = async(req, res) => {
//   const { email, password } = req.body;
  
//   if(!email || !password) {
//     throw new BadRequestError('please provide an email and password to login');
//   }
  
//   const user = await User.findOne({email});
  
//   if(!user) throw new UnauthenticatedError('no user could be found with those details, please sign up');

//   const isPasswordCorrect = await user.comparePassword(password);

//   if(!isPasswordCorrect) throw new UnauthenticatedError("password doesn't match with email providede");

//   const token = user.createJWT();

//   res.status(StatusCodes.OK).json({user: { ud: user._id}, token});
// }

module.exports = { uploadFiles };