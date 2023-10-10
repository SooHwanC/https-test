import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <div>
      <button onClick={openPopup}>팝업 열기</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <iframe title="popup" src="https://prod.liveshare.vsengsaas.visualstudio.com/join?1C627C86764672AF7F1D3E2415784A278A93"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
