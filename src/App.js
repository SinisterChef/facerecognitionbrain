import React, { Component } from "react";
import './App.css';
import './bootstrap.min.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import { Helmet } from 'react-helmet';

const Title = 'Dank Brain';

const returnClarifaiRequestOptions = (imageURL) => {
    const PAT = '5d74e64a813e4adcbced4e119706b229';
    const USER_ID = '7u5tuh27v9pc1';       
    const APP_ID = 'my-first-application-urznkk';
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
  
    //gets called on an event so it gets passed the event
    //well put this as a prop on the imagelinkform
    onInputChange = (event) => {
        this.setState({ input: event.target.value });
    }

    //Image Call = This is where imgeURL is called and sent to the compontent this is where the API call needs to be set also
    onButtonSubmit = () => {
       this.setState({ imageUrl: this.state.input })

       fetch("https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs", returnClarifaiRequestOptions(this.state.input))
       .then(response => response.json())
       .then(result => {
          console.log(result);
           const regions = result.outputs[0].data.regions;
           if (regions !== undefined) {
           let box = [];
           regions.forEach(region => {
               // Accessing and rounding the bounding box values
               const boundingBox = region.region_info.bounding_box;
               box.push(boundingBox);
           });
           this.displayFaceBox((this.calculateFaceLocation(box)));
          } else {
            //resetting box state if API call returns undefined assuming the image did not have any faces so the DOM will be cleaned up in the FaceRecognition.js
            this.setState({ box: [] })
          }
        })
       .catch(error => console.log('error', error));
    }

    render() {
      return (
        <div className="App">
          <Helmet>
          <title>{ Title }</title>
          </Helmet>
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
