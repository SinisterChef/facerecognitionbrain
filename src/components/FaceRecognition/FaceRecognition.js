import React from 'react';
import './FaceRecognition.css';


const renderSwitch = (param) => {
    switch(param.length) {
        case 0 :
            return `Doesn't look like there are any human faces in this image`;
        case 1 :
            return `There is probably ${param.length} face in this photo`;
        default :
            return `There are probably ${param.length} faces in this photo`;
    }
}

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='relative mt2'>
                <img id='inputImage' src={imageUrl} />
                {box ? (
                    box.map((item) => (
                        <div
                            key={item.bottom_row}
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
                {imageUrl ? (
                    <div id='face_description' className='face_description text-shadow'>
                        {renderSwitch(box)}
                    </div>
                ) : (
                    <div id='face_description' className='face_description text-shadow'></div>
                )}
            </div>
        </div>
    );
};

export default FaceRecognition;