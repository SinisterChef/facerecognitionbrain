import React from 'react';
import './FaceRecognition.css';

//build a function that selects all bounding boxes
//And deletes them and resets face_description

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
                {box.length ? (
                    <div id='face_description' className='face_description text-shadow'>
                        {box.length > 1 ? (
                            `There are probably ${box.length} faces in this photo`
                        ) : (
                            `There is probably ${box.length} face in this photo`
                        )}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default FaceRecognition;