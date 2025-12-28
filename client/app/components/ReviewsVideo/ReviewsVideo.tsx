import "./ReviewsVideo.scss";

import { useState } from "react";
import Modal from "react-modal";

import VideoButton from "../VideoButton/VideoButton";
import ModalVideo from "../ModalVideo/ModalVideo";
import CrossButton from "../CrossButton/CrossButton";

import type { IReviewsVideo } from "~/data/ReviewsVideosData";

interface ReviewsVideoProps {
  reviewVideo: IReviewsVideo;
}

Modal.setAppElement("#root");

const ReviewsVideo = ({ reviewVideo }: ReviewsVideoProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { srcVideo, srcPreview, maxWidthVideo } = reviewVideo;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <article className="reviews__video reviews-video">
        <div className="reviews-video__preview" onClick={openModal}>
          <img
            src={srcPreview}
            alt=""
            className="reviews-video__preview-img"
            loading="lazy"
          />

          <VideoButton isSmall></VideoButton>
        </div>

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className={"modal-video"}
        >
          <ModalVideo
            src={srcVideo}
            width={`clamp(30vw, 76vw, ${maxWidthVideo}px)`}
            height={610}
          />
          <CrossButton isLarge top="-2.5rem" right="-3.125rem" onCloseButtonClick={closeModal} />
        </Modal>
      </article>
  );
};

export default ReviewsVideo;
