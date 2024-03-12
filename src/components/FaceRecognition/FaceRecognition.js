import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl }) => {
    // const imageURL = {imageUrl};
    // const outlineCoords = [];

    return (
        <div className='center'>
            <img width='500px' height='auto' id='inputImage' alt='faces' src={imageUrl} />
           
            {/* {outlineCoords.map((coord, index) => (
                 console.log('in'),
            <div 
                key={index} 
                className='bounding-box' 
                style={{
                    top: coord.topRow,
                    right: coord.rightCol,
                    left: coord.leftCol,
                    bottom: coord.bottomRow
                }}
            ></div>
        ))} */}

        </div>
    )
            
}

export default FaceRecognition;