const Match = require('../models/Football_Match');
const { StatusCodes } = require('http-status-codes');

const searchTeams = async (req,res) => {
  const { body: { HomeTeam }} = req;
  let team = await Match.find({ $or : [{HomeTeam: HomeTeam }, {AwayTeam: HomeTeam}]});
  return res.status(StatusCodes.OK).json(team);
}

module.exports = { searchTeams }