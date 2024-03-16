import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {
    // const imageURL = {imageUrl};
    // const outlineCoords = [];
    console.log({box});
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img width='500px' height='auto' id='inputImage' alt='faces' src={imageUrl} />
            <div className='bounding-box' style={{left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow}}></div>
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
        </div>
    )
            
}

export default FaceRecognition;