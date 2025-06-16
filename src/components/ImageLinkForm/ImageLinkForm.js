import React from 'react';
import './ImageLinkForm.css';
import CopyLink from '../CopyLink/CopyLink'; 

//destructing the prop so we don't need to use props.onInputChange everytime its just onInputChange
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='f3'>
            <p className='white text-shadow'>Dank Brain will detect human faces in your pictures. Enter a image URL below.</p>
            <p className='white text-shadow'>Here are a few examples <br />
            Crowd: <CopyLink url="https://bit.ly/4aner8T" /> <br />
            Baby: <CopyLink url="https://bit.ly/3WZRGTg" /> <br />
            Cat: <CopyLink url="https://bit.ly/3vt4qrS" />
            </p>
            <div className='center'>
                <div className='pa4 br3 center form'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='w-30 f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
            <p className="text-white text-shadow fs-6 col-6 offset-3">*Clarifai changed their CORS policy. API requests are now handled through a free-tier reverse proxy server hosted on Render.com. Requests are a bit slower, and the first request may take up to a minute to respond.</p>
        </div>
    )
}

export default ImageLinkForm;