import "./VideoButton.scss";

import clsx from "clsx";

import StartVideoIcon from "~/assets/icons/start.svg?react";
import StopVideoIcon from "~/assets/icons/stop.svg?react";

interface VideoButtonProps {
  isPlay?: boolean;
  isSmall?: boolean;
}

const VideoButton = ({ isPlay, isSmall }: VideoButtonProps) => {
  return (
    <button
      type="button"
      className={clsx("video-button", { "video-button--small": isSmall })}
    >
      {isPlay ? (
        <StopVideoIcon></StopVideoIcon>
      ) : (
        <StartVideoIcon></StartVideoIcon>
      )}
    </button>
  );
};

export default VideoButton;
