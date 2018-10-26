import React, { Component } from 'react';
import './resourses/styles.css'
import Header from './components/header/header'
import Featured from './components/featured/index'
import Venue from './components/venue_info'
import Highlight from './components/highlights/index';
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header/footer'
import {Element} from 'react-scroll'
class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px'}}>
      
       <Header />
       <Element name="landing">
          <Featured />
       </Element>

      <Element name="venue">
          <Venue />
      </Element>
       
       <Element name="highlights">
          <Highlight/>
       </Element>

       <Element name="pricing">
          <Pricing />
       </Element>

       <Element name="location">
           <Location />
       </Element>
       
       <Footer />
      </div>
    );
  }
}

export default App;
