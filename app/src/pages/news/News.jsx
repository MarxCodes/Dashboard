import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsItem = ({newsData}) => (
  <div className="wrapper">
    <h1>{newsData.title}</h1>
    <pre>{newsData.pubDate}</pre>
    <img src={newsData.image} alt="" />
    <p>{newsData.content}</p>
  </div>
)


export default function News({newsData}) {
  return (
    <div className="wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center"}}>
      {
        newsData && <NewsItem newsData={newsData}/>
      } 
    </div>

    
  )
}