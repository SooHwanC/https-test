import React, { useEffect } from 'react';

function App() {
    const getScreenStream = (callback) => {
        if (navigator.getDisplayMedia) {
            navigator.getDisplayMedia({ video: true })
                .then(screenStream => {
                    callback(screenStream);
                })
                .catch(error => {
                    console.error('Error accessing screen stream:', error);
                });
        } else if (navigator.mediaDevices.getDisplayMedia) {
            navigator.mediaDevices.getDisplayMedia({ video: true })
                .then(screenStream => {
                    callback(screenStream);
                })
                .catch(error => {
                    console.error('Error accessing screen stream:', error);
                });
        } else {
            alert('Your browser does not support screen sharing');
        }
    };

    const handleGetScreen = () => {
        getScreenStream(screenStream => {
            const video = document.querySelector('video');
            video.srcObject = screenStream;
        });
    };

    return (
        <div>
            <h1>화면공유 테스트</h1>
            <button onClick={handleGetScreen}>Get Screen</button>
            <video autoPlay controls />
        </div>
    );
}

export default App;
