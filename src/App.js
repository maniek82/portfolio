import React, { Component } from 'react';
import './resourses/styles.css'
import Header from './components/header/header'
import Featured from './components/featured/index'
import Venue from './components/venue_info'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px',backgroundColor:'lightblue'}}>
       <Header />
       <Featured />
       <Venue />
      </div>
    );
  }
}

export default App;
