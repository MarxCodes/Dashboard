import React,  { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import News from './pages/news/News';
import Sports from './pages/sports/Sports';
import Tasks from './pages/tasks/Task';
import Photo from './pages/photos/Photo';
import { Routes, Route} from "react-router-dom";
import Auth from './pages/auth/auth';
import moment from 'moment';
import axios from "axios";

const taskTests = [
  {text: 'primary test task'},
  {text: 'secondary test task'},
  {text: 'third test task'},
  {text: 'fourth test task'},
  {text: '.... test task'},
  {text: 'final test task'}
];


// interface RegisterResponse {
//   token: string,
//   user: object
// }

function isLoggedIn() {
  return moment().isBefore(getExpiration());
}
function getExpiration() {
  const expiration = localStorage.getItem("expires");
  const expiresAt = JSON.parse(expiration || '{}');
  return moment(expiresAt)

}
function setLocalStorage(resObj) {
  const expires = moment().add(1, 'days');
  localStorage.setItem('token', `Bearer ${resObj.token}`);
  localStorage.setItem('expires', JSON.stringify(expires.valueOf()))
}
// interface MatchFixture {
//   HomeTeam: string,
//   AwayTeam: string,
//   FTR: 'A' | 'H' | 'D'
// }
function App() {
  //weather
  // const [currentWeather, setCurrentWeather ] = useState(null);
  //news
  const [currentNews, setCurrentNews] = useState(null);
  const [news,setNews] = useState([]);

  //clothes
  const [clothes, setClothes] = useState();
  const [clothesdata, setClothesData ] = useState(null);
  //tasks
  const [tasks, setTasks] = useState(taskTests);
  //sports 
  const [searchSelection, setSearchSelection] = useState([])
  const [league, setLeague] = useState([]);
  const [team,setTeam ] = useState('');
  const [winner, setWinner] = useState([]);

  const fetchSports = async (url) => {
    let URL = '//localhost:3000/api/v1/search';
    let response = await axios.post(URL, { HomeTeam: 'Juventus'})
    setLeague(response.data)
  } 
  //news 
  const fetchNews = async () => {
    let URL = '//localhost:3000/api/v1/news';
    let response = await axios.get(URL);
    setNews(response.data);
  }
  useEffect(() => {
    fetchNews();
    fetchSports();
  }, [])
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Dashboard sportData={league} taskData={tasks} newsData={news}/>} />
      <Route path='/photos' element={<Photo/>} />
      <Route path='/news' element={<News newsData={news}/>} />
      <Route path='/tasks' element={<Tasks taskData={tasks}/>} />
      <Route path='/sports' element={<Sports/>} />
      <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </div>
  );
}

export default App;
