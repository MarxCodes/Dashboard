const Match = require('../models/Football_Match');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const searchTeams = async (req,res) => {
  const { body: { HomeTeam }} = req;
  let team = await Match.find({ $or : [{HomeTeam: HomeTeam }, {AwayTeam: HomeTeam}]});
  // let team = await Match.find( {HomeTeam: HomeTeam } );
  console.log(team);
  return res.status(StatusCodes.OK).json(team);
}

module.exports = { searchTeams }