import React, { useEffect, useRef } from 'react';

function App() {
    const videoRef = useRef();

    useEffect(() => {
        const startScreenShare = async () => {
            try {
                const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing screen stream:', error);
            }
        };

        startScreenShare();

        return () => {
            const stream = videoRef.current.srcObject;
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div>
            <h1>화면공유 테스트</h1>
            <video ref={videoRef} autoPlay controls />
        </div>
    );
}

export default App;
