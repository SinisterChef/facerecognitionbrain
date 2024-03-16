import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='relative mt2'>
            <img id='inputImage' src={imageUrl} />
            {box ? (
            box.map((item) => (
            <div
              key={item.bottomRow}
              className='bounding-box'
              style={{
                top: item.top_row,
                right: item.right_col,
                bottom: item.bottom_row,
                left: item.left_col,
              }}
            ></div>
          ))
        ) : (
          <div></div>
        )}
            </div>
        </div>
    )           
}

export default FaceRecognition;