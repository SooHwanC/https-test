import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket'; // websocket 패키지 불러오기
import axios from 'axios';

function App() {

    // const socket = new W3CWebSocket('ws://localhost:8085/CodeBridge/websocket');

    // socket.onopen = () => {
    //     console.log('WebSocket 연결 성공');
    // };

    // socket.onmessage = (event) => {
    //     const message = event.data;
    //     console.log('받은 메시지:', message);
    // };

    // axios.get('http://localhost:8085/CodeBridge/your-endpoint')
    //     .then(response => {
    //         console.log('성공?', response.data);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });



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
