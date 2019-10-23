import React, { Component } from 'react';
import { TodoBanner } from "./components/TodoBanner";
import { TodoCreator } from "./components/TodoCreator";
import { TodoRow } from "./components/TodoRow";
import { VisibilityControl } from "./components/VisibilityControl"
import { NavigationBar } from "./components/NavigationBar"
import ReactPageScroller from "react-page-scroller";
import FirstComponent from "./components/FirstComponent"
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';



export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "Adam",
      todoItems: [{ action: "Buy Flowers", done: false },
      { action: "Get Shoes", done: false },
      { action: "Collect Tickets", done: true }, { action: "Call Joe", done: false }],
      showComplete: true
    }
  }

  render = () => {
    return (
      <div>
        <NavigationBar/>
        <FirstComponent/>
        {/* <SecondComponent/> */}
      </div>



    )
  }
}