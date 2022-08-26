import React, {  useEffect, useState } from 'react'

import './Card.css'
const Card = () => {
   
    const [cardData, setCardData] = useState([])
    const API_URL = "https://dummyjson.com/products";
    useEffect(() => {
        fetch(API_URL)
           .then((response) => response.json())
           .then((data) => {
           
             
              console.log(data);
              setCardData(data.products);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
  return (
    <div>
       {cardData.map(index => (
    <div className="container" key={index.id}>
  <div className="card" >
    <div className="box">
      <div className="content"  >
      <img src={index.images[0]} alt={index.tumbnail}/>
        <h2>{index.title}</h2>
        <h3>{index.price}$</h3>
        <p>{index.description}</p>
      </div>
    </div>
  </div>
           </div>
       ))}
    </div>
  )
}

export default Card

