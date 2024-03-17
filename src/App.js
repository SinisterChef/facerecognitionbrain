import React, { Component } from "react";
import './App.css';
import './bootstrap.min.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Helmet } from 'react-helmet';
import { loadAll } from "@tsparticles/all";

const Title = 'Dank Brain';

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
              area: 200,
          },
          value: 50,
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

const returnClarifaiRequestOptions = (imageURL) => {
    const PAT = '5d74e64a813e4adcbced4e119706b229';
    const USER_ID = '7u5tuh27v9pc1';       
    const APP_ID = 'my-first-application-urznkk';
    //const MODEL_ID = 'face-detection';
    //const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
    const IMAGE_URL = imageURL;

    const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                    // "base64": IMAGE_BYTES_STRING
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

return requestOptions

}

//class is defined with a lowercase c
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        init: false,
        input: '',
        imageUrl: '',
        box: []
      };
    }

    calculateFaceLocation = (data) => {
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      data.forEach((item) => {
          item.left_col = item.left_col * width
          item.top_row = item.top_row * height
          item.right_col = width - item.right_col * width
          item.bottom_row = height - item.bottom_row * height
      });
      return data;
    };

    displayFaceBox = (box) => {
      this.setState({box: box})
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
        this.setState({ input: event.target.value });
    }

    //Image Call = This is where imgeURL is called and sent to the compontent this is where the API call needs to be set also
    onButtonSubmit = () => {
       this.setState({ imageUrl: this.state.input })

       fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/versions/" + "6dc7e46bc9124c5c8824be4822abe105" + "/outputs", returnClarifaiRequestOptions(this.state.input))
       .then(response => response.json())
       .then(result => {
   
           const regions = result.outputs[0].data.regions;
           let box = [];
           regions.forEach(region => {
               // Accessing and rounding the bounding box values
               const boundingBox = region.region_info.bounding_box;
               box.push(boundingBox);
           });
           this.displayFaceBox((this.calculateFaceLocation(box)));
       })
       .catch(error => console.log('error', error));
    }

    render() {
      return (
        <div className="App">
          <Helmet>
          <title>{ Title }</title>
          </Helmet>
          {this.state.init && <Particles id="tsparticles" particlesLoaded={this.particlesLoaded} options={particleOptions} />}
          <Logo />
          <ImageLinkForm
           onInputChange={this.onInputChange} 
           onButtonSubmit={this.onButtonSubmit} 
           />
          <FaceRecognition
          imageUrl={this.state.imageUrl}
          box={this.state.box} />
        </div>
      );
    }
  }
  

export default App;
