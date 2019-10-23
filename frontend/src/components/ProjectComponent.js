import React from "react";
import '../App.css'
import project_image from '../static/assets/drone.png';


export default () => {
  return (
    <div>
      <img src={project_image} alt="Drone" class="center-fit" />
      <hr/>
      <h3>LA NIEBLA FOREST LODGES</h3>
      <p>Litatem eaqui de volupta cus, as volumenimust di accus sin rehenit ium re volorio consequis aut lam in pa volore et am.</p>
      <button type="button" class="btn btn-primary">Donate for this project</button>
    </div>
  )
}