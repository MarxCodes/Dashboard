const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');

const register = async(req, res) => {
  console.log(req.body)
  const user = await User.create({...req.body});
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({user: { id: user._id, name: user.name}, token}).send('data successful');
}

const login = async(req, res) => {
  const { email, password } = req.body;
  
  if(!email || !password) {
    throw new BadRequestError('please provide an email and password to login');
  }
  
  const user = await User.findOne({email});
  
  if(!user) throw new UnauthenticatedError('no user could be found with those details, please sign up');

  const isPasswordCorrect = await user.comparePassword(password);

  if(!isPasswordCorrect) throw new UnauthenticatedError("password doesn't match with email providede");

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({user: { ud: user._id}, token});
}

module.exports = { register, login };