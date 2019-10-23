import React, { Component } from 'react';
import '../App.css'
import project_image from '../static/assets/drone.png';
import './ProjectComponent.css'

export default class ProjectComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      paragraph: props.paragraph
    }
  }

  render = () => {
    return (
      <div class="container">
        <img src={project_image} alt="Drone" class="center-fit" class="project-image"/>
        <hr/>
        <h3>{ this.state.name }</h3>
        <p>{ this.state.paragraph }</p>
        <button type="button" class="btn btn-primary">Donate for this project</button>
      </div>
    )
  }
}