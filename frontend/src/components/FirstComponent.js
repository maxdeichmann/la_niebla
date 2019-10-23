import React from "react";
import background_image from '../static/assets/head.png';
import './FirstSection.css'

export default () => {
  return (
  <section>
    <div class="cont">
      <div class="imgbox">
        <img src={background_image} alt="Rainforest" class="center-fit"/>
      </div>      
      <div class="text-block">
        <h1>Conservando la naturale para el futuro</h1>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-primary">Watch the movie</button>
      </div>
      
      
    </div>
  </section>

  )
}