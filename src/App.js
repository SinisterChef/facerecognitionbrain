import React, { Component } from "react";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

const particleOptions = {
  particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
      },
      move: {
          direction: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 800,
          },
          value: 150,
      },
      opacity: {
          value: 0.5,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 5 },
      },
  },
  detectRetina: true,
}

//class is defined with a lowercase c
//Get particales working in class
class App extends Component {
    constructor(props) {
        //to be able to use this we call super
      super(props);
      //define states of everything, they can be anything
      //these are event listeners now, and their isnital state is set here
      this.state = {
        init: false,
        input: ''
      };
    }
  
    componentDidMount() {
      initParticlesEngine(async (engine) => {
        await loadAll(engine);
      }).then(() => {
        this.setState({ init: true });
      });
    }

    //gets called on an event so it gets passed the event
    //well put this as a prop on the imagelinkform
    onInputChange = (event) => {
        console.log(event.target.value);
    }


    onButtonSubmit = () => {
        console.log('click');
    }
  
    render() {
      return (
        <div className="App">
          {this.state.init && <Particles id="tsparticles" particlesLoaded={this.particlesLoaded} options={particleOptions} />}
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition />
        </div>
      );
    }
  }
  

export default App;
