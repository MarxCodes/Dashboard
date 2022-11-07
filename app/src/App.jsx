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

// interface MatchFixture {
//   HomeTeam: string,
//   AwayTeam: string,
//   FTR: 'A' | 'H' | 'D'
// }
function App() {
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
    let URL = 'https://react-dash-ts-11-22.herokuapp.com/api/v1/search';
    let response = await axios.post(URL, { HomeTeam: 'Juventus'})
    setLeague(response.data)
  } 
  //news 
  const fetchNews = async () => {
    let URL = 'https://react-dash-ts-11-22.herokuapp.com/api/v1/news';
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
      <Route path='/' element={<Auth/>} />
      <Route path='/dashboard' element={<Dashboard sportData={league} taskData={tasks} newsData={news} />} />
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
