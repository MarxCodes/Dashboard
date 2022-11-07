const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const FootballMatchSchema = new mongoose.Schema({
  Div: {
    type: String,
    minLength: 2,
    maxLength: 50, 
    required: true
  },
  Date: {
    type: String,
    minLength: 8,
    maxLength: 8, 
    required: true
  },
  HomeTeam: {
    type: String,
    minLength: 2,
    maxLength: 50, 
    required: true
  },
  AwayTeam: {
    type: String,
    minLength: 2,
    maxLength: 50, 
    required: true
  },
  FTHG: {
    type: String,
    minLength: 1,
    maxLength: 1, 
    required: true
  },
  FTAG: {
    type: String,
    minLength: 1,
    maxLength: 1, 
    required: true
  },
  FTR: {
    type: String,
    minLength: 1,
    maxLength: 1, 
    required: true
  }
});

FootballMatchSchema.methods.getHome = function(name) {
  return this.HomeTeam;
}
// football_data needed to return qurey in mongo
module.exports = mongoose.model('Match', FootballMatchSchema, 'football_data'); 