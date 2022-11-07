import React, { useState } from "react";
import axios from "axios";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Sports() {
  const [searchSelection, setSearchSelection] = useState([])
  const [league, setLeague] = useState([]);
  const [team,setTeam ] = useState('');
  const [winner, setWinner] = useState([]);

  const fetchSports = async (url) => {
    let URL = 'https://react-dash-ts-11-22.herokuapp.com/api/v1/search';
    setTeam(url[0])
    let response = await axios.post(URL, { HomeTeam: url[0]})
    setLeague(response.data)
    filterWinners(league)
  } 
  const filterWinners = (league) => {
    let winnersArr = [];
    league.map(game => {
      if(team == game.HomeTeam && game.FTR == 'H' ) {
        return winnersArr.push(game.AwayTeam);
      }
      if(team == game.AwayTeam && game.FTR == 'A') {
        return winnersArr.push(game.HomeTeam);
      }
    })
    setWinner(winnersArr);
  }
  return (
    <div className="wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center"}}>
      <h1>Hello welcome to sports</h1>
      <form action="submit">
        <Typeahead
                  id="basic-typeahead-single"
                  labelKey="name"
                  onChange={fetchSports}
                  placeholder="Choose a team..."
                  options={teams}
                  selected={searchSelection}>
        </Typeahead>
        {winner.map(games => {
          return <h1 key={winner._id}>{games}</h1>})}
      </form>
      </div>
  )
}
const teams = [ 
  'Cagliari',
  'Juventus',
  'Genoa',
  "Chievo",
  "Sassuolo",
  "Fiorentina",
  "Torino",
  "Atalanta",
  "Lazio",
  "Udinese",
  "Spal",
  "Milan",
  "Benevento",
  "Sampdoria",
  "Crotone",
  "Napoli",
  "Bologna",
  "Roma",
  "Verona"
]