import "./Machine.scss";

import Section from "~/layouts/Section/Section";
import VideoButton from "~/components/VideoButton/VideoButton";
import ModalVideo from "~/components/ModalVideo/ModalVideo";
import CrossButton from "~/components/CrossButton/CrossButton";

import MachineVideo from "/video/machine.mp4";

import { useRef, useState } from "react";
import Modal from "react-modal";

// Modal.setAppElement("#root")

const Machine = () => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [playVideo, setPlayVideo] = useState<boolean>(false)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const openModal = () => {
		videoRef.current?.play()
		setPlayVideo(true)
		setIsOpen(true)
	}

	const closeModal = () => {
		videoRef.current?.pause()
		setIsOpen(false)
		setPlayVideo(false)
	} 

  return (	
    <Section sectionName="machine" mobileCenter>
      <div className="machine__inner container">
        <div className="machine__video-wrapper" onClick={openModal}>

          <video className="machine__video" width={1290} height={540} muted ref={videoRef}>
            <source src={MachineVideo} type="video/mp4" />
					</video>
						
					<VideoButton isPlay={playVideo}></VideoButton>
        </div>

				<Modal isOpen={isOpen} onRequestClose={closeModal} className={"modal-video"}>
					<ModalVideo src={MachineVideo} width={`clamp(30vw, ${1100 / 1400 * 100}vw, 1100px)`} height={610}></ModalVideo>
					<CrossButton top="-2.5rem" right="-3.125rem" onCloseButtonClick={closeModal} isLarge></CrossButton>
				</Modal>
      </div>
    </Section>
  );
};

export default Machine;
