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
            <div class="col-6"><ProjectComponent name="First" paragraph="Litatem eaqui de volupta cus, as volumenimust di accus sin rehenit ium re volorio consequis aut lam in pa volore et am."/></div>
            <div class="col-6"><ProjectComponent name="Second" paragraph="Litatem eaqui de volupta cus, as volumenimust di accus sin rehenit ium re volorio consequis aut lam in pa volore et am."/></div>
          </div>
          <div class="row">
          <div class="col-6"><ProjectComponent name="Third" paragraph="Litatem eaqui de volupta cus, as volumenimust di accus sin rehenit ium re volorio consequis aut lam in pa volore et am."/></div>
          <div class="col-6"><ProjectComponent name="Fourth" paragraph="Litatem eaqui de volupta cus, as volumenimust di accus sin rehenit ium re volorio consequis aut lam in pa volore et am."/></div>
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