import React, { Component } from "react";
import './App.css';
import Navigation from './components/Navigation/Navigation';
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
      super(props);
      this.state = {
        init: false
      };
    }
  
    componentDidMount() {
      initParticlesEngine(async (engine) => {
        await loadAll(engine);
      }).then(() => {
        this.setState({ init: true });
      });
    }
  
    particlesLoaded(container) {
      console.log(container);
    }
  
    render() {
      return (
        <div className="App">
          {this.state.init && <Particles id="tsparticles" particlesLoaded={this.particlesLoaded} options={particleOptions} />}
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm />
          {/* <FaceRecognition /> */}
        </div>
      );
    }
  }
  

export default App;
