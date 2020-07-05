import React, { Component } from 'react';
import './App.css';
import Canvas from './Reusables/Canvas/Canvas';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <main>
        <nav className = 'heading'>
          <p> Just-Paint </p>
          <input type="text" id="fname" name="fname" placeholder= "File Name"/>
        </nav>  
        </main>
        <section className = 'canvas-area'>
          <Canvas />
        </section>
        <footer className = 'footer-part'>
          This website dosent have a copyright.
        </footer>
      </div>
    );
  }
}

export default App;
