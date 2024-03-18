import React from 'react';
import './ImageLinkForm.css';


//destructing the prop so we don't need to use props.onInputChange everytime its just onInputChange
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='f3'>
            <p className='white text-shadow'>Dank Brain will detect human faces in your pictures. Enter a image URL below.</p>
            <div className='center'>
                <div className='pa4 br3 center form'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='w-30 f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;