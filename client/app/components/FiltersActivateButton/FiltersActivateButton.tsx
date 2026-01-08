import clsx from "clsx";
import "./FiltersActivateButton.scss";

interface FiltersActivateButtonProps {
  title: string;
  onClick: () => void;
  className: string;
}

const FiltersActivateButton = ({
  title,
  onClick,
  className,
}: FiltersActivateButtonProps) => {
  return (
    <button
      className={clsx("filters-activate-button", className)}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default FiltersActivateButton;
