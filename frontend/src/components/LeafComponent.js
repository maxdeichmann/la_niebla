import React from "react";
import '../App.css'
import leaf_image from '../static/assets/leaf.png';
import './LeafComponent.css'

export default () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-8">
        <img src={leaf_image} alt="Leaf" class="center-fit"/>
        </div>
        <div class="col-4">
          <div class="container">
            <h4>Our mission</h4>
            <h1>A collective responsibility</h1>
            <p>Rovid molupietur aut ut et elis dis dolorep elissintia quibus a quisAbore min consed qui doluptatia senihit es remporior aut abo. Ipiendi psunte et harum eum consequi sequissimint harum eiciae ipiendi beatem archicime officat volup</p>
            <button type="button" class="btn btn-primary">Discover our vision</button>
          </div>
        </div>
      </div>
    </div>
  )
}