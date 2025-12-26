import "./ModalVideo.scss";

import { useEffect, useRef } from "react";

interface ModalVideoProps {
  src: string;
  width: string;
  height: number;
}

const ModalVideo = ({ src, width, height }: ModalVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideo = () => {
    videoRef.current?.play();
  };

  const stopVideo = () => {
    videoRef.current?.pause();
  };

  useEffect(() => {
    startVideo();

    return () => stopVideo();
  });

  return (
    <div
      className="modal-video__inner"
      style={{ width: width, height: height }}
    >
      <video
        className="modal-video__content"
        width={width}
        height={height}
        muted
        ref={videoRef}
        controls
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default ModalVideo;
