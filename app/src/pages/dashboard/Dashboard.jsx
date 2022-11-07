import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactDOM from 'react-dom';
import { VictoryPie } from 'victory';
import { TaskInput } from "../tasks/Task";

const NewsCard = ({newsData}) =>{ 
  return (
  <div style={{
    height: 300,
    width: 260,
    backgroundColor: "greenyellow",
  }}>
    <Link to="/news">
    <h1>News</h1>
    </Link>
    <h1>{newsData.title}</h1>
    <pre>{newsData.pubDate}</pre>
    <p>{newsData.content}</p>
  </div>
)};

const AuthCard = () => (
  <div style={{
    height: 300,
    width: 260,
    backgroundColor: "greenyellow",
  }}>
    <Link to="/auth">
    <h1>Auth</h1>
    </Link>
  </div>
);
// const ClothesPieChart = data => (
// )


const ClothesCard = data => {
  let clothesCount = {};
  const pieArr = [];
  const [clothes, setClothes ] = useState(data);
  const [count, setCounter ] = useState(clothesCount);
  const [pieData, setPieData ] = useState(pieArr);

  const mapClothes = () => {
    for(const num of clothes.data) {
      setCounter(clothesCount[num.clothe] = clothesCount[num.clothe] ? clothesCount[num.clothe] + 1 : 1);
    }

    setCounter(clothesCount);
    for(const [key,value] of Object.entries(count)){
      pieArr.push({x: key, y: value})
      setPieData(pieArr)
    }
  }
  if(Object.keys(count) == 0) mapClothes()
  return (
  <div style={{
    height: 300,
    width: 260,
    backgroundColor: "greenyellow",
  }}>
    <h1>ClothesCard</h1>
    <VictoryPie labels={data.x} data={pieData}
 colorScale={["tomato", "orange", "gold", "cyan", "navy"]}/>
  </div>
)}

const SportsCard = () => (
  <div style={{
    height: 300,
    width: 260,
    backgroundColor: "greenyellow",
  }}>
    <Link to="/sports">
    <h1>SportsCard</h1>
    </Link>
    <h1>Juventus</h1>

  </div>
)

const TaskCard = ({taskData}) => {
  return (
  <div style={{
    height: 300,
    width: 260,
    backgroundColor: "greenyellow",
  }}>
    <Link to="/tasks">
    <h1>TaskCard</h1>
    </Link>
    <div className="input-wrapper">
    {taskData.map((val,i) => {
      if(i < 3) {
        return <TaskInput key={val.text} text={val.text}/>

      }
    })}

    </div>
  </div>
)}

const PhotoCard = () => (
  <div style={{
    height: 300,
    width: 260,
    backgroundColor: "greenyellow",

  }}>
    <Link to="/photos">

    <h1>PhotoCard</h1>
    </Link>
    <div className="image-container" style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      justifyItems: "center"
    }}>
      <img src={process.env.PUBLIC_URL + 'assets/bg-bubbles.png'} alt="" srcset="" style={{height: 80, width: 80, marginBottom: 10}} />
      <img src={process.env.PUBLIC_URL + "assets/bg-dashes.png"} alt="" srcset="" style={{height: 80, width: 80, marginBottom: 10}} />
      <img src={process.env.PUBLIC_URL + "assets/bg-slices.png"} alt="" srcset="" style={{height: 80, width: 80}} />
      <img src={process.env.PUBLIC_URL + "assets/BG-SWIRL.png"} alt="" srcset="" style={{height: 80, width: 80, objectFit: "none"}} />
      <img src="a" alt="" srcset="" />
    </div>
  </div>
)

const Weather = ({data}) => {
 return (<div style={{
    height: 300,
    width: 260,
    backgroundColor: "greenyellow",
  }} 
  >
    <h1>{data.data.name}</h1>
    <h3>{Math.round(data.data.main.temp)}</h3>
    <h4>{data.data.weather[0].description}</h4>
    <img src={`http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`} alt="" />
    
    <h1>Weather</h1>
  </div>)
}

export default function Dashboard({sportData, newsData, taskData}) {
  const [currentWeather, setCurrentWeather ] = useState(null);
  // const [currentNews, setCurrentNews] = useState(null);/
  const [lat,setLat] = useState(null);
  const [lng,setLng] = useState(null);
  const [position, setPosition] = useState(null);
  const [clothes, setClothes] = useState();
  const [clothesdata, setClothesData ] = useState(null);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      getWeathers(lat,lng);
      getClothes();
    })

  }, [])

  const getWeathers = async (lat,lng) => {
    let URL = '//localhost:3000/api/v1/weather';
    const currentWeatherFetch = await axios.post(URL,{lat,lng});
    setCurrentWeather(currentWeatherFetch)
    return currentWeatherFetch
  }
  const getClothes = async () => {
    let URL = '//localhost:3000/api/v1/clothes';
    const clothesFetch = await axios.get(URL);
    let payload = clothesFetch.data.payload;
    setClothes(payload);
    // console.log('initial clothes: ', clothes)
    // mapClothes()
  }
  // const mapClothes = () => {
  //   let clothesCount = {};
  //   console.log(clothes);

  //   for(const num of clothes) {
  //     clothesCount[num.clothe] = clothesCount[num.clothe] ? clothesCount[num.clothe] + 1 : 1;
  //   }
  //   setClothesData(clothesCount);
  //   console.log(clothesCount);
  //   pieDataManip()
  // }

  // const pieDataManip = () => {
  //   for(const [key,value] of Object.entries(clothesdata)){
  //     pieArr.push({x: key, y: value})
  //   }
  //   return pieArr
  // }

  return (
    <div className="wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center"}}>

    {currentWeather && <Weather data={currentWeather}/>}
    {newsData && <NewsCard newsData={newsData} />}
    <div className="card-wrap">
    
    {clothes && <ClothesCard data={clothes}/>}
    </div>
    <SportsCard />
    <TaskCard taskData={taskData} />
    <PhotoCard />
    <AuthCard/>
    </div>
  )
}