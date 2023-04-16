import './index.css';
import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam"
import { Button} from '@chakra-ui/react'

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