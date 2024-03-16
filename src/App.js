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

const returnClarifaiRequestOptions = (imageURL) => {
    //Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = '5d74e64a813e4adcbced4e119706b229';
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = '7u5tuh27v9pc1';       
    const APP_ID = 'my-first-application-urznkk';
    //Change these to whatever model and image URL you want to use
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
//Get particales working in class
class App extends Component {
    constructor(props) {
        //to be able to use this we call super
      super(props);
      //define states of everything, they can be anything
      //these are event listeners now, and their isnital state is set here
      //state is an object in react, we define and add variagbles to these states that are set as listners
      //we update the items with this.setState({state_name: value})
      //We can access these states any time with the this.state.state_name
      this.state = {
        init: false,
        input: '',
        imageUrl: '',
        box: {}
      };
    }

    calculateFaceLocation = (data) => {
      const clarifaiFace = data;
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      console.log(width);
      const height = Number(image.height);
      console.log(height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }

    displayFaceBox = (box) => {
      //console.log(box);
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
   
           regions.forEach(region => {
               // Accessing and rounding the bounding box values
               const boundingBox = region.region_info.bounding_box;
               const topRow = boundingBox.top_row.toFixed(3);
               const leftCol = boundingBox.left_col.toFixed(3);
               const bottomRow = boundingBox.bottom_row.toFixed(3);
               const rightCol = boundingBox.right_col.toFixed(3);
               this.displayFaceBox((this.calculateFaceLocation(boundingBox)));
               //console.log(this.calculateFaceLocation(boundingBox));
               
   
               region.data.concepts.forEach(concept => {
                   // Accessing and rounding the concept value
                   const name = concept.name;
                   const value = concept.value.toFixed(4);  
   
                   console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
                   
               });
           });
   
       })
       .catch(error => console.log('error', error));
    }

    //https://petapixel.com/assets/uploads/2011/02/averagefaces.jpg
    //https://i.pinimg.com/736x/35/29/83/352983c7917b84e29b6c3e0e5e452ef0.jpg
    //https://www.linkedin.com/pulse/detect-multiple-faces-using-clarifai-react-asfand-yar-aftab/
    render() {
      return (
        <div className="App">
          {this.state.init && <Particles id="tsparticles" particlesLoaded={this.particlesLoaded} options={particleOptions} />}
          <Navigation />
          <Logo />
          <Rank />
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
