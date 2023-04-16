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

  let user_id = 1;

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
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
          <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <Button onClick={capture}>Capture photo</Button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <Button onClick={() => setImg(null)}>Retake</Button>
        </>
      )}
    </div>
  );

}