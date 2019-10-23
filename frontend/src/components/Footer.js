import React from "react";
import './Footer.css'
import logo from '../static/assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faInstagram,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";


export default () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm logo one">
          <img src={logo} alt="Logo" class="center-fit" />
        </div>
        <div class="col-sm outer-div">
          <div class="inner-div">
            <h4>Follow us</h4>
            <div class="menu">
              <span>
                <a href="https://www.facebook.com/" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/" className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </span>
              <span>
                <a href="https://www.pinterest.com/" className="pinterest social">
                  <FontAwesomeIcon icon={faPinterest} size="2x" />
                </a>
              </span>
              <span>
                <a href="https://www.google.com/" className="google social">
                  <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <h4>Stay in touch</h4>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="button-addon2"/>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}