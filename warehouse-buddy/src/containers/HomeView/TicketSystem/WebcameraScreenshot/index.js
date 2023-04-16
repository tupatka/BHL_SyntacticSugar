import './index.css';
import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam"
import { Button } from '@chakra-ui/react'

export const WebcamScreenshot = () => {

  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);

    let apiUrl = 'http://localhost:5000/save_image';
    let imageData = imageSrc.replace(/^data:image\/png;base64,/, '');
    let xd = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'No-Auth': 'True'
      },
      body: JSON.stringify({ image_data: imageData }), 
      compress: true
    }

    console.log(xd);

    fetch(apiUrl, xd )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [webcamRef]);


  return (
    <div className="webcam-container">
      {img === null ? (
        <>
            <Webcam
                audio={false}
                mirrored={true}
                height={400}
                width={400}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <div class="photo-button">
                <Button colorScheme='yellow' size="sm" onClick={capture}>Capture</Button>
            </div>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <div class="photo-button">
            <Button colorScheme='facebook' size="sm" onClick={() => setImg(null)}>Retake</Button>
          </div>
        </>
      )}
    </div>
  );

}