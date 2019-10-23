import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export class NavigationBar extends Component {
  render = () =>
    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-transparent">
      <div class="container">
        <a class="navbar-brand" href="google.de">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="google.de">The project<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="google.de">About us<span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="google.de">Ressources<span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="google.de">Blog<span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="google.de">Sponsor us<span class="sr-only"></span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

}