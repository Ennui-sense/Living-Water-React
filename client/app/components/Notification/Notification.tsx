import "./Notification.scss";

import CrossButton from "../CrossButton/CrossButton";

import clsx from "clsx";

interface NotificationProps {
  title: string;
  imageSrc: string;
  availabilityInCompare: boolean;
	isVisible: boolean;
	closeModal: () => void
}

const Notification = ({
  title,
  imageSrc,
  availabilityInCompare,
	isVisible,
	closeModal
}: NotificationProps) => {
  return (
    <div className={clsx("notification", isVisible && "notification--visible")}>
      <div className="notification__inner">
        <div className="notification__wrapper-image">
          <img
            src={imageSrc}
            alt=""
            className="notification__image"
            width={57}
            height={57}
            loading="lazy"
          />
        </div>

        {availabilityInCompare ? (
          <span className="notification__text">
            Увы, {title} уже <a className="notification__link">в сравнении</a>
          </span>
        ) : (
          <span className="notification__text">
            {title} добавлен <a className="notification__link">к сравнению</a>
          </span>
        )}
      </div>

			<CrossButton top="1.25rem" right="1.25rem" onCloseButtonClick={closeModal}></CrossButton>
    </div>
  );
};

export default Notification;
