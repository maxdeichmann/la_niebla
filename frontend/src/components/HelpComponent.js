import React from "react";
import '../App.css'
import './HelpComponent.css'
import ProjectComponent from './ProjectComponent'
import logo from '../static/assets/logo.png';

export default () => {
  return (
    <div>
      <div class="headerimage"></div>
      <div id="backshape">
        <div class="wrapper">
          <div class="container">
          <div class="row">
            <div class="col-6">
              <img src={logo} alt="Logo" class="center-fit" />
            </div>
            <div class="col-6">
              <h1>How can you help?</h1>
              <h1>What is in for you?</h1>
              <p>Rovid molupietur aut ut et elis dis dolorep elissintia quibus a quisAborer aut ut et elis dis dolorep elissintia quibus a quisAbore min conse min consed qui doluptatia senihit?</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6"><ProjectComponent/></div>
            <div class="col-6"><ProjectComponent/></div>
          </div>
          <div class="row">
            <div class="col-6"><ProjectComponent/></div>
            <div class="col-6"><ProjectComponent/></div>
          </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="wrapper"></div>
      </div>
    </div>
  )
}