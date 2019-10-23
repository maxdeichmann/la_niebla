import React, { Component } from 'react';
import { NavigationBar } from "./components/NavigationBar"
import FirstComponent from "./components/FirstComponent"
import Footer from './components/Footer';
import LeafComponent from './components/LeafComponent'
import HelpComponent from './components/HelpComponent'

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
        <LeafComponent/>
        <HelpComponent/>
        <Footer/>
      </div>
    )
  }
}