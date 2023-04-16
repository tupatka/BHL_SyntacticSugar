import './index.css';
import React, { useCallback, useRef, useState } from "react";
import {Camera} from "react-camera-pro";
import { Button } from '@chakra-ui/react'

export const WebcamScreenshot = () => {

  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  // randomly mocked each image
  let user_id = 0 + Math.random() * (1000000 - 0);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.takePhoto();
    setImg(imageSrc);

    let apiUrl = 'http://localhost:5000/save_image';
    let imageData = imageSrc.replace(/^data:image\/png;base64,/, '');
    let req = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'No-Auth': 'True'
      },
      body: JSON.stringify({ image_data: imageData, id: user_id }),
    }
    user_id = user_id + 1;
    fetch(apiUrl, req)
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
            <div class="camera-container">
                <Camera
                    facingMode='environment'
                    ref={webcamRef}
                    aspectRatio={4/3}
                />
            </div>
            
            <div class="photo-button">
                <Button colorScheme='facebook' size="sm" variant="outline" onClick={capture}>Capture</Button>
            </div>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <div class="photo-button">
            <Button colorScheme='facebook' size="sm" variant="solid" onClick={() => setImg(null)}>Retake</Button>
          </div>
        </>
      )}
    </div>
  );

}