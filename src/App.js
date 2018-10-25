import React, { Component } from 'react';
import './resourses/styles.css'
import Header from './components/header/header'
class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px', backgroundColor:'lightblue'}}>
       <Header />
      </div>
    );
  }
}

export default App;
