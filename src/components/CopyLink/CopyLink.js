import React, { useState } from 'react';
import './CopyLink.css';

const CopyLink = ({ url }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(url).then(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
    });
  };

  return (
    <>
      <a href="#" onClick={handleCopy} className="copy-link">
        {url}
      </a>
      {showPopup && <div className="popup">URL copied to clipboard</div>}
    </>
  );
};

export default CopyLink;