import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./Components/Index";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Work from './Components/Work';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import SocialMedia from './Components/SocialMedia';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Index}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/work" component={Work}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/socialmedia" component={SocialMedia}/>
      </BrowserRouter>
    )
  }
}

export default App;